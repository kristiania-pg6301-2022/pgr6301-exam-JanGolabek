import { fetchJSON } from "./lib/fetchJSON";
import { postJSON } from "./lib/postJSON";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "./pages/frontPage";
import { ListArticles } from "./pages/listArticles";
import { AddNewArticle } from "./pages/addNewArticle";
import React from "react";

export function Application() {
    async function listArticles() {
        return await fetchJSON("/api/articles");
    }

    async function createArticle(article) {
        await postJSON("/api/articles", article);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage />} />
                <Route
                    path={"/articles"}
                    element={<ListArticles listArticles={listArticles()} />}
                />
                <Route
                    path={"/articles/new"}
                    element={<AddNewArticle createArticle={createArticle()} />}
                />
            </Routes>
        </BrowserRouter>
    );
}