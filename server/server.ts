import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/", async (c) => {
  return c.json({ hello: "world" });
});

const port = 3000;
serve({ fetch: app.fetch, port }, () => {
  console.log(`Server kører på http://localhost:${port}`);
});

// Serve static files fra dist mappen (frontend build)
app.use("*", serveStatic({ root: "../dist" }));
