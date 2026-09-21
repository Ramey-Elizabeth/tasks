import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Halloween"
    | "Easter"
    | "NewYear"
    | "StPatricksDay";

const dateOrder: Record<Holiday, Holiday> = {
    NewYear: "StPatricksDay",
    StPatricksDay: "Easter",
    Easter: "Halloween",
    Halloween: "Christmas",
    Christmas: "NewYear",
};

const alphabeticalOrder: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "NewYear",
    NewYear: "StPatricksDay",
    StPatricksDay: "Christmas",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    function changeHolidayAlphabetical(): void {
        const nextAlphabeticalHoliday = alphabeticalOrder[holiday];
        setHoliday(nextAlphabeticalHoliday);
    }

    function changeHolidayByDate(): void {
        const nextHolidayByDate = dateOrder[holiday];
        setHoliday(nextHolidayByDate);
    }

    function toEmoji(holiday: Holiday): string {
        return (
            holiday === "Christmas" ? "🎄"
            : holiday === "Halloween" ? "🎃"
            : holiday === "Easter" ? "🐰"
            : holiday === "NewYear" ? "🎉"
            : "🍀"
        );
    }

    return (
        <div>
            <div>
                <Button onClick={changeHolidayAlphabetical}>
                    Advance by Alphabet
                </Button>
            </div>
            <div>
                <Button onClick={changeHolidayByDate}>
                    Advance by Time of Year
                </Button>
            </div>
            <div>
                <span>Holiday: {toEmoji(holiday)}</span>
            </div>
        </div>
    );
}
