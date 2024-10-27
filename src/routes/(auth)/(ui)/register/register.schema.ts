import { z } from 'zod'
import * as m from '$lib/paraglide/messages.js'
import { type AvailableLanguageTag } from '$lib/paraglide/runtime'
import { parseZodSchema } from 'zod-key-parser'
import type { ErrorDetail } from '$lib/types/response.types'

// Bug that on hard refresh, the locale will be set to the default no matter when we call the set language fn
export const formSchema = (locale: AvailableLanguageTag = 'ja') =>
	z
		.object({
			email: z
				.string()
				.min(1, m.validation_required({ languageTag: locale }))
				.email(m.validation_email({ languageTag: locale })),
			password: z
				.string()
				.min(8, m.validation_minLength({ minLength: 8 }, { languageTag: locale })),
			passwordConfirm: z.string(),
		})
		.superRefine(({ passwordConfirm, password }, ctx) => {
			if (passwordConfirm !== password) {
				ctx.addIssue({
					code: 'custom',
					message: m.validation_passwordConfirm(),
					path: ['passwordConfirm'],
				})
			}
		})

export type FormSchema = typeof formSchema

export type RegisterFormSchema = typeof formSchema
// eslint-disable-next-line
const { keys } = parseZodSchema(formSchema())
export type RegisterFormError = {
	[K in keyof typeof keys]: ErrorDetail
}
export type RegisterErrorKeys = 'validation_invalid_email' | undefined
