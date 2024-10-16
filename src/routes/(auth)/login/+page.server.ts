import type { Actions } from './$types'
import { fail, message, superValidate, type Infer } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { formSchema } from './schema'
import type { Message } from '$lib/types/response.types'

export const load = async () => {
	const form = await superValidate<Infer<typeof formSchema>, Message>(zod(formSchema))

	return {
		form,
		colormeUrl: '#',
	}
}

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(formSchema))

		if (!form.valid) {
			return fail(400, { form })
		}

		// const { email, password } = form.data

		// Do something with the email and password

		return message(form, {
			status: 'success',
		})
	},
} satisfies Actions
