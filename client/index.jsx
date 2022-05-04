import React from "react";
import ReactDOM from "react-dom";

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

function ListArticles() {
    return (
        <div>
            <h1>Articles in the database</h1>
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