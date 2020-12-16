import "./Button.css";
function Button({ handleClick, active, text, id }) {
  return (
    <button
      className={active === id ? "Button" : ""}
      onClick={() => handleClick(id)}
    >
      {text}
    </button>
  );
}

export default Button;

