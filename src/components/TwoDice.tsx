import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Helper function to roll a six-sided die.
 * Returns a random integer between 1 and 6.
 */
export function d6(): number {
    return Math.floor(Math.random() * 6) + 1;
}

export function TwoDice(): React.JSX.Element {
    // Initial states with different default values
    const [leftDie, setLeftDie] = useState<number>(3);
    const [rightDie, setRightDie] = useState<number>(5);

    // Roll function for left die
    const rollLeft = () => {
        setLeftDie(d6());
    };

    // Roll function for right die
    const rollRight = () => {
        setRightDie(d6());
    };

    // Determine game status message based on die values
    let message = "Try Again";
    if (leftDie === rightDie) {
        message = leftDie === 1 ? "Snake Eyes, Lose!" : "Doubles, Win!";
    }

    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            <p>
                <span data-testid="left-die">Left Die: {leftDie}</span>
                <span data-testid="right-die">Right Die: {rightDie}</span>
            </p>
            <p>{message}</p>
        </div>
    );
}
