"use client";
import "./styles.css";
import Image from "next/image";
import IconMail from "../../assets/Email.svg";
import IconClose from "../../assets/Close.svg";
import Button from "../Button";

interface CardProps {
  id: number;
  opened: boolean;
  title: string;
  hour: string;
  date: string;
  content: string;
  click: (id: number) => void;
}
const Card = ({ id, content, date, hour, opened, title, click }: CardProps) => {
  const handleTetse = () => {
    click(id);
  };
  return (
    <div className="wrapperCard" style={{ height: !opened ? 267 : 467 }}>
      <div className="headerCard">
        <div style={{ width: 40 }}>
          <Image src={IconMail} alt="mensagem" />
        </div>
        <div className="wrapperTitleMessage">
          <p>{title}</p>
          <span>
            {date} - {hour}
          </span>
        </div>
        <div style={{ width: 30 }}>
          <Image src={IconClose} alt="excluir mensagem" />
        </div>
      </div>
      <div className="bodyCard">
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
      </div>
      <div className="footerCard">
        <Button click={handleTetse} text={opened ? "fechar" : "ler mensagem"} />
      </div>
    </div>
  );
};

export default Card;
