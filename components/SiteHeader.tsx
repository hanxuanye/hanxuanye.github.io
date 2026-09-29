import Link from "next/link";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["News", "/news"],
  ["Publications", "/publications"],
  ["Teaching", "/teaching"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="site-name" href="/">Hanxuan Ye</Link>
        <nav aria-label="Main navigation">
          {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
