import {
  assert,
  assertArrayContains,
  assertEquals,
  assertStringContains,
} from "https://deno.land/std@0.73.0/testing/asserts.ts";
import { app } from "./server.ts";

function testWithServer(name: string, fn: () => Promise<void>) {
  Deno.test(name, async () => {
    const ready = new Promise((res, rej) => {
      app.addEventListener("listen", res);
      app.addEventListener("error", rej);
    });
    const abortController = new AbortController();
    app.listen({ port: 8080, signal: abortController.signal });
    await ready;
    await fn();
    abortController.abort();
  });
}

testWithServer("index page", async () => {
  const res = await fetch("http://0.0.0.0:8080/");
  assert(res.ok);
  assertEquals(res.headers.get("content-type"), "text/html; charset=utf-8");
  assertStringContains(await res.text(), "<h1>x.deno.land</h1>");
});

testWithServer("vsc modules list", async () => {
  const res = await fetch("http://0.0.0.0:8080/_vsc/m");
  assert(res.ok);
  assertEquals(
    res.headers.get("content-type"),
    "application/json; charset=utf-8",
  );
  const json = await res.json();
  assert(Array.isArray(json));
  assertArrayContains(json, ["preact@10.5.3"]);
});

testWithServer("vsc paths list", async () => {
  const res = await fetch("http://0.0.0.0:8080/_vsc/m/preact@10.5.3");
  assert(res.ok);
  assertEquals(
    res.headers.get("content-type"),
    "application/json; charset=utf-8",
  );
  const json = await res.json();
  assert(Array.isArray(json));
  assertEquals(json, ["mod.js", "hooks.js"]);
});

testWithServer("registry request js w/ d.ts", async () => {
  const res = await fetch("http://0.0.0.0:8080/preact@10.5.3/mod.js");
  assert(res.ok);
  assertEquals(
    res.headers.get("content-type"),
    "application/javascript; charset=utf-8",
  );
  assertEquals(
    res.headers.get("x-typescript-types"),
    "/preact@10.5.3/mod.d.ts",
  );
  assertStringContains(await res.text(), `export * from "`);
});

testWithServer("registry request d.ts", async () => {
  const res = await fetch("http://0.0.0.0:8080/preact@10.5.3/mod.d.ts");
  assert(res.ok);
  assertEquals(
    res.headers.get("content-type"),
    "application/typescript; charset=utf-8",
  );
  assertEquals(
    res.headers.get("x-typescript-types"),
    null,
  );
  assertStringContains(await res.text(), `import { JSXInternal } from "./jsx.d.ts";`);
});
