import type { Metadata } from "next";
import { courses } from "../../content/teaching";

export const metadata: Metadata = { title: "Teaching" };

function CourseList({ role }: { role: "Instructor" | "Teaching Assistant" }) {
  return <div className="course-list">{courses.filter((course) => course.role === role).map((course) => <article key={`${course.code}-${course.title}`}><div><span>{course.code || "ZJU"}</span><time>{course.term}</time></div><h2>{course.title}</h2><p>{course.role}{role === "Instructor" ? " · Zhejiang University" : ""}</p></article>)}</div>;
}

export default function TeachingPage() {
  return (
    <main className="container page-main">
      <h1 className="page-title">Teaching</h1>
      <section className="teaching-section"><h2 className="section-title">Current and upcoming</h2><CourseList role="Instructor" /></section>
      <section className="teaching-section"><h2 className="section-title">Previous teaching</h2><CourseList role="Teaching Assistant" /></section>
    </main>
  );
}
