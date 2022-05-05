import React from "react";
import { useLoading } from "./useLoading";

function ArticleCard({ article: { category, title, text, author } }) {
    return (
        <>
            <p>{category}</p>
            <h2>{title}</h2>
            <p>{text}</p>
            <p>
                <i>Written by: {author}</i>
            </p>
        </>
    );
}
export function ListArticles({ listArticles }) {
    const { loading, error, data } = useLoading(listArticles);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <div>{error.toString()}</div>
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