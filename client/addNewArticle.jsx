import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormInput({ label, value, onChangeValue }) {
    return (
        <div className="form-input">
            <label>
                <strong>{label}</strong>{" "}
                <input value={value} onChange={(e) => onChangeValue(e.target.value)} />
            </label>
        </div>
    );
}

export function AddNewArticle({ createArticle}) {
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