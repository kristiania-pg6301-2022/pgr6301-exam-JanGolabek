import React from "react";
import { fetchJSON } from "./lib/fetchJSON";
import { postJSON } from "./lib/postJSON";

export const ArticlesApiContext = React.createContext({
    async listArticles(query) {
        return await fetchJSON("/api/articles?" + new URLSearchParams(query));
    },
    async createArticle(article) {
        return await postJSON("/api/articles", article);
    },
});