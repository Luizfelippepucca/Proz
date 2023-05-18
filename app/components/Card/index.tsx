"use client";
import "./styles.css";
import Image from "next/image";
import IconMail from "../../assets/Email.svg";
import IconClose from "../../assets/Close.svg";
import Button from "../Button";
import { CardProps } from "./types";

const Card = ({
  id,
  content,
  date,
  hour,
  opened,
  title,
  status,
  click,
}: CardProps) => {
  const handleTetse = () => {
    click(id);
  };
  return (
    <div
      className="wrapperCard"
      style={{
        height: !opened ? 267 : 467,
        borderBottom:
          status !== "old" ? "1px solid var(--color-border-primary)" : 0,
      }}
    >
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
