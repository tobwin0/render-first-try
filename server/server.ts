import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();

app.get("/api/", async (c) => {
  return c.json({ hello: "world" });
});

app.use("*", serveStatic({ root: "../dist" }));
