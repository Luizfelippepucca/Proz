import "./styles.css";

interface ButtonProps {
  click: () => void;
}
const Button = ({ click }: ButtonProps) => {
  return (
    <button className="btn" onClick={click}>
      Ler mensagem
    </button>
  );
};

export default Button;
