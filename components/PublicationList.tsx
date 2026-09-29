import type { Publication } from "../content/publications";

function HighlightName({ text }: { text: string }) {
  const pieces = text.split("Hanxuan Ye");
  return <>{pieces.map((piece, i) => <span key={`${piece}-${i}`}>{piece}{i < pieces.length - 1 && <strong>Hanxuan Ye</strong>}</span>)}</>;
}

export function PublicationList({ items }: { items: Publication[] }) {
  const years = [...new Set(items.map((item) => item.year))].sort((a, b) => b - a);
  return (
    <div className="publication-years">
      {years.map((year) => (
        <section className="year-group" key={year}>
          <h2>{year}</h2>
          <div>
            {items.filter((item) => item.year === year).map((item) => (
              <article className="publication" key={item.title}>
                <p className="publication-authors"><HighlightName text={item.authors} /></p>
                <h3>{item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a> : item.title}</h3>
                <p className="publication-meta">{item.venue || item.status}{item.href && <> · <a href={item.href} target="_blank" rel="noreferrer">Paper ↗</a></>}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
