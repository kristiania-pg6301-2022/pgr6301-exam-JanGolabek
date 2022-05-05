import request from "supertest";
import express from "express";
import { MongoClient } from "mongodb";
import { ArticlesApi } from "../articlesApi";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);
beforeAll(async () => {
    await mongoClient.connect();
    const database = mongoClient.db("test_database");
    await database.collection("test_db").deleteMany({});
    app.use("/api/articles", ArticlesApi(database));
});

afterAll(() => {
    mongoClient.close();
});

describe("articles api", () => {
    it("adds a new movie", async () => {
        const category = "test category"
        const title = "test title"
        const text = "test text"
        const author = "test author"
        await request(app)
            .post("/api/articles")
            .send({
             category, title, text, author
            })
            .expect(200);
        expect(
            (await request(app).get("/api/articles").expect(200)).body.map(
                ({ title }) => title
            )
        ).toContain(title);
    });

});