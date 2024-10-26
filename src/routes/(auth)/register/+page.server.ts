import type { Actions } from './$types'
import { fail, message, superValidate, type Infer } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { formSchema } from './register.schema'
import type { Message } from '$lib/types/response.types'
import { languageTag } from '$lib/paraglide/runtime'
import type { AuthSystemFields } from '$lib/types/pocketbase-types'
import * as m from '$lib/paraglide/messages.js'

const schema = formSchema(languageTag())

export const load = async () => {
	const form = await superValidate<Infer<typeof schema>, Message>(zod(schema))

	return {
		form,
		colormeUrl: '#',
	}
}

export const actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, zod(schema))

		if (!form.valid) {
			return fail(400, { form })
		}

		const { email, password, passwordConfirm } = form.data

		const user = await locals.pb
			.collection<AuthSystemFields>('users')
			.create({ email, password, passwordConfirm })
		locals.user = user

		return message(form, {
			status: 'success',
			text: {
				title: m.toast_success_register(),
			},
		})
	},
} satisfies Actions
