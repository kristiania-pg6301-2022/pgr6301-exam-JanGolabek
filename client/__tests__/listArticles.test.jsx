import { ListArticles } from "../pages/listArticles";
import React from "react";
import ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";

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
            ReactDOM.render(<ListArticles listArticles={() => articles} />, domElement);
        });

        expect(
            Array.from(domElement.querySelectorAll("h2")).map((e) => e.innerHTML)
        ).toEqual(["article 1", "article 2"]);

        expect(domElement.innerHTML).toMatchSnapshot();
    });

    it("shows error message", async () => {
        const domElement = document.createElement("div");
        await act(async () => {
            ReactDOM.render(
                <ListArticles
                    listArticles={() => {
                        throw new Error("Something went wrong");
                    }}
                />,
                domElement
            );
        });

        expect(domElement.querySelector("#error-text").innerHTML).toEqual(
            "Error: Something went wrong"
        );
        expect(domElement.innerHTML).toMatchSnapshot();
    });
});