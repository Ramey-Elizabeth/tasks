import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeType(): void {
        setQuestionType(
            questionType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <div>
            <div>
                <Button onClick={changeType}>Change Type</Button>
            </div>
            <div>
                {questionType === "short_answer_question" ?
                    <span>Short Answer</span>
                :   <span>Multiple Choice</span>}
            </div>
        </div>
    );
}
