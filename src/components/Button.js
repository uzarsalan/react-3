// import style from "./Button.module.css";

export function Button({ color, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-solid border-1 p-2 rounded-2xl"
    >
      Click me!
    </button>
  );
}
