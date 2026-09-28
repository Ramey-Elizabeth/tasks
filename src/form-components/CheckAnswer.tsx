import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [text, setText] = useState<string>("");

    function updateText(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="textbox">
                <Form.Label>Response</Form.Label>
                <Form.Control
                    type="textbox"
                    placeholder=""
                    value={text}
                    onChange={updateText}
                />
            </Form.Group>
            <div>{text === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
