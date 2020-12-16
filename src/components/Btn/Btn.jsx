import "./Btn.css";
import React, { useState } from "react";

const data = ["42", "43", "44"];

function Btn() {
  const [active, setActive] = useState("");
  function handleClick({ target }) {
    setActive(target.id);
  }

  const buttonElement = data.map((item, i) => (
    <button
      onClick={handleClick}
      active={active}
      text={item}
      key={i}
      id={item}
      className={active === item ? "Btn" : ""}
    >
      {item}{" "}
    </button>
  ));

  return <div className="Btns">{buttonElement}</div>;
}

export default Btn;
