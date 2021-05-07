import React from "react";
import ReactDOM from "react-dom";
import { Container } from "@material-ui/core";
import Login from "./components/willogin";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xs" style={{ backgroundColor: "skyblue" }}>
        <Login />
      </Container>
    </div>
  );
}

export default App;
