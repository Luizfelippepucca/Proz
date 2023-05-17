"use client";
import "./styles.css";
import Image from "next/image";
import IconMail from "../../assets/Email.svg";
import IconClose from "../../assets/Close.svg";
import Button from "../Button";
import { useState } from "react";
const Card = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenCard = () => {
    setOpen(!open);
  };
  return (
    <div className="wrapperCard">
      <div className="headerCard">
        <div style={{ width: 40 }}>
          <Image src={IconMail} alt="mensagem" />
        </div>
        <div className="wrapperTitleMessage">
          <p>Proz | Comunidado sobre nova unidade</p>
          <span>31/03/2022 - 19:33</span>
        </div>
        <div style={{ width: 30 }}>
          <Image src={IconClose} alt="excluir mensagem" />
        </div>
      </div>
      <div className={!open ? "bodyCard" : "bodyCardOpened "}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="footerCard">
        <Button click={handleOpenCard} />
      </div>
    </div>
  );
};

export default Card;
