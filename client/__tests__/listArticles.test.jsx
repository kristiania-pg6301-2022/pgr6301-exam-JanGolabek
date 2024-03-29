import { ListArticles } from "../pages/listArticles";
import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import { ArticlesApiContext } from "../articlesApiContext";


describe("ListArticles component", () => {
    it("shows loading screen", () => {
        const domElement = document.createElement("div");
        ReactDOM.render(<ListArticles />, domElement);
        expect(domElement.innerHTML).toMatchSnapshot();
    });

    it("shows articles", async () => {
        const articles = [{ title: "article 1" }, { title: "article 2" }];
        const domElement = document.createElement("div");
        await act(async () => {
            ReactDOM.render(
                <ArticlesApiContext.Provider value={{ listArticles: () => articles }}>
                    <ListArticles />
                </ArticlesApiContext.Provider>,
                domElement
            );
        });

        expect(
            Array.from(domElement.querySelectorAll("h2")).map((e) => e.innerHTML)
        ).toEqual(["article 1", "article 2"]);

        expect(domElement.innerHTML).toMatchSnapshot();
    });

    it("queries by category", async () => {
        const domElement = document.createElement("div");
        const listArticles = jest.fn(() => []);
        await act(async () => {
            ReactDOM.render(
                <ArticlesApiContext.Provider value={{ listArticles }}>
                    <ListArticles />
                </ArticlesApiContext.Provider>,
                domElement
            );
        });
        Simulate.change(domElement.querySelector("#category-query"), {
            target: { value: "Politics" },
        });
        await act(async () => {
            await Simulate.submit(domElement.querySelector("form"));
        });
        expect(listArticles).toHaveBeenCalledWith({
            category: "Politics",
        });
    });

    it("shows error message", async () => {
        const domElement = document.createElement("div");
        await act(async () => {
            const listArticles = () => {
                throw new Error("Something went wrong");
            };
            ReactDOM.render(
                <ArticlesApiContext.Provider value={{ listArticles }}>
                    <ListArticles />
                </ArticlesApiContext.Provider>,
                domElement
            );
        });

        expect(domElement.querySelector("#error-text").innerHTML).toEqual(
            "Error: Something went wrong"
        );
        expect(domElement.innerHTML).toMatchSnapshot();
    });
});