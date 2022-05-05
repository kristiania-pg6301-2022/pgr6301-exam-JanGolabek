import React from "react";
import { fetchJSON } from "./lib/fetchJSON";

export const ArticlesApiContext = React.createContext({
    async listArticles() {
        return await fetchJSON("/api/articles");
    },
});