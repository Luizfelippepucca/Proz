import EmptyState from "./components/EmptyState/indext";
import Layout from "./components/Layout";
import "./page.css";

export default function Home() {
  return (
    <Layout>
      <div className="content">
        <h1 className="title">Notificações</h1>
        <div className="divider"> </div>
        <EmptyState />
      </div>
    </Layout>
  );
}
