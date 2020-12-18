import "./Button.scss";
function Button({ handleClick, active, text, id }) {
  return (
    <button
      className={active === id ? "Button" : ""}
      onClick={handleClick}
      id={id}
    >
      {text}
    </button>
  );
}

export default Button;

