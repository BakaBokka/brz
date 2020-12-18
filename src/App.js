import "./App.scss";
import React, { useState } from "react";
import Button from "./components/Button/Button.jsx";
import Btn from "./components/Btn/Btn";
import BetLog from "./components/BetLog/BetLog";

const data = ["42", "43", "44"];

function App() {
  const [active, setActive] = useState("");
  function handleClick({ target }) {
    setActive(target.id);
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

  return (
    <div className="App">
     <div>{buttonElement}</div>
      <Btn />
      <BetLog />
    </div>
  );
}

export default App;
