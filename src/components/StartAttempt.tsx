import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={progress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setProgress(false);
                    }}
                    disabled={!progress}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setAttempts(attempts + 1);
                    }}
                    disabled={progress}
                >
                    Mulligan
                </Button>
            </div>
            <div>
                <span>Attempts left: {attempts}</span>
            </div>
        </div>
    );
}
