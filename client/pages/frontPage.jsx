import { Link } from "react-router-dom";
import React from "react";

export function FrontPage() {
    return (
        <div>
            <h1>Article Database</h1>
            <ul>
                <li>
                    <Link to={"/articles"}>List articles</Link>
                </li>
                <li>
                    <Link to={"/articles/new"}>Add new article</Link>
                </li>
            </ul>
        </div>
    );
}