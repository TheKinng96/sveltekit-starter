import type { Actions } from './$types'
import { fail, message, superValidate, type Infer } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { formSchema } from './login.schema'
import type { Message } from '$lib/types/response.types'
import { languageTag } from '$lib/paraglide/runtime'
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

		const { email, password } = form.data

		try {
			await locals.pb.collection('users').authWithPassword(email, password)
		} catch (error) {
			console.error('login', error)

			return message(form, {
				text: {
					title: m.toast_error_login(),
					description: m.toast_error_loginDescription(),
				},
				status: 'error',
			})
		}

		return message(form, {
			status: 'success',
			text: {
				title: m.toast_success_login(),
			},
		})
	},
} satisfies Actions
