import React from "react";
import "./App.css";
import hiraganaImage from "./images/hiragana.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <div>
                <h1>Hello World</h1>
                <img src={hiraganaImage} alt="ひらがな" />
            </div>
            <div>
                Unordered List:
                <ul>
                    <li>あ</li>
                    <li>い</li>
                    <li>う</li>
                </ul>
            </div>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Dmitrii Tsutskov Hello World, this is my
                first application
            </p>

            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "200px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "200px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
