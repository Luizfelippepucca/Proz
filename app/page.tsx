import Card from "./components/Card";
import EmptyState from "./components/EmptyState/indext";
import Layout from "./components/Layout";
import "./page.css";

export default function Home() {
  return (
    <Layout>
      <div className="content">
        <h1 className="title">Notificações</h1>
        <div className="divider"> </div>
        {/* <EmptyState /> */}

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
}
