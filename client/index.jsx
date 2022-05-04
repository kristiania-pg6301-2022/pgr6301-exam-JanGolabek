import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function FrontPage() {
    return (
        <div>
            <h1>Article Database</h1>
            <ul>
                <li>
                    <Link to={"/articles"}>List articles</Link>
                </li>
                <li>
                    <Link to={"/articles/new"}>Add new article</Link>
                </li>
            </ul>
        </div>
    );
}

function useLoading(loadingFunction) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState();

    async function load() {
        try {
            setLoading(true);
            setData(await loadingFunction());
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load();
    }, []);

    return { loading, error, data };
}

async function fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to load ${res.status}: ${res.statusText}`);
    }
    return await res.json();
}


function ListArticles() {

    const { loading, error, data } = useLoading(async () =>
        fetchJSON("/api/articles")
    );

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
            <h1>Articles in the database</h1>
            <ul>
                {data.map((article) => (
                    <li key={article.title}>{article.title}</li>
                ))}
            </ul>
        </div>
    );
}

function AddNewArticle() {
    return (
        <form>
            <h1>Add new Article</h1>
        </form>
    );
}

function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage />} />
                <Route path={"/articles"} element={<ListArticles />} />
                <Route path={"/articles/new"} element={<AddNewArticle />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<Application />, document.getElementById("app"));