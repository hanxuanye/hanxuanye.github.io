import type { Metadata } from "next";
import { profile } from "../../content/profile";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="container page-main">
      <h1 className="page-title">About</h1>
      <div className="about-layout">
        <div>
          {/* The pre-sized static image avoids a runtime image-optimization dependency. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="portrait" src="/hanxuan-ye.jpg" alt="Portrait of Hanxuan Ye" width="1086" height="1448" decoding="async" />
        </div>
        <div className="long-copy">
          <h2>Biography</h2>
          {profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <h2>Research interests</h2>
          <p>{profile.researchStatement}</p>
          <ul className="interest-list">{profile.researchInterests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
          <h2>Contact</h2>
          <p>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a><br />GitHub: <a href={profile.github}>{profile.githubUsername}</a></p>
        </div>
      </div>
    </main>
  );
}
