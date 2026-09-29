export type NewsItem = {
  date: string;
  text: string;
  href?: string;
  linkLabel?: string;
};

// Add new items at the top so the newest news appears first.
export const news: NewsItem[] = [
  {
    date: "2026",
    text: "I joined the School of Mathematical Sciences at Zhejiang University as an Assistant Professor in Statistics.",
    href: "https://www.zju.edu.cn/english/",
    linkLabel: "Zhejiang University",
  },
  {
    date: "2026",
    text: "Our work on bias-aware external-model-assisted inference in high-dimensional regression is available as a preprint.",
    href: "https://arxiv.org/abs/2606.15602",
    linkLabel: "Read the preprint",
  },
  {
    date: "2026",
    text: "Our work on multicalibration boosting, convergence, and transferability is available as a preprint.",
    href: "https://arxiv.org/abs/2605.24364",
    linkLabel: "Read the preprint",
  },
  {
    date: "2024",
    text: "Our paper on multicalibration for censored survival data was accepted by Biometrika.",
    href: "https://arxiv.org/abs/2405.15948",
    linkLabel: "Read the paper",
  },
];
