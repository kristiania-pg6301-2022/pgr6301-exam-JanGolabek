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

    router.post("/", (req, res) => {
        const { category, title, text, author } = req.body;
        const result = mongoDatabase.collection("articlesDb").insertOne({
            category,
            title,
            text,
            author
        });
        res.sendStatus(200);
    });

    return router;
}