# Hanxuan Ye — Academic Website

This is Hanxuan Ye's standalone multi-page academic website. It is separate
from the legacy `yehanxuan.github.io` repository and links to the GitHub account
at <https://github.com/hanxuanye>.

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

This computer has a working Node installation at `/usr/local/Cellar/node@24`.
From this project folder, use:

```bash
PATH="/usr/local/Cellar/node@24/24.16.0/bin:$PATH" npm run dev
```

Then open <http://localhost:3000>.

To run the complete production check:

```bash
PATH="/usr/local/Cellar/node@24/24.16.0/bin:$PATH" npm test
```

The project is configured for Codex Sites hosting through
`.openai/hosting.json`. It is not a static GitHub Pages export.

## Design files

Page components live in `app/`, shared header/footer components live in
`components/`, and all visual styling lives in `app/globals.css`. These files
do not need to change when adding ordinary academic content.
