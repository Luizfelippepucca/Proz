"use client";
import "./styles.css";

interface ButtonProps {
  click: () => void;
  text: string;
}
const Button = ({ click, text }: ButtonProps) => {
  return (
    <button className="btn" onClick={() => click()}>
      {text}
    </button>
  );
};

export default Button;
