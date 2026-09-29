export type Course = {
  code?: string;
  title: string;
  term: string;
  role: "Instructor" | "Teaching Assistant";
};

// Add new courses here. Current teaching is shown before previous courses.
export const courses: Course[] = [
  {
    title: "Advanced Statistical Inference",
    term: "Upcoming",
    role: "Instructor",
  },
  {
    code: "STAT 612",
    title: "Linear Models",
    term: "Fall 2019",
    role: "Teaching Assistant",
  },
  {
    code: "STAT 614",
    title: "Probability for Statisticians",
    term: "Fall 2019",
    role: "Teaching Assistant",
  },
  {
    code: "STAT 624",
    title: "Database & Computational Tools for Big Data",
    term: "Spring 2020, Spring 2021, Fall 2021, Spring 2022",
    role: "Teaching Assistant",
  },
  {
    code: "STAT 631",
    title: "Statistical Methods in Finance",
    term: "Spring 2020, Fall 2020",
    role: "Teaching Assistant",
  },
  {
    code: "STAT 642",
    title: "Methods of Statistics",
    term: "Summer 2020",
    role: "Teaching Assistant",
  },
];
