import { Router } from "express";

const articles = [
    {
        title: "Article 1",
    },
    {
        title: "Article 2",
    },
];

export function ArticlesApi() {
    const router = new Router();

    router.get("/", (req, res) => {
        res.json(articles);
    });

    router.post("/new", (req, res) => {
        res.sendStatus(500);
    });

    return router;
}