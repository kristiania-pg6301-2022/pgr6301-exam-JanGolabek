import React, { useContext } from "react";
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
    const { loading, error, data } = useLoading(listArticles);

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
            <h1>Article in the database</h1>
            {data.map((article) => (
                <ArticleCard key={article.title} article={article} />
            ))}
        </div>
    );
}