import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ArticlesApiContext } from "../articlesApiContext";

export function LoginCallback({ reload }) {
    const navigate = useNavigate();
    const { registerLogin } = useContext(ArticlesApiContext);
    useEffect(async () => {
        const { access_token } = Object.fromEntries(
            new URLSearchParams(window.location.hash.substring(1))
        );
        await registerLogin({ access_token });
        reload();
        navigate("/");
    });
    return <h1>Please wait...</h1>;
}

export function EndSession({ reload }) {
    const navigate = useNavigate();
    const { endSession } = useContext(ArticlesApiContext);
    useEffect(async () => {
        await endSession();
        reload();
        navigate("/");
    });
    return <h1>Please wait...</h1>;
}



function LoginButton({ config, label }) {
    async function handleLogin() {
        const { authorization_endpoint, client_id } = config;
        const parameters = {
            response_type: "token",
            client_id,
            scope: "email profile",
            redirect_uri: window.location.origin + "/login/callback",
        };

        window.location.href =
            authorization_endpoint + "?" + new URLSearchParams(parameters);
    }
    return (
        <div>
            <button onClick={handleLogin}>{label}</button>
        </div>
    );
}

function StartLogin({ config }) {

    return (
        <div>
            <h1>Login</h1>
            <LoginButton label={"Login with Gooogle"} config={config.google} />
        </div>
    );
}
export function LoginPage({ config, reload }) {
    return (
        <Routes>
            <Route path={"/"} element={<StartLogin config={config} />} />
            <Route
                path={"/callback"}
                element={<LoginCallback config={config} reload={reload} />}
            />
            <Route path={"/endsession"} element={<EndSession reload={reload} />} />
            <Route path={"*"} element={<StartLogin config={config} />} />
        </Routes>
    );
}