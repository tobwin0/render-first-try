import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();

app.get("/api", async (c) => {
  return c.json({ hello: "world" });
});

serve(app);

app.get("*", serveStatic({ root: "../dist" }));
