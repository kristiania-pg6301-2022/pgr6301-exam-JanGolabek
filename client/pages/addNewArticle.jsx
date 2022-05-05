import React, { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../lib/formInput";
import {ArticlesApiContext} from "../articlesApiContext";

export function AddNewArticle() {
    const { createArticle } = useContext(ArticlesApiContext);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        createArticle({ category, title, author, text });
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add new Article</h1>

            <FormInput label={"Category:"} value={category} onChangeValue={setCategory} />
            <FormInput label={"Title:"} value={title} onChangeValue={setTitle} />
            <FormInput label={"Author:"} value={author} onChangeValue={setAuthor} />
            <FormInput label={"Text:"} value={text} onChangeValue={setText} />

            <div>
                <button>Submit</button>
            </div>
        </form>
    );
}