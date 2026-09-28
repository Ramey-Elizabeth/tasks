import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Colors = [
    "black",
    "pink",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
];

export function ChangeColor(): React.JSX.Element {
    const [currentColor, setColor] = useState<string>(Colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {Colors.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    key={color}
                    onChange={() => {
                        setColor(color);
                    }}
                    name="color"
                    label={color}
                    value={color}
                    checked={currentColor === color}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: currentColor,
                }}
            >
                You have chosen {currentColor}.
            </div>
        </div>
    );
}
