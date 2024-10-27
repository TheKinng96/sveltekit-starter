import type { Actions } from './$types'
import { fail, message, superValidate, type Infer } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { formSchema, type RegisterErrorKeys, type RegisterFormError } from './register.schema'
import type { ErrorResponse, Message } from '$lib/types/response.types'
import { languageTag } from '$lib/paraglide/runtime'
import type { AuthSystemFields } from '$lib/types/pocketbase-types'
import * as m from '$lib/paraglide/messages.js'
import { ColormeTokenRequest } from '$lib/server/Colorme.api'
import { COLORME_CLIENT, COLORME_REDIRECT_URL } from '$env/static/private'

const schema = formSchema(languageTag())

export const load = async () => {
	const form = await superValidate<Infer<typeof schema>, Message>(zod(schema))

	return {
		form,
		colormeUrl: await new ColormeTokenRequest(COLORME_CLIENT, COLORME_REDIRECT_URL).getAuthUrl(),
	}
}

export const actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, zod(schema))

		if (!form.valid) {
			return fail(400, { form })
		}

		const { email, password, passwordConfirm } = form.data

		try {
			const user = await locals.pb.collection<AuthSystemFields>('users').create({
				email,
				password,
				passwordConfirm,
			})

			locals.user = user
		} catch (error) {
			const err = error as {
				response: ErrorResponse<RegisterFormError>
			}

			const errorCode = err.response.data?.email?.code as RegisterErrorKeys

			// To parse the error message from pocketbase to locales
			const errors = {
				validation_invalid_email: m.register_error_invalidEmail(),
			} as Record<NonNullable<RegisterErrorKeys>, string>

			return message(form, {
				text: {
					title: err.response.message,
					description: errorCode ? errors[errorCode] : undefined,
				},
				status: 'error',
			})
		}

		return message(form, {
			status: 'success',
			text: {
				title: m.toast_success_register(),
			},
		})
	},
} satisfies Actions
