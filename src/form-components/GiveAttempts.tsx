import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    function subtractOne() {
        if (attemptsLeft > 0) {
            setAttemptsLeft((attemptsLeft) => attemptsLeft - 1);
        }
    }
    function increaseAmount() {
        const count = parseInt(attemptsRequested);
        !isNaN(count) ?
            setAttemptsLeft((attemptsLeft) => attemptsLeft + count)
        :   setAttemptsLeft(attemptsLeft);
        setAttemptsRequested("");
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>

            <Form.Group controlId="formAttemptsRequested">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAttemptsRequested(event.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={subtractOne} disabled={attemptsLeft === 0}>
                use
            </Button>
            <Button onClick={increaseAmount}>gain</Button>
        </div>
    );
}
