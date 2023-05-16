import Image from "next/image";
import "./styles.css";

import Icon from "../../assets/NotificationsNone.svg";
const EmptyState = () => {
  return (
    <div className="containerEmpty">
      <Image src={Icon} alt="icone sem notificação" />
      <h4 className="description">Você não possui notificações recentes.</h4>
    </div>
  );
};

export default EmptyState;
