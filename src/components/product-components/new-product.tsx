'use client';
import React, { useState } from "react";

export default function NewProduct() {
    const [ enteredBody, setEnteredBody ] = useState('');

    function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setEnteredBody(event.target.value);
    }

    return (
        <form className="flex flex-col gap-4 p-6 bg-white border rounded-lg">
            <p className="flex flex-col gap-1">
                <label htmlFor="body">Text</label>
                <textarea className="border" id="body" required rows={3} onChange={changeBodyHandler} />
            </p>
            <p>
                {enteredBody}
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required />
            </p>
        </form>
    );
}