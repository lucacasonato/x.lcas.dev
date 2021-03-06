import { Application, Router, SendOptions } from "./deps.ts";
const manifest: Record<string, Record<string, string>> = JSON.parse(
  await Deno.readTextFile("./manifest.json"),
);

const root: SendOptions = { root: "public/" };

const router = new Router();

// Homepage
router.get("/", async (ctx) => {
  await ctx.send({ ...root, path: "./index.html" });
});

// VS Code autocomplete
router.get("/.well-known/deno-import-intellisense.json", async (ctx) => {
  await ctx.send(
    { ...root, path: "./.well-known/deno-import-intellisense.json" },
  );
});
router.get("/_vsc/m", (ctx) => {
  ctx.response.headers.set("cache-control", "max-age=3600");
  ctx.response.body = Object.keys(manifest);
});
router.get("/_vsc/m/:module", (ctx) => {
  if (!ctx.params.module || !manifest[ctx.params.module]) {
    ctx.response.status = 404;
    ctx.response.body = "not found";
    return;
  }
  ctx.response.headers.set("cache-control", "max-age=3600");
  ctx.response.body = Object.keys(manifest[ctx.params.module]);
});

// Registry
router.get("/:module/:path+", async (ctx) => {
  const { module, path } = ctx.params;
  if (!module || !path) return;
  if (manifest[module] && manifest[module][path]) {
    ctx.response.headers.set(
      "X-TypeScript-Types",
      `/${module}/${manifest[module][path]}`,
    );
  }
  if (path.endsWith(".ts")) {
    ctx.response.headers.set(
      "content-type",
      "application/typescript; charset=utf-8",
    );
  }
  await ctx.send({ ...root, path: `/${module}/${path}` });
});

export const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

if (import.meta.main) {
  await app.listen("0.0.0.0:8080");
}
