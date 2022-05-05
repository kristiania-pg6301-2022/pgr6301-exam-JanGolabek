import { act, Simulate } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import React from "react";
import { LoginPage } from "../pages/loginPage";

describe("login page", () => {
    it("logs in with google", async () => {
        // replace window.location to be able to detect redirects
        const location = new URL("https://www.example.com");
        delete window.location;
        window.location = new URL(location);

        const authorization_endpoint = `https://foo.example.com/auth`;
        global.fetch = async () => ({
            ok: true,
            json: () => ({ authorization_endpoint }),
        });

        const domElement = document.createElement("div");
        ReactDOM.render(<LoginPage />, domElement);
        await act(async () => {
            await Simulate.click(domElement.querySelector("button"));
        });
        const client_id = `1095582733852-smqnbrhcoiasjjg8q28u0g1k3nu997b0.apps.googleusercontent.com`;
        const redirect_uri = encodeURIComponent(
            `${location.origin}/login/callback`
        );
        expect(window.location.href).toEqual(
            `${authorization_endpoint}?response_type=token&client_id=${client_id}&scope=email+profile&redirect_uri=${redirect_uri}`
        );
    });
});