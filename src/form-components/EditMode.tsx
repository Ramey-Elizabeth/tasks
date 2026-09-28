import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-switch"
                label="Edit"
                checked={isEdit}
                onChange={updateEditMode}
            />
            {isEdit ?
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>
                    )
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student"
                        checked={isStudent}
                        onChange={(event) => {
                            setStudent(event.target.checked);
                        }}
                    />
                </div>
            :   <span>
                    {name} is {isStudent ? "" : "not a student"} a student
                </span>
            }
        </div>
    );
}
