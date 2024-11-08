import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Doubler button component
function Doubler({ onDouble }: { onDouble: () => void }): React.JSX.Element {
    // Using explicit function syntax for the onClick handler
    const handleClick = () => {
        onDouble();
    };

    return <Button onClick={handleClick}>Double</Button>;
}

// Halver button component
function Halver({ onHalve }: { onHalve: () => void }): React.JSX.Element {
    // Using explicit function syntax for the onClick handler
    const handleClick = () => {
        onHalve();
    };

    return <Button onClick={handleClick}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    // Set the initial state value to 10 as required
    const [dhValue, setDhValue] = useState<number>(10);

    // Handle doubling the value
    const handleDouble = () => {
        setDhValue((prevValue) => prevValue * 2);
    };

    // Handle halving the value
    const handleHalve = () => {
        setDhValue((prevValue) => prevValue * 0.5);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler onDouble={handleDouble} />
            <Halver onHalve={handleHalve} />
        </div>
    );
}
