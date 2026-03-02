import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/api/", async (c) => {
  return c.json({ hello: "world" });
});

serve(app);
app.use("*", serveStatic({ root: "../dist" }));
