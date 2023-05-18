"use client";
import { Fragment, useEffect, useState } from "react";
import Card from "./components/Card";
import EmptyState from "./components/EmptyState/indext";
import Layout from "./components/Layout";
import "./page.css";
import Drawer from "./components/Drawer";

export interface CardList {
  id: number;
  opened: boolean;
  title: string;
  hour: string;
  date: string;
  content: string;
  status: string;
  read?: boolean;
}

const noticationData = [
  {
    id: 1,
    opened: false,
    title: "Proz | Comunidado sobre nova unidade",
    hour: "19:33",
    date: "31/03/2022",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    status: "new",
  },
  {
    id: 2,
    opened: false,
    title: "Proz | Comunidado sobre nova unidade",
    hour: "19:33",
    date: "31/03/2022",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    status: "new",
  },
  {
    id: 3,
    opened: false,
    title: "Proz | Comunidado sobre nova unidade",
    hour: "19:33",
    date: "31/03/2022",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    status: "new",
  },
  {
    id: 4,
    opened: false,
    title: "Proz | Comunidado sobre nova unidade",
    hour: "19:33",
    date: "31/03/2022",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    status: "old",
  },
  {
    id: 5,
    opened: false,
    title: "Proz | Comunidado sobre nova unidade",
    hour: "19:33",
    date: "31/03/2022",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    status: "old",
  },
  {
    id: 6,
    opened: false,
    title: "Proz | Comunidado sobre nova unidade",
    hour: "19:33",
    date: "31/03/2022",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    status: "old",
  },
];

export default function Home() {
  const [listCard, setListCard] = useState<CardList[]>([]);

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

    setListCard(newList);
  };

  const handleOpenNotification = () => {
    console.log("abriu");
  };

  useEffect(() => {
    setListCard(noticationData);
  }, []);
  return (
    <Fragment>
      <Drawer list={listCard} />
      <Layout click={handleOpenNotification}>
        <div className="content">
          <h1 className="title">Notificações</h1>
          <div className="divider"> </div>
          {/* <EmptyState /> */}

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
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
