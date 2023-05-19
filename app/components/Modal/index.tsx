import "./styles.css";
import Image from "next/image";
import IconWarning from "../../assets/warning.svg";
import Button from "../Button";

export interface ModalDeleteProps {
  excludeClick: () => void;
  close: () => void;
}
const ModalDelete = ({ excludeClick, close }: ModalDeleteProps) => {
  return (
    <div className="overlay">
      <div className="containerModal">
        <Image src={IconWarning} alt="mensagem" />
        <h4 className="deleteMessage">Exluir mensagem</h4>
        <span className="questionMessage">
          Deseja realmente excluir a mensagem?
        </span>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button click={close} text="Não" />
          <button className="btnDelete" onClick={excludeClick}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
