import Link from "next/link";
import { news } from "../content/news";
import { profile } from "../content/profile";
import { publications } from "../content/publications";

const tiles = [
  { title: "About", href: "/about", caption: "Biography, research interests, and contact", mark: "A" },
  { title: "News", href: "/news", caption: "Appointments, papers, and announcements", mark: "N" },
  { title: "Publications", href: "/publications", caption: "Preprints and peer-reviewed work", mark: "P" },
  { title: "Teaching", href: "/teaching", caption: "Current and previous courses", mark: "T" },
];

export default function Home() {
  const recentPublications = [...publications].filter((p) => p.status !== "In preparation").sort((a, b) => b.year - a.year).slice(0, 4);
  return (
    <main>
      <div className="home-banner"><span>STATISTICAL INFERENCE</span><span>STATISTICS</span><span>DATA SCIENCE</span></div>
      <div className="container home-intro">
        <section>
          <p className="kicker">Hanxuan Ye</p>
          <h1>{profile.position}</h1>
          <p>at <a href={profile.institutionUrl}>{profile.institution}</a></p>
          <p>{profile.homepageIntro}</p>
        </section>
        <section>
          <p className="kicker">Research interests</p>
          <p>{profile.researchInterests.join(", ")}.</p>
        </section>
      </div>

      <div className="container home-columns">
        <section>
          <div className="heading-link"><h2>News</h2><Link href="/news">View all</Link></div>
          {news.slice(0, 3).map((item) => <p className="news-summary" key={`${item.date}-${item.text}`}><em>{item.date}.</em> {item.text} {item.href && <a href={item.href}>{item.linkLabel}</a>}</p>)}
        </section>
        <section>
          <div className="heading-link"><h2>Recent publications</h2><Link href="/publications">View all</Link></div>
          <ul className="recent-publications">
            {recentPublications.map((paper) => <li key={paper.title}><span>{paper.authors}</span><a href={paper.href}>{paper.title}</a>. {paper.year}.</li>)}
          </ul>
        </section>
      </div>

      <div className="container tile-grid">
        {tiles.map((tile) => <Link className="home-tile" href={tile.href} key={tile.href}><span className="tile-mark">{tile.mark}</span><div><h2>{tile.title}</h2><p>{tile.caption}</p></div><span className="tile-arrow">↗</span></Link>)}
      </div>
    </main>
  );
}
