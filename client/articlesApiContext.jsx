import React from "react";
import { fetchJSON } from "./lib/fetchJSON";
import { postJSON } from "./lib/postJSON";

export const ArticlesApiContext = React.createContext({
    async fetchLogin() {
        return await fetchJSON("/api/login");
    },
    async listArticles(query) {
        return await fetchJSON("/api/articles?" + new URLSearchParams(query));
    },
    async createArticle(article) {
        return await postJSON("/api/articles", article);
    },
    async registerLogin(login) {
        return await postJSON("/api/login", login);
    },
});