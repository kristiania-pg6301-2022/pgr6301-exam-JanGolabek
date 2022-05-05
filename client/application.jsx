import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FrontPage } from "./pages/frontPage";
import { ListArticles } from "./pages/listArticles";
import { AddNewArticle } from "./pages/addNewArticle";
import React from "react";
import "./application.css";
import { LoginPage } from "./pages/loginPage";


export function Application() {

    return (
        <BrowserRouter>
            <header>
                <Link to={"/"}>Front page</Link>
                <Link to={"/articles"}>Articles</Link>
                <div className="menu-divider" />
                <Link to={"/login"}>Login</Link>
            </header>
            <main>
                <Routes>
                    <Route path={"/"} element={<FrontPage />} />
                    <Route path={"/articles"} element={<ListArticles />} />
                    <Route path={"/articles/new"} element={<AddNewArticle />} />
                    <Route path={"/login/*"} element={<LoginPage />} />
                    <Route path={"*"} element={<h1>Not found</h1>} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}