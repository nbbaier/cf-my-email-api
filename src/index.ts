import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	console.log("GET /");
	return c.text("Hello Hono!");
});

app.post("/", (c) => {
	console.log("POST /");
	return c.text("Hello Hono!");
});

export default app;
