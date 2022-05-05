import { ListArticles } from "../listArticles";

import React from "react";
import ReactDOM from "react-dom";

describe("ListArticles component", () => {
    it("shows loading screen", () => {
        const domElement = document.createElement("div");
        ReactDOM.render(<ListArticles />, domElement);
        expect(domElement.innerHTML).toMatchSnapshot();
    });
});