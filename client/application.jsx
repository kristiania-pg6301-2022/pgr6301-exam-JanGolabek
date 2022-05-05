import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FrontPage } from "./pages/frontPage";
import { ListArticles } from "./pages/listArticles";
import { AddNewArticle } from "./pages/addNewArticle";
import React, { useContext } from "react";
import "./application.css";
import { LoginPage } from "./pages/loginPage";
import { useLoading } from "./useLoading";
import { ArticlesApiContext } from "./articlesApiContext";


export function Application() {
    const { fetchLogin } = useContext(ArticlesApiContext);
    const { data, error, loading } = useLoading(fetchLogin);

    if (error) {
        return <div>Error: {error.toString()}</div>;
    }
    if (loading) {
        return <div>Please wait...</div>;
    }


    return (
        <BrowserRouter>
            <header>
                <Link to={"/"}>Front page</Link>
                <Link to={"/articles"}>Articles</Link>
                <div className="menu-divider" />
                {data?.user ? (
                    <Link to={"/profile"}>Profile for {data.user.name}</Link>
                ) : (
                    <Link to={"/login"}>Login</Link>
                )}
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