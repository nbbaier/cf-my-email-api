import util from "node:util";
import { email } from "./email";

// Mock EmailMessage class for local development
class MockEmailMessage {
	constructor(
		public from: string,
		public to: string,
		public subject: string,
		public body?: string,
	) {}
}

// Conditional import for Cloudflare Workers environment
let EmailMessage: typeof MockEmailMessage;
try {
	const { EmailMessage: CFEmailMessage } = await import("cloudflare:email");
	EmailMessage = CFEmailMessage;
} catch {
	EmailMessage = MockEmailMessage;
}

const mockEmail: ForwardableEmailMessage = {
	from: email.email.from.text,
	to: email.email.to.text,
	headers: new Headers({
		subject: email.email.subject,
		"Message-ID": `test-message-id-${crypto.randomUUID()}`,
	}),
	raw: new ReadableStream({
		start(controller) {
			controller.enqueue(new TextEncoder().encode(email.email.parsedData.raw));
			controller.close();
		},
	}),
	rawSize: email.email.parsedData.raw.length,
	reply: async (message: EmailMessage) => {
		console.log("📧 Reply to email:", message);
	},
	forward: async (rcptTo: string, headers?: Headers) => {
		console.log("📧 Forwarding email to:", rcptTo, headers);
	},
	setReject: (reason: string) => {
		console.log("📧 Rejecting email:", reason);
	},
};

console.log(util.inspect(mockEmail, false, 22, true));

const replyMessage = new EmailMessage(
	"<SENDER>@example.com",
	"email@example.com",
	"hello",
);

console.log(await mockEmail.reply(replyMessage));
