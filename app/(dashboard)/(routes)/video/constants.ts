import * as z from "zod"

export const fromSchema = z.object(
	{
		prompt: z.string().min(1, {
			message: "Music prompt is required"
		}),
	});