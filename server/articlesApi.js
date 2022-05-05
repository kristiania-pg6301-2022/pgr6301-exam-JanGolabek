import { Router } from "express";

export function ArticlesApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const articles = await mongoDatabase
            .collection("articlesDb")
            .find()
            .toArray();
        res.json(articles);
    });

    router.post("/new", (req, res) => {
        res.sendStatus(500);
    });

    return router;
}