import type { InboundWebhookPayload } from "@inboundemail/sdk";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	const referer = c.req.header("Referer");
	return c.text("Hello Hono!");
});

app.post("/", async (c) => {
	const body = (await c.req.json()) as InboundWebhookPayload;

	console.log(`${body.event} - ${body.timestamp}`);
	console.log(body);
	return c.text("Hello Hono!");
});

export default app;
