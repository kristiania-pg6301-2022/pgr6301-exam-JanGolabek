import React, { useState } from "react";

function FormInput({ label, value, onChangeValue }) {
    return (
        <div>
            <label>
                <strong>{label}</strong>{" "}
                <input value={value} onChange={(e) => onChangeValue(e.target.value)} />
            </label>
        </div>
    );
}

export function AddNewArticle() {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    return (
        <form>
            <h1>Add new Article</h1>
            <FormInput label={"Category:"} value={category} onChangeValue={setCategory} />
            <FormInput label={"Title:"} value={title} onChangeValue={setTitle} />
            <FormInput label={"Author:"} value={author} onChangeValue={setAuthor} />
            <FormInput label={"Text:"} value={text} onChangeValue={setText} />
        </form>
    );
}