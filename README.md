# Hanxuan Ye — Academic Website

This is the source for Hanxuan Ye's academic website at
<https://hanxuanye.github.io>. It is maintained under the GitHub account
[`hanxuanye`](https://github.com/hanxuanye) and is separate from the legacy
`yehanxuan.github.io` website.

## Pages

- `/` — homepage with short summaries and links to the full pages
- `/about` — biography, research interests, and contact information
- `/news` — appointments, papers, and announcements
- `/publications` — preprints, publications, and work in preparation
- `/teaching` — current and previous courses

## Where to update content

You normally only need to edit the files inside `content/`:

| Change | File |
| --- | --- |
| Biography, position, research interests, email | `content/profile.ts` |
| Add or edit news | `content/news.ts` |
| Add or edit publications | `content/publications.ts` |
| Add or edit courses | `content/teaching.ts` |
| Replace profile photo | `public/hanxuan-ye.jpg` |

The newest news item should be placed at the top of the `news` array. New
publications can be added anywhere in the `publications` array; the website
groups and sorts them by year automatically.

Each content item follows the examples already in its file. Keep commas after
each field and after each closing `}`.

## Preview locally

Install dependencies, then start the local preview:

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

To run the complete production check:

```bash
npm test
```

## Publishing

Push changes to the `main` branch of
[`hanxuanye/hanxuanye.github.io`](https://github.com/hanxuanye/hanxuanye.github.io).
GitHub Actions builds the static export and publishes it to GitHub Pages
automatically. The deployment workflow is in `.github/workflows/pages.yml`.

## Design files

Page components live in `app/`, shared header/footer components live in
`components/`, and all visual styling lives in `app/globals.css`. These files
do not need to change when adding ordinary academic content.
