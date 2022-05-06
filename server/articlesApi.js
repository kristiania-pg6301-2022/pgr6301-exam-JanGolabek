import { Router } from "express";

export function ArticlesApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const query = {};
        const { category } = req.query;

        if (category) {
            query.category = { category };
        }
        const articles = await mongoDatabase
            .collection("articlesDb")
            .find()
            .toArray();
        res.json(articles);
    });

    router.post("/", (req, res) => {
        const { category, title, author, text } = req.body;
        mongoDatabase
            .collection("articlesDb")
            .insertOne({ category, title, author, text });
        res.sendStatus(200);
    });

    return router;
}