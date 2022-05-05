import request from "supertest";
import express from "express";
import { MongoClient } from "mongodb";
import { ArticlesApi } from "../articlesApi";
import dotenv from "dotenv";

dotenv.config();

const app = express();

beforeAll(async () => {
    const mongoClient = new MongoClient(process.env.MONGODB_URL);
    await mongoClient.connect();
    app.use("/api/articles", ArticlesApi(mongoClient.db("articlesExam")));
});

describe("articles api", () => {
    it("lists existing articles", async () => {
        expect(
            (await request(app).get("/api/articles").expect(200)).body.map(
                ({ title }) => title
            )
        ).toContain("Cristo Ronaldo");
    });
});