import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	const referer = c.req.header("Referer");
	console.log(`GET / (from ${referer})`);
	return c.text("Hello Hono!");
});

app.post("/", (c) => {
	const referer = c.req.header("Referer");
	console.log(`POST / (from ${referer})`);
	return c.text("Hello Hono!");
});

export default app;
