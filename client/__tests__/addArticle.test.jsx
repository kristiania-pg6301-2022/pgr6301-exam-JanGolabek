import { AddNewArticle } from "../addNewArticle";
import React from "react";
import ReactDOM from "react-dom";

describe("add article component", () => {
    it("shows article form", () => {
        const element = document.createElement("div");
        ReactDOM.render(<AddNewArticle />, element);
        expect(element.innerHTML).toMatchSnapshot();
        expect(
            Array.from(element.querySelectorAll("form label strong")).map(
                (e) => e.innerHTML
            )
        ).toEqual(["Category:", "Title:", "Author:", "Text:"]);
    });
});