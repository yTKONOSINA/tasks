import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

// Array of people to choose from
const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [team, setTeam] = useState<string[]>([]);

    // Function to handle adding a member to the team
    function chooseMember(newMember: string) {
        if (!team.includes(newMember)) {
            setTeam((prevTeam) => [...prevTeam, newMember]);
        }
    }

    // Function to clear the team
    function clearTeam() {
        setTeam([]); // Reset the team to an empty array
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {PEOPLE.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add {/* Fix the arrow function with braces */}
                            <Button
                                onClick={() => {
                                    chooseMember(option); // Explicit function body with braces
                                }}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    <ul>
                        {team.map((member: string) => (
                            <li key={member}>{member}</li>
                        ))}
                    </ul>
                    <Button
                        onClick={() => {
                            clearTeam(); // Explicit function body with braces
                        }}
                    >
                        Clear Team
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
