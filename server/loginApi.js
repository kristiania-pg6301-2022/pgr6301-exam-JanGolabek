import express from "express";
import fetch from "node-fetch";

const discovery_endpoint =
    "https://accounts.google.com/.well-known/openid-configuration";

async function fetchJSON(url, options) {
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(`Failed ${res.status}`);
    }
    return await res.json();
}

export function LoginApi() {
    const router = new express.Router();

    router.get("/", async (req, res) => {
        const { access_token } = req.signedCookies;
        const response = {};
        if (access_token) {
            const { userinfo_endpoint } = await fetchJSON(discovery_endpoint);
            const userinfo = await fetch(userinfo_endpoint, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            if (userinfo.ok) {
                response.user = await userinfo.json();
            }
        }
        res.json(response);
    });

    router.post("/", (req, res) => {
        const { access_token } = req.body;
        res.cookie("access_token", access_token, { signed: true });
        res.sendStatus(200);
    });
    return router;
}