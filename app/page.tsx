"use client";
import { Fragment, useCallback, useEffect, useState } from "react";
import Card from "./components/Card";
import EmptyState from "./components/EmptyState/indext";
import Layout from "./components/Layout";
import "./page.css";
import Drawer from "./components/Drawer";
import { CardList } from "./types";
import { noticationData } from "./constants";
import ModalDelete from "./components/Modal";

export default function Home() {
  const [listCard, setListCard] = useState<CardList[]>([]);
  const [listNotification, setListNotification] = useState<CardList[]>([]);
  const [numberOfNotifications, setNumberOfNotifications] = useState<number>(0);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [idCard, setIdCard] = useState<number>(0);

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

  const handleReadNotification = useCallback(
    (id: number) => {
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
    },
    [listNotification, setListCard, setListNotification]
  );

  const handleToggleNotification = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleCloseModal = () => {
    setModalDelete(!modalDelete);
  };

  const handleDelete = (id: number) => {
    let clone = [...listCard];
    if (modalDelete) {
      let newList = clone.map((item) => {
        if (item.id === id) {
          if (item.status === "new") {
            return { ...item, status: "old", read: true };
          }
          return { ...item };
        }
        return { ...item };
      });

      let newListFiltred = newList.filter((item) => item.id !== id);
      setListCard(newListFiltred);
      setListNotification(newList);
    }

    setModalDelete(!modalDelete);
    setIdCard(id);
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

  return (
    <Fragment>
      {modalDelete && (
        <ModalDelete
          excludeClick={() => handleDelete(idCard)}
          close={handleCloseModal}
        />
      )}
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
          {listCard.length <= 0 && <EmptyState />}

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
                deleteCard={() => handleDelete(item.id)}
              />
            ))}
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}
