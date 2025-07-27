import { isInboundWebhook } from "@inboundemail/sdk";
import { Hono } from "hono";
import { Resend } from "resend";

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (c) => {
	const resend = new Resend(c.env.RESEND_API_KEY);

	const { data, error } = await resend.emails.send({
		from: "Agent <agent@mail-to-ai.com>",
		to: "nico.baier@gmail.com",
		subject: "Hello World!!",
		html: "<p>Hello from Workers</p>",
	});

	return c.json({ data, error });
});

app.post("/", async (c) => {
	const resend = new Resend(c.env.RESEND_API_KEY);
	const payload = await c.req.json();

	if (!isInboundWebhook(payload)) {
		return c.json({ error: "Invalid webhook payload" }, 400);
	}

	const { data, error } = await resend.emails.send({
		from: "Agent <agent@mail-to-ai.com>",
		to: "nico.baier@gmail.com",
		subject: "Webhook payload",
		text: JSON.stringify(payload, null, 2),
	});

	return c.json({ data, error }, 200);
});

export default app;
