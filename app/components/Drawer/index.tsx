"use Client";
import Image from "next/image";
import IconClose from "../../assets/Close.svg";
import IconMessage from "../../assets/Email.svg";
import "./styles.css";
import Button from "../Button";
import { CardList } from "@/app/page";
import { useEffect, useState } from "react";

interface DrawerProps {
  list: CardList[];
}
const Drawer = ({ list }: DrawerProps) => {
  const [notification, setNotification] = useState<CardList[]>([]);
  const teste = false;

  const handleReadNotification = (id: number) => {
    console.log("clicou");
    let clone = [...notification];
    let newlistClone = clone.map((item) => {
      if (item.id === id) {
        if (!item.opened) {
          return { ...item, opened: true, status: "old", read: true };
        }
        return { ...item, opened: false };
      }
      return { ...item, opened: false };
    });
    console.log(newlistClone);
    setNotification(newlistClone);
  };

  useEffect(() => {
    let clone = [...list];

    let newList = clone.filter((item) => item.status === "new");
    setNotification(newList);
  }, [list]);

  return (
    <div className="wrapperDrawer">
      <div className="notificationArea">
        {notification.map((item, i) => (
          <div
            className="notificationItem"
            onClick={() => handleReadNotification(item.id)}
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
            <div style={{ width: "100%", marginTop: 12, overflow: "auto" }}>
              <span>{item.content}</span>
              <span>{item.content}</span>
              <span>{item.content}</span>
            </div>
          </div>
        ))}

        <div className="footerDrawer">
          <Button text="fechar" click={() => console.log("fechou")} />
        </div>
      </div>
      <div style={{ position: "absolute", right: 10, zIndex: 3 }}>
        <Image
          src={IconClose}
          alt="fechar"
          onClick={() => console.log("fechou")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Drawer;
