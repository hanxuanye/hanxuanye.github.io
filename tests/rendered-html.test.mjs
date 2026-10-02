import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const relativePath = pathname === "/" ? "../out/index.html" : `../out${pathname}/index.html`;
  return readFile(new URL(relativePath, import.meta.url), "utf8");
}

test("exports every public route", async () => {
  for (const pathname of ["/", "/about", "/news", "/publications", "/teaching"]) {
    const html = await render(pathname);
    assert.match(html, /<title>[^<]*Hanxuan Ye[^<]*<\/title>/i, pathname);
    assert.match(html, /href="\/publications\/?"/i, pathname);
    assert.doesNotMatch(html, /Your site is taking shape|Starter Project|codex-preview/i, pathname);
  }
});

test("publishes the current professional identity", async () => {
  const html = await render("/about");

  assert.match(html, /Assistant Professor in Statistics/i);
  assert.match(html, /hanxuanye@zju\.edu\.cn/i);
  assert.match(html, /github\.com\/hanxuanye/i);
  assert.doesNotMatch(html, /hanxuan\.ye@pennmedicine\.upenn\.edu|github\.com\/yehanxuan/i);
});

test("publishes canonical GitHub Pages metadata", async () => {
  const [home, robots, sitemap] = await Promise.all([
    render("/"),
    readFile(new URL("../out/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8"),
  ]);

  assert.match(home, /https:\/\/hanxuanye\.github\.io/i);
  assert.match(robots, /https:\/\/hanxuanye\.github\.io\/sitemap\.xml/i);
  assert.match(sitemap, /https:\/\/hanxuanye\.github\.io\/publications/i);
  assert.doesNotMatch(`${home}${robots}${sitemap}`, /chatgpt\.site/i);
});
