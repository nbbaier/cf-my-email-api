export const email = {
	event: "email.received",
	timestamp: "2025-07-26T20:45:34.888Z",
	email: {
		id: "jPLU9LWY-8JmDb_B_yTl2",
		messageId:
			"<CAGS8cYJMxKqiMY9GPDK2aR_3KzyZR32M4pJ_diZFibTUjp6Mew@mail.gmail.com>",
		from: {
			text: '"Nico Baier" <nico.baier@gmail.com>',
			addresses: [
				{
					name: "Nico Baier",
					address: "nico.baier@gmail.com",
				},
			],
		},
		to: {
			text: "test@nicobaier.com",
			addresses: [
				{
					name: null,
					address: "test@nicobaier.com",
				},
			],
		},
		recipient: "test@nicobaier.com",
		subject: "Sent at 3:45",
		receivedAt: "2025-07-26T20:45:19.000Z",
		parsedData: {
			messageId:
				"<CAGS8cYJMxKqiMY9GPDK2aR_3KzyZR32M4pJ_diZFibTUjp6Mew@mail.gmail.com>",
			date: "2025-07-26T20:45:19.000Z",
			subject: "Sent at 3:45",
			from: {
				text: '"Nico Baier" <nico.baier@gmail.com>',
				addresses: [
					{
						name: "Nico Baier",
						address: "nico.baier@gmail.com",
					},
				],
			},
			to: {
				text: "test@nicobaier.com",
				addresses: [
					{
						name: null,
						address: "test@nicobaier.com",
					},
				],
			},
			cc: null,
			bcc: null,
			replyTo: null,
			textBody:
				"Paullum deliquit, ponderibus modulisque suis ratio utitur.\nCurabitur blandit tempus ardua ridiculus sed magna.\n",
			htmlBody:
				'<div dir="ltr">Paullum deliquit, ponderibus modulisque suis ratio utitur.<div>Curabitur blandit tempus ardua ridiculus sed magna.</div></div>\n',
			raw: 'Return-Path: <nico.baier@gmail.com>\r\nReceived: from mail-ej1-f48.google.com (mail-ej1-f48.google.com [209.85.218.48])\r\n by inbound-smtp.us-east-2.amazonaws.com with SMTP id e0pcgf8815clpjooic6mmcl5p8loui7o62m303g1\r\n for test@nicobaier.com;\r\n Sat, 26 Jul 2025 20:45:32 +0000 (UTC)\r\nReceived-SPF: pass (spfCheck: domain of _spf.google.com designates 209.85.218.48 as permitted sender) client-ip=209.85.218.48; envelope-from=nico.baier@gmail.com; helo=mail-ej1-f48.google.com;\r\nAuthentication-Results: amazonses.com;\r\n spf=pass (spfCheck: domain of _spf.google.com designates 209.85.218.48 as permitted sender) client-ip=209.85.218.48; envelope-from=nico.baier@gmail.com; helo=mail-ej1-f48.google.com;\r\n dkim=pass header.i=@gmail.com;\r\n dmarc=pass header.from=gmail.com;\r\nX-SES-RECEIPT: AEFBQUFBQUFBQUFIOGU1Y0xFalFFQjAraEQvNTZTWGxtK3dwd2tDT2laUDNmQW11R0JsZUsrd0lXNUJjbTVwTXhIRlpoSk1jT2N2U0xwc2tua09qY0UxVDh3ci9LTWMyTGJRTkYxMGRPeFZTQ01RVy9XZElhY2M3VlAweWw2dUVaeTRIeW52dnJLQTZHWVFVeWN0dWh2dGN4Y3R5STNNK2VlVXBNMlFPaTcvdDg1SXRGVnNZaW1NWjQrbWF1djNXcUtJVHB6Uk5MY1F0QTV2NUJjcUt6dnhtZDh5YlMwVzJiaFZFTHVFTkUzeU1IZHRrR2M5MjV1WklwUmNtRCtaRVpQLzNkQVc0aHZDZHcrbStjdzV5QWlsb0JNVFN6NHZBNG9yYmtNbm5LbHZ6c1dIRXJUYmZiYUE9PQ==\r\nX-SES-DKIM-SIGNATURE: a=rsa-sha256; q=dns/txt; b=YbjiRZ4w5obuR22kwZf+vl+BEbeyxXjHGTi+gQt/A/ORzHxePwa+UJGIpGLoPZ58H8PCYjrseTtYsBFybBlcZlYDv/vdLlNta9C12+z0HH+0DfnvjLEKGYLUymhr4jYLSAyVFSZVz9STqESAx5vAyRkS3d8IWzl1jVhJAsMkR+k=; c=relaxed/simple; s=ndjes4mrtuzus6qxu3frw3ubo3gpjndv; d=amazonses.com; t=1753562732; v=1; bh=9BR51KLfPd7+tP8g7SmLS1CY3qcVu8y1ZbqsYDzPQ8A=; h=From:To:Cc:Bcc:Subject:Date:Message-ID:MIME-Version:Content-Type:X-SES-RECEIPT;\r\nReceived: by mail-ej1-f48.google.com with SMTP id a640c23a62f3a-ae0df6f5758so517605166b.0\r\n        for <test@nicobaier.com>; Sat, 26 Jul 2025 13:45:32 -0700 (PDT)\r\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=gmail.com; s=20230601; t=1753562731; x=1754167531; darn=nicobaier.com;\r\n        h=to:subject:message-id:date:from:mime-version:from:to:cc:subject\r\n         :date:message-id:reply-to;\r\n        bh=9BR51KLfPd7+tP8g7SmLS1CY3qcVu8y1ZbqsYDzPQ8A=;\r\n        b=f9dUBpMAc38juJEQleulsv2V50KtW/kR+gRBy81pUOhJOAgkgfcv+DdBRjvP97kN8m\r\n         p8sA2SlOqSHGTAGR9xn5bJC6WoSWgRLTYQ+yAZCn9Ug571bjuCGqTFJLs1tEve+5K0Du\r\n         2hFmPeVmG5+GlTvdQ6g//j4Jk2LaFw+jqctFdwcBQxLM3/Skt1Skj21shfPZjEwhE+9s\r\n         LaCPyXrQxMbT+wWYBNJMiU0/dlrKag1hhTi+aj1BECxsHsSkC6W1zKiM/kVwrg3wi2+G\r\n         jrEooz16BaL30MblvV0R6DR0SXA7vkJnYKyW/r6YmC05UINBOmCgFwxk14vEDpvbv7Ws\r\n         R4Zw==\r\nX-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20230601; t=1753562731; x=1754167531;\r\n        h=to:subject:message-id:date:from:mime-version:x-gm-message-state\r\n         :from:to:cc:subject:date:message-id:reply-to;\r\n        bh=9BR51KLfPd7+tP8g7SmLS1CY3qcVu8y1ZbqsYDzPQ8A=;\r\n        b=azzAOojD33jEfyueImDs978iyB/F2GE9gaRjHlBzS8PJFSKfUC98cByTf8pUhaSg9j\r\n         tPG4QgQBChWPtPMzkSaUBXI7CBTVOCvfITIRCEuK7/eaBUNPBY4DJB7FPS0KcoHUtoMn\r\n         1cTVQ75aJY1lKPQQzHV/I9WbXm0IN3CPKWxDwJVboMTwgDnaR4SILdYCbisVYwjIDnP0\r\n         7npI9ZVfMqJckcGN+ZxVsj0HycSui8jnDny0BDHzIsEaRM5qpL1gUai8NfrEeOKGPCJX\r\n         hdzLZBRF8Rmg5bImtdhXBZsNr4EY/N8V2+10+XD2vk66cUNovmE6RVnYeZeHJtZWqzrE\r\n         3ceQ==\r\nX-Gm-Message-State: AOJu0Yz+LbCASxkm5xbW0FdRzh1uHSnygIt1Xs/BsT+4vSFkOKAUUGFs\r\n\tcArGbX7+BTDUsBYwKxehs3VkqojXiUv7ghcOoeGqEzcI/ZooD9VHIcoH4/tRKWmDEw0jA2KJjHU\r\n\teXvHYTcDQxrvBp009DapCOwcc7KTQxIzlfDxL\r\nX-Gm-Gg: ASbGncsPWfgu9i3ymbq8ftq97wRWaAXu70GGyPU8Z31iIgIwtFba1Ht0Y+oVu8hDpa4\r\n\t/uZOGm+viVjodNuEeW38daQuJeUmC+hjn7WtmA3UP32mULraHo+Sp1pcxvT7gYvbXchQ5Ewob58\r\n\tWa42DaPgex2y6Yvq2vxn81lI+tF26S45qyAeqXFRbHNygvnudOXCT/irYyZROiCBJIunrlpo4mz\r\n\tsCS59ow+iKeTL/BDMvIkq3SlPqK0Fnbr1VLZnfR\r\nX-Google-Smtp-Source: AGHT+IF1IXjn/PRhJi5lnIxAPsPo7UsgBnrIUi809nOpkd0lJFem1LSgYgu4NTB7aHwozBR1m+S7Ylcs2KrrrR7lRmc=\r\nX-Received: by 2002:a17:907:d412:b0:af6:34e3:2199 with SMTP id\r\n a640c23a62f3a-af634e323a7mr539132866b.20.1753562730986; Sat, 26 Jul 2025\r\n 13:45:30 -0700 (PDT)\r\nMIME-Version: 1.0\r\nFrom: Nico Baier <nico.baier@gmail.com>\r\nDate: Sat, 26 Jul 2025 15:45:19 -0500\r\nX-Gm-Features: Ac12FXxwruT69T9mA7v3d_zsDaFehYdbvpS_KvUNgzX73Jjg6OeYQzOBwOfeKt0\r\nMessage-ID: <CAGS8cYJMxKqiMY9GPDK2aR_3KzyZR32M4pJ_diZFibTUjp6Mew@mail.gmail.com>\r\nSubject: Sent at 3:45\r\nTo: test@nicobaier.com\r\nContent-Type: multipart/alternative; boundary="000000000000ac072e063adb234e"\r\n\r\n--000000000000ac072e063adb234e\r\nContent-Type: text/plain; charset="UTF-8"\r\n\r\nPaullum deliquit, ponderibus modulisque suis ratio utitur.\r\nCurabitur blandit tempus ardua ridiculus sed magna.\r\n\r\n--000000000000ac072e063adb234e\r\nContent-Type: text/html; charset="UTF-8"\r\n\r\n<div dir="ltr">Paullum deliquit, ponderibus modulisque suis ratio utitur.<div>Curabitur blandit tempus ardua ridiculus sed magna.</div></div>\r\n\r\n--000000000000ac072e063adb234e--\r\n',
			attachments: [],
			headers: {
				"return-path": {
					value: [
						{
							address: "nico.baier@gmail.com",
							name: "",
						},
					],
					html: '<span class="mp_address_group"><a href="mailto:nico.baier@gmail.com" class="mp_address_email">nico.baier@gmail.com</a></span>',
					text: "nico.baier@gmail.com",
				},
				received: [
					"from mail-ej1-f48.google.com (mail-ej1-f48.google.com [209.85.218.48]) by inbound-smtp.us-east-2.amazonaws.com with SMTP id e0pcgf8815clpjooic6mmcl5p8loui7o62m303g1 for test@nicobaier.com; Sat, 26 Jul 2025 20:45:32 +0000 (UTC)",
					"by mail-ej1-f48.google.com with SMTP id a640c23a62f3a-ae0df6f5758so517605166b.0 for <test@nicobaier.com>; Sat, 26 Jul 2025 13:45:32 -0700 (PDT)",
				],
				"received-spf":
					"pass (spfCheck: domain of _spf.google.com designates 209.85.218.48 as permitted sender) client-ip=209.85.218.48; envelope-from=nico.baier@gmail.com; helo=mail-ej1-f48.google.com;",
				"authentication-results":
					"amazonses.com; spf=pass (spfCheck: domain of _spf.google.com designates 209.85.218.48 as permitted sender) client-ip=209.85.218.48; envelope-from=nico.baier@gmail.com; helo=mail-ej1-f48.google.com; dkim=pass header.i=@gmail.com; dmarc=pass header.from=gmail.com;",
				"x-ses-receipt":
					"AEFBQUFBQUFBQUFIOGU1Y0xFalFFQjAraEQvNTZTWGxtK3dwd2tDT2laUDNmQW11R0JsZUsrd0lXNUJjbTVwTXhIRlpoSk1jT2N2U0xwc2tua09qY0UxVDh3ci9LTWMyTGJRTkYxMGRPeFZTQ01RVy9XZElhY2M3VlAweWw2dUVaeTRIeW52dnJLQTZHWVFVeWN0dWh2dGN4Y3R5STNNK2VlVXBNMlFPaTcvdDg1SXRGVnNZaW1NWjQrbWF1djNXcUtJVHB6Uk5MY1F0QTV2NUJjcUt6dnhtZDh5YlMwVzJiaFZFTHVFTkUzeU1IZHRrR2M5MjV1WklwUmNtRCtaRVpQLzNkQVc0aHZDZHcrbStjdzV5QWlsb0JNVFN6NHZBNG9yYmtNbm5LbHZ6c1dIRXJUYmZiYUE9PQ==",
				"x-ses-dkim-signature":
					"a=rsa-sha256; q=dns/txt; b=YbjiRZ4w5obuR22kwZf+vl+BEbeyxXjHGTi+gQt/A/ORzHxePwa+UJGIpGLoPZ58H8PCYjrseTtYsBFybBlcZlYDv/vdLlNta9C12+z0HH+0DfnvjLEKGYLUymhr4jYLSAyVFSZVz9STqESAx5vAyRkS3d8IWzl1jVhJAsMkR+k=; c=relaxed/simple; s=ndjes4mrtuzus6qxu3frw3ubo3gpjndv; d=amazonses.com; t=1753562732; v=1; bh=9BR51KLfPd7+tP8g7SmLS1CY3qcVu8y1ZbqsYDzPQ8A=; h=From:To:Cc:Bcc:Subject:Date:Message-ID:MIME-Version:Content-Type:X-SES-RECEIPT;",
				"dkim-signature": {
					value: "v=1",
					params: {
						a: "rsa-sha256",
						c: "relaxed/relaxed",
						d: "gmail.com",
						s: "20230601",
						t: "1753562731",
						x: "1754167531",
						darn: "nicobaier.com",
						h: "to:subject:message-id:date:from:mime-version:from:to:cc:subject :date:message-id:reply-to",
						bh: "9BR51KLfPd7+tP8g7SmLS1CY3qcVu8y1ZbqsYDzPQ8A=",
						b: "f9dUBpMAc38juJEQleulsv2V50KtW/kR+gRBy81pUOhJOAgkgfcv+DdBRjvP97kN8m p8sA2SlOqSHGTAGR9xn5bJC6WoSWgRLTYQ+yAZCn9Ug571bjuCGqTFJLs1tEve+5K0Du 2hFmPeVmG5+GlTvdQ6g//j4Jk2LaFw+jqctFdwcBQxLM3/Skt1Skj21shfPZjEwhE+9s LaCPyXrQxMbT+wWYBNJMiU0/dlrKag1hhTi+aj1BECxsHsSkC6W1zKiM/kVwrg3wi2+G jrEooz16BaL30MblvV0R6DR0SXA7vkJnYKyW/r6YmC05UINBOmCgFwxk14vEDpvbv7Ws R4Zw==",
					},
				},
				"x-google-dkim-signature":
					"v=1; a=rsa-sha256; c=relaxed/relaxed; d=1e100.net; s=20230601; t=1753562731; x=1754167531; h=to:subject:message-id:date:from:mime-version:x-gm-message-state :from:to:cc:subject:date:message-id:reply-to; bh=9BR51KLfPd7+tP8g7SmLS1CY3qcVu8y1ZbqsYDzPQ8A=; b=azzAOojD33jEfyueImDs978iyB/F2GE9gaRjHlBzS8PJFSKfUC98cByTf8pUhaSg9j tPG4QgQBChWPtPMzkSaUBXI7CBTVOCvfITIRCEuK7/eaBUNPBY4DJB7FPS0KcoHUtoMn 1cTVQ75aJY1lKPQQzHV/I9WbXm0IN3CPKWxDwJVboMTwgDnaR4SILdYCbisVYwjIDnP0 7npI9ZVfMqJckcGN+ZxVsj0HycSui8jnDny0BDHzIsEaRM5qpL1gUai8NfrEeOKGPCJX hdzLZBRF8Rmg5bImtdhXBZsNr4EY/N8V2+10+XD2vk66cUNovmE6RVnYeZeHJtZWqzrE 3ceQ==",
				"x-gm-message-state":
					"AOJu0Yz+LbCASxkm5xbW0FdRzh1uHSnygIt1Xs/BsT+4vSFkOKAUUGFs cArGbX7+BTDUsBYwKxehs3VkqojXiUv7ghcOoeGqEzcI/ZooD9VHIcoH4/tRKWmDEw0jA2KJjHU eXvHYTcDQxrvBp009DapCOwcc7KTQxIzlfDxL",
				"x-gm-gg":
					"ASbGncsPWfgu9i3ymbq8ftq97wRWaAXu70GGyPU8Z31iIgIwtFba1Ht0Y+oVu8hDpa4 /uZOGm+viVjodNuEeW38daQuJeUmC+hjn7WtmA3UP32mULraHo+Sp1pcxvT7gYvbXchQ5Ewob58 Wa42DaPgex2y6Yvq2vxn81lI+tF26S45qyAeqXFRbHNygvnudOXCT/irYyZROiCBJIunrlpo4mz sCS59ow+iKeTL/BDMvIkq3SlPqK0Fnbr1VLZnfR",
				"x-google-smtp-source":
					"AGHT+IF1IXjn/PRhJi5lnIxAPsPo7UsgBnrIUi809nOpkd0lJFem1LSgYgu4NTB7aHwozBR1m+S7Ylcs2KrrrR7lRmc=",
				"x-received":
					"by 2002:a17:907:d412:b0:af6:34e3:2199 with SMTP id a640c23a62f3a-af634e323a7mr539132866b.20.1753562730986; Sat, 26 Jul 2025 13:45:30 -0700 (PDT)",
				"mime-version": "1.0",
				from: {
					value: [
						{
							address: "nico.baier@gmail.com",
							name: "Nico Baier",
						},
					],
					html: '<span class="mp_address_group"><span class="mp_address_name">Nico Baier</span> &lt;<a href="mailto:nico.baier@gmail.com" class="mp_address_email">nico.baier@gmail.com</a>&gt;</span>',
					text: '"Nico Baier" <nico.baier@gmail.com>',
				},
				date: "2025-07-26T20:45:19.000Z",
				"x-gm-features":
					"Ac12FXxwruT69T9mA7v3d_zsDaFehYdbvpS_KvUNgzX73Jjg6OeYQzOBwOfeKt0",
				"message-id":
					"<CAGS8cYJMxKqiMY9GPDK2aR_3KzyZR32M4pJ_diZFibTUjp6Mew@mail.gmail.com>",
				subject: "Sent at 3:45",
				to: {
					value: [
						{
							address: "test@nicobaier.com",
							name: "",
						},
					],
					html: '<span class="mp_address_group"><a href="mailto:test@nicobaier.com" class="mp_address_email">test@nicobaier.com</a></span>',
					text: "test@nicobaier.com",
				},
				"content-type": {
					value: "multipart/alternative",
					params: {
						boundary: "000000000000ac072e063adb234e",
					},
				},
			},
		},
		cleanedContent: {
			html: '<div dir="ltr">Paullum deliquit, ponderibus modulisque suis ratio utitur.<div>Curabitur blandit tempus ardua ridiculus sed magna.</div></div>\n',
			text: "Paullum deliquit, ponderibus modulisque suis ratio utitur.\nCurabitur blandit tempus ardua ridiculus sed magna.\n",
			hasHtml: true,
			hasText: true,
			attachments: [],
			headers: {
				"return-path": {
					value: [
						{
							address: "nico.baier@gmail.com",
							name: "",
						},
					],
					html: '<span class="mp_address_group"><a href="mailto:nico.baier@gmail.com" class="mp_address_email">nico.baier@gmail.com</a></span>',
					text: "nico.baier@gmail.com",
				},
				received: [
					"from mail-ej1-f48.google.com (mail-ej1-f48.google.com [209.85.218.48]) by inbound-smtp.us-east-2.amazonaws.com with SMTP id e0pcgf8815clpjooic6mmcl5p8loui7o62m303g1 for test@nicobaier.com; Sat, 26 Jul 2025 20:45:32 +0000 (UTC)",
					"by mail-ej1-f48.google.com with SMTP id a640c23a62f3a-ae0df6f5758so517605166b.0 for <test@nicobaier.com>; Sat, 26 Jul 2025 13:45:32 -0700 (PDT)",
				],
				"received-spf":
					"pass (spfCheck: domain of _spf.google.com designates 209.85.218.48 as permitted sender) client-ip=209.85.218.48; envelope-from=nico.baier@gmail.com; helo=mail-ej1-f48.google.com;",
				"authentication-results":
					"amazonses.com; spf=pass (spfCheck: domain of _spf.google.com designates 209.85.218.48 as permitted sender) client-ip=209.85.218.48; envelope-from=nico.baier@gmail.com; helo=mail-ej1-f48.google.com; dkim=pass header.i=@gmail.com; dmarc=pass header.from=gmail.com;",
				"x-ses-receipt":
					"AEFBQUFBQUFBQUFIOGU1Y0xFalFFQjAraEQvNTZTWGxtK3dwd2tDT2laUDNmQW11R0JsZUsrd0lXNUJjbTVwTXhIRlpoSk1jT2N2U0xwc2tua09qY0UxVDh3ci9LTWMyTGJRTkYxMGRPeFZTQ01RVy9XZElhY2M3VlAweWw2dUVaeTRIeW52dnJLQTZHWVFVeWN0dWh2dGN4Y3R5STNNK2VlVXBNMlFPaTcvdDg1SXRGVnNZaW1NWjQrbWF1djNXcUtJVHB6Uk5MY1F0QTV2NUJjcUt6dnhtZDh5YlMwVzJiaFZFTHVFTkUzeU1IZHRrR2M5MjV1WklwUmNtRCtaRVpQLzNkQVc0aHZDZHcrbStjdzV5QWlsb0JNVFN6NHZBNG9yYmtNbm5LbHZ6c1dIRXJUYmZiYUE9PQ==",
				"x-ses-dkim-signature":
					"a=rsa-sha256; q=dns/txt; b=YbjiRZ4w5obuR22kwZf+vl+BEbeyxXjHGTi+gQt/A/ORzHxePwa+UJGIpGLoPZ58H8PCYjrseTtYsBFybBlcZlYDv/vdLlNta9C12+z0HH+0DfnvjLEKGYLUymhr4jYLSAyVFSZVz9STqESAx5vAyRkS3d8IWzl1jVhJAsMkR+k=; c=relaxed/simple; s=ndjes4mrtuzus6qxu3frw3ubo3gpjndv; d=amazonses.com; t=1753562732; v=1; bh=9BR51KLfPd7+tP8g7SmLS1CY3qcVu8y1ZbqsYDzPQ8A=; h=From:To:Cc:Bcc:Subject:Date:Message-ID:MIME-Version:Content-Type:X-SES-RECEIPT;",
				"dkim-signature": {
					value: "v=1",
					params: {
						a: "rsa-sha256",
						c: "relaxed/relaxed",
						d: "gmail.com",
						s: "20230601",
						t: "1753562731",
						x: "1754167531",
						darn: "nicobaier.com",
						h: "to:subject:message-id:date:from:mime-version:from:to:cc:subject :date:message-id:reply-to",
						bh: "9BR51KLfPd7+tP8g7SmLS1CY3qcVu8y1ZbqsYDzPQ8A=",
						b: "f9dUBpMAc38juJEQleulsv2V50KtW/kR+gRBy81pUOhJOAgkgfcv+DdBRjvP97kN8m p8sA2SlOqSHGTAGR9xn5bJC6WoSWgRLTYQ+yAZCn9Ug571bjuCGqTFJLs1tEve+5K0Du 2hFmPeVmG5+GlTvdQ6g//j4Jk2LaFw+jqctFdwcBQxLM3/Skt1Skj21shfPZjEwhE+9s LaCPyXrQxMbT+wWYBNJMiU0/dlrKag1hhTi+aj1BECxsHsSkC6W1zKiM/kVwrg3wi2+G jrEooz16BaL30MblvV0R6DR0SXA7vkJnYKyW/r6YmC05UINBOmCgFwxk14vEDpvbv7Ws R4Zw==",
					},
				},
				"x-google-dkim-signature":
					"v=1; a=rsa-sha256; c=relaxed/relaxed; d=1e100.net; s=20230601; t=1753562731; x=1754167531; h=to:subject:message-id:date:from:mime-version:x-gm-message-state :from:to:cc:subject:date:message-id:reply-to; bh=9BR51KLfPd7+tP8g7SmLS1CY3qcVu8y1ZbqsYDzPQ8A=; b=azzAOojD33jEfyueImDs978iyB/F2GE9gaRjHlBzS8PJFSKfUC98cByTf8pUhaSg9j tPG4QgQBChWPtPMzkSaUBXI7CBTVOCvfITIRCEuK7/eaBUNPBY4DJB7FPS0KcoHUtoMn 1cTVQ75aJY1lKPQQzHV/I9WbXm0IN3CPKWxDwJVboMTwgDnaR4SILdYCbisVYwjIDnP0 7npI9ZVfMqJckcGN+ZxVsj0HycSui8jnDny0BDHzIsEaRM5qpL1gUai8NfrEeOKGPCJX hdzLZBRF8Rmg5bImtdhXBZsNr4EY/N8V2+10+XD2vk66cUNovmE6RVnYeZeHJtZWqzrE 3ceQ==",
				"x-gm-message-state":
					"AOJu0Yz+LbCASxkm5xbW0FdRzh1uHSnygIt1Xs/BsT+4vSFkOKAUUGFs cArGbX7+BTDUsBYwKxehs3VkqojXiUv7ghcOoeGqEzcI/ZooD9VHIcoH4/tRKWmDEw0jA2KJjHU eXvHYTcDQxrvBp009DapCOwcc7KTQxIzlfDxL",
				"x-gm-gg":
					"ASbGncsPWfgu9i3ymbq8ftq97wRWaAXu70GGyPU8Z31iIgIwtFba1Ht0Y+oVu8hDpa4 /uZOGm+viVjodNuEeW38daQuJeUmC+hjn7WtmA3UP32mULraHo+Sp1pcxvT7gYvbXchQ5Ewob58 Wa42DaPgex2y6Yvq2vxn81lI+tF26S45qyAeqXFRbHNygvnudOXCT/irYyZROiCBJIunrlpo4mz sCS59ow+iKeTL/BDMvIkq3SlPqK0Fnbr1VLZnfR",
				"x-google-smtp-source":
					"AGHT+IF1IXjn/PRhJi5lnIxAPsPo7UsgBnrIUi809nOpkd0lJFem1LSgYgu4NTB7aHwozBR1m+S7Ylcs2KrrrR7lRmc=",
				"x-received":
					"by 2002:a17:907:d412:b0:af6:34e3:2199 with SMTP id a640c23a62f3a-af634e323a7mr539132866b.20.1753562730986; Sat, 26 Jul 2025 13:45:30 -0700 (PDT)",
				"mime-version": "1.0",
				from: {
					value: [
						{
							address: "nico.baier@gmail.com",
							name: "Nico Baier",
						},
					],
					html: '<span class="mp_address_group"><span class="mp_address_name">Nico Baier</span> &lt;<a href="mailto:nico.baier@gmail.com" class="mp_address_email">nico.baier@gmail.com</a>&gt;</span>',
					text: '"Nico Baier" <nico.baier@gmail.com>',
				},
				date: "2025-07-26T20:45:19.000Z",
				"x-gm-features":
					"Ac12FXxwruT69T9mA7v3d_zsDaFehYdbvpS_KvUNgzX73Jjg6OeYQzOBwOfeKt0",
				"message-id":
					"<CAGS8cYJMxKqiMY9GPDK2aR_3KzyZR32M4pJ_diZFibTUjp6Mew@mail.gmail.com>",
				subject: "Sent at 3:45",
				to: {
					value: [
						{
							address: "test@nicobaier.com",
							name: "",
						},
					],
					html: '<span class="mp_address_group"><a href="mailto:test@nicobaier.com" class="mp_address_email">test@nicobaier.com</a></span>',
					text: "test@nicobaier.com",
				},
				"content-type": {
					value: "multipart/alternative",
					params: {
						boundary: "000000000000ac072e063adb234e",
					},
				},
			},
		},
	},
	endpoint: {
		id: "Y2xvEHvud-rSsdaAezcjk",
		name: "cf-endpoint",
		type: "webhook",
	},
};
