import { z } from 'zod'
import * as m from '$lib/paraglide/messages.js'

export const formSchema = z.object({
	email: z.string().min(1, m.validation_required()).email(m.validation_email()),
	password: z.string().min(8, m.validation_minLength({ minLength: 8 })),
})

export type FormSchema = typeof formSchema
