import type { Metadata } from "next";
import { PublicationList } from "../../components/PublicationList";
import { publications } from "../../content/publications";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  const published = publications.filter((item) => item.status !== "In preparation");
  const preparing = publications.filter((item) => item.status === "In preparation");
  return (
    <main className="container page-main">
      <div className="page-heading"><h1 className="page-title">Publications</h1><p>Preprints and peer-reviewed articles in statistical methodology and biomedical data science.</p></div>
      <PublicationList items={published} />
      <h2 className="subpage-title">In preparation</h2>
      <PublicationList items={preparing} />
    </main>
  );
}
