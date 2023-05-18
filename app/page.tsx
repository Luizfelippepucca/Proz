"use client";
import { Fragment, useEffect, useState } from "react";
import Card from "./components/Card";
import EmptyState from "./components/EmptyState/indext";
import Layout from "./components/Layout";
import "./page.css";
import Drawer from "./components/Drawer";
import { CardList } from "./types";
import { noticationData } from "./constants";

export default function Home() {
  const [listCard, setListCard] = useState<CardList[]>([]);
  const [listNotification, setListNotification] = useState<CardList[]>([]);
  const [numberOfNotifications, setNumberOfNotifications] = useState<number>(0);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleOpenCard = (id: number) => {
    let clone = [...listCard];

    const newList = clone.map((item) => {
      if (item.id === id) {
        if (!item.opened && item.status === "new") {
          return { ...item, opened: true, status: "old" };
        }
        if (!item.opened && item.status !== "new")
          return { ...item, opened: true };
      }
      return { ...item, opened: false };
    });
    setListNotification(newList);
    setListCard(newList);
  };

  const handleReadNotification = (id: number) => {
    let clone = [...listNotification];
    let newlistClone = clone.map((item) => {
      if (item.id === id) {
        if (!item.opened) {
          return { ...item, opened: true };
        }

        return { ...item, opened: false, status: "old", read: true };
      }
      return { ...item, opened: false };
    });

    setListNotification(newlistClone);
    let newlistCard = newlistClone.map((item) => {
      return { ...item, opened: false };
    });
    setListCard(newlistCard);
  };

  const handleToggleNotification = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    setListCard(noticationData);
    setListNotification(noticationData);
  }, []);

  useEffect(() => {
    setNumberOfNotifications(
      listCard.filter((item) => item.status === "new").length
    );
  }, [listCard]);

  // useEffect(() => {
  //   setInterval(() => {
  //     if (listNotification.length <= 0) {
  //       let teste = listCard.filter((item) => item.status === "new");
  //       setListCard(teste);
  //     }
  //   }, 5000);
  // }, [listNotification]);

  return (
    <Fragment>
      {openDrawer && (
        <Drawer
          list={listNotification}
          close={handleToggleNotification}
          read={handleReadNotification}
        />
      )}
      <Layout
        click={handleToggleNotification}
        notifications={numberOfNotifications}
      >
        <div className="content">
          <h1 className="title">Notificações</h1>
          <div className="divider"> </div>
          {/* <EmptyState /> */}

          <div className="areaCards">
            {listCard.map((item) => (
              <Card
                key={item.id}
                content={item.content}
                date={item.date}
                id={item.id}
                hour={item.hour}
                opened={item.opened}
                title={item.title}
                status={item.status}
                click={() => handleOpenCard(item.id)}
              />
            ))}
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}
