"use Client";
import Image from "next/image";
import IconClose from "../../assets/Close.svg";
import IconMessage from "../../assets/Email.svg";
import "./styles.css";
import Button from "../Button";
import { useEffect, useState } from "react";
import { DrawerProps } from "./types";
import { CardList } from "@/app/types";

const Drawer = ({ list, close, read }: DrawerProps) => {
  const [notification, setNotification] = useState<CardList[]>([]);

  useEffect(() => {
    let clone = [...list];

    let newList = clone.filter((item) => item.status === "new");
    setNotification(newList);
  }, [list]);

  if (notification.length <= 0) {
    return (
      <div
        className="wrapperDrawer"
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          width: 313,
        }}
      >
        <Image src={IconMessage} alt="mensagem" style={{ marginRight: 4 }} />
        Não há nenhuma nova notificação
      </div>
    );
  }

  return (
    <div className="wrapperDrawer">
      <div className="notificationArea">
        {notification.map((item, i) => (
          <div
            className="notificationItem"
            onClick={() => read(item.id)}
            key={i}
            style={{ height: item.opened ? 200 : 50 }}
          >
            <div className="headerItem">
              <Image
                src={IconMessage}
                alt="mensagem"
                style={{ marginRight: 4 }}
              />

              <div className="wrapperTitle">
                <p>{item.title}</p>
                <span>
                  {item.date} - {item.hour}
                </span>
              </div>
            </div>
            <div
              className="noticationContent"
              style={{ overflowY: item.opened ? "scroll" : "hidden" }}
            >
              <span>{item.content}</span>
              <span>{item.content}</span>
              <span>{item.content}</span>
            </div>
          </div>
        ))}

        <div className="footerDrawer">
          <Button text="fechar" click={close} />
        </div>
      </div>
      <div style={{ position: "absolute", right: 10, zIndex: 3 }}>
        <Image
          src={IconClose}
          alt="fechar"
          onClick={close}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Drawer;
