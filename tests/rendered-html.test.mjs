import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server renders the complete Bazar Turbo page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Bazar Turbo 2004/);
  assert.match(html, /OFERTAS QUE DERRETEM O MODEM/);
  assert.match(html, /O QUE VEM NESSA MARAVILHA/);
  assert.match(html, /PERGUNTAS FREQUENTEMENTE DIGITADAS ERRADO/);
  assert.match(html, /data-sound-toggle/);
  assert.match(html, /data-visitor/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});
