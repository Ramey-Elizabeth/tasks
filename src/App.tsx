import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Elizabeth Ramey UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!
            </p>
            <h1>
                My name is Elizabeth Ramey. I am a senior Applied Mathematics
                and Computer Science major.
            </h1>
            <p>I am currently taking four computer related classes.</p>
            <ul>
                <li>CISC 260 - Machine Organization and Asssembly Language</li>
                <li>CISC 275 - Introduction to Software Development</li>
                <li>CISC 437 - Database Systems</li>
                <li>CPEG 472 - Applied Cryptography</li>
            </ul>
            <img src="./Images/ProfilePic.jpg" alt="Profile picture" />
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col
                        style={{
                            backgroundColor: "red",
                            width: "100px",
                            height: "25px",
                        }}
                    ></Col>
                    <Col
                        style={{
                            backgroundColor: "red",
                            width: "100px",
                            height: "25px",
                        }}
                    ></Col>
                </Row>
            </Container>
        </div>
    );
}
export default App;
