import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "./pages/frontPage";
import { ListArticles } from "./pages/listArticles";
import { AddNewArticle } from "./pages/addNewArticle";
import React from "react";

export function Application() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage />} />
                <Route path={"/articles"} element={<ListArticles />} />
                />
                <Route path={"/articles/new"} element={<AddNewArticle />} />
            </Routes>
        </BrowserRouter>
    );
}