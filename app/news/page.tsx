import type { Metadata } from "next";
import { news } from "../../content/news";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <main className="container page-main narrow-page">
      <h1 className="page-title">News</h1>
      <div className="news-list">{news.map((item) => <article key={`${item.date}-${item.text}`}><time>{item.date}</time><p>{item.text} {item.href && <a href={item.href}>{item.linkLabel} ↗</a>}</p></article>)}</div>
    </main>
  );
}
