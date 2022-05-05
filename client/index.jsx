import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ListArticles } from "./listArticles";
import { AddNewArticle } from "./addNewArticle";

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

async function fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to load ${res.status}: ${res.statusText}`);
    }
    return await res.json();
}

async function postJSON(url, object) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(object),
    });
    if (!res.ok) {
        throw new Error(`Failed to post ${res.status}: ${res.statusText}`);
    }
}

function Application() {
    async function listArticles() {
        return await fetchJSON("/api/articles");
    }

    async function createArticle(article) {
        postJSON("/api/articles", article);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage />} />
                <Route
                    path={"/articles"}
                    element={<ListArticles listArticles={listArticles} />}
                />
                <Route
                    path={"/articles/new"}
                    element={<AddNewArticle createArticle={createArticle} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<Application />, document.getElementById("app"));