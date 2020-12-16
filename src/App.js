import "./App.css";
import React, { useState } from "react";
import Button from "./Button";

const data = ["42", "43", "44"];

function App() {
  const [active, setActive] = useState("false");
  function handleClick(text) {
    setActive(text);
  }

  const buttonElement = data.map((item, i) => (
    <Button
      handleClick={handleClick}
      active={active}
      text={item}
      key={i}
      id={item}
    />
  ));

  return <div className="App">{buttonElement}</div>;
}

export default App;
