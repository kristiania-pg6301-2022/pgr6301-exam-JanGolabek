import React, { useContext, useState } from "react";
import { useLoading } from "../useLoading";
import { ArticlesApiContext } from "../articlesApiContext";

function ArticleCard({ article: { category, title, author, text } }) {
    return (
        <>
            <p>{category}</p>
            <h2>{title}</h2>
            <p>
                <i>Written by: {author}</i>
            </p>
            <p>{text}</p>

        </>
    );
}
export function ListArticles() {
    const { listArticles } = useContext(ArticlesApiContext);
    const [category, setCategory] = useState(undefined);
    const [categoryQuery, setCategoryQuery] = useState("");
    const { loading, error, data } = useLoading(
        async () => await listArticles({ category }),
        [category]
    );

    function handleSubmitQuery(e) {
        e.preventDefault();
        setCategory(categoryQuery);
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <div>{error.toString()}</div>
                <div id="error-text">{error.toString()}</div>
            </div>
        );
    }
    return (
        <div>
            <h1>Articles in the database</h1>

            <div>
                <form onSubmit={handleSubmitQuery}>
                    <label>
                        Category:
                        <input
                            id="category-query"
                            value={categoryQuery}
                            onChange={(e) => setCategoryQuery(e.target.value)}
                        />
                        <button>Filter</button>
                    </label>
                </form>
            </div>

            {data.map((article) => (
                <ArticleCard key={article.title} article={article} />
            ))}
        </div>
    );
}