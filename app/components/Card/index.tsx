import "./styles.css";
import Image from "next/image";
import IconMail from "../../assets/Email.svg";
import IconClose from "../../assets/Close.svg";
const Card = () => {
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
        <div style={{ width: 40 }}>
          <Image src={IconClose} alt="excluir mensagem" />
        </div>
      </div>
      <div className="bodyCard">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="footerCard">ola</div>
    </div>
  );
};

export default Card;
