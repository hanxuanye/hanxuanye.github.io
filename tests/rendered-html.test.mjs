import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders every public route", async () => {
  for (const pathname of ["/", "/about", "/news", "/publications", "/teaching"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, pathname);

    const html = await response.text();
    assert.match(html, /<title>[^<]*Hanxuan Ye[^<]*<\/title>/i, pathname);
    assert.match(html, /href="\/publications"/i, pathname);
    assert.doesNotMatch(html, /Your site is taking shape|Starter Project|codex-preview/i, pathname);
  }
});

test("publishes the current professional identity", async () => {
  const response = await render("/about");
  const html = await response.text();

  assert.match(html, /Assistant Professor in Statistics/i);
  assert.match(html, /hanxuanye@zju\.edu\.cn/i);
  assert.match(html, /github\.com\/hanxuanye/i);
  assert.doesNotMatch(html, /hanxuan\.ye@pennmedicine\.upenn\.edu|github\.com\/yehanxuan/i);
});
