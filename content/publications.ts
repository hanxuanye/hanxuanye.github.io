export type Publication = {
  title: string;
  authors: string;
  year: number;
  status: "Preprint" | "Publication" | "In preparation";
  venue?: string;
  href?: string;
};

// Add new publications here. Pages are sorted automatically by year.
export const publications: Publication[] = [
  {
    title: "Bias-Aware External-Model-Assisted Inference in High-Dimensional Regression",
    authors: "Hongzhe Zhang, Hanxuan Ye, and Hongzhe Li",
    year: 2026,
    status: "Preprint",
    href: "https://arxiv.org/abs/2606.15602",
  },
  {
    title: "Multicalibration Boosting: Theory, Convergence, and Transferability",
    authors: "Hanxuan Ye and Hongzhe Li",
    year: 2026,
    status: "Preprint",
    href: "https://arxiv.org/abs/2605.24364",
  },
  {
    title: "Differential Density Analysis in Single-Cell Genomics Using Specially Designed Exponential Families",
    authors: "Hanxuan Ye, Zachary Qian, and Hongzhe Li",
    year: 2025,
    status: "Preprint",
    venue: "Submitted",
    href: "https://arxiv.org/abs/2510.24948",
  },
  {
    title: "Multicalibration for Modeling Censored Survival Data with Universal Adaptability",
    authors: "Hanxuan Ye and Hongzhe Li",
    year: 2024,
    status: "Publication",
    venue: "Biometrika, accepted",
    href: "https://arxiv.org/abs/2405.15948",
  },
  {
    title: "Batch Effect Correction with Re-measured Samples in Completely Confounded Case-control Studies",
    authors: "Hanxuan Ye, Xianyang Zhang, and Jun Chen",
    year: 2023,
    status: "Publication",
    venue: "Nature Computational Science 3, 709–719",
    href: "https://www.nature.com/articles/s43588-023-00500-8",
  },
  {
    title: "A Unified Analysis of Multi-task Functional Linear Regression Models with Manifold Constraint and Composite Quadratic Penalty",
    authors: "Shiyuan He, Hanxuan Ye, and Kejun He",
    year: 2023,
    status: "Publication",
    venue: "Journal of Machine Learning Research 24(291), 1–69",
    href: "https://arxiv.org/abs/2211.04874",
  },
  {
    title: "A Modern Theory for High-dimensional Cox Regression Models",
    authors: "Xianyang Zhang, Huijuan Zhou, and Hanxuan Ye",
    year: 2022,
    status: "Preprint",
    venue: "Submitted to The Annals of Statistics",
    href: "https://arxiv.org/abs/2204.01161",
  },
  {
    title: "Spline Estimation of Functional Principal Components via Manifold Conjugate Gradient Algorithm",
    authors: "Hanxuan Ye, Shiyuan He, and Kejun He",
    year: 2022,
    status: "Publication",
    venue: "Statistics and Computing 32, 106",
    href: "https://link.springer.com/article/10.1007/s11222-022-10175-2",
  },
  {
    title: "Transfer Learning for Survival Analysis",
    authors: "Hanxuan Ye and Hongzhe Li",
    year: 2024,
    status: "In preparation",
  },
  {
    title: "Large-Scale Inference with Unmeasured Confounders for Genomic Data Analysis",
    authors: "Hanxuan Ye, Jun Chen, and Xianyang Zhang",
    year: 2023,
    status: "In preparation",
  },
];
