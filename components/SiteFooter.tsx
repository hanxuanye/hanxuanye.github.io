import Link from "next/link";
import { profile } from "../content/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href={profile.institutionUrl}>{profile.institution}</a>
        <a href={profile.github}>GitHub</a>
        <a href={`mailto:${profile.email}`}>Email</a>
        <Link href="/">Home</Link>
        <span>© {new Date().getFullYear()} Hanxuan Ye</span>
      </div>
    </footer>
  );
}
