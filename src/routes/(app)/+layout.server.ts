import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load = (({ locals }) => {
	if (!locals.user) {
		redirect(302, '/login')
	}

	return {}
}) satisfies LayoutServerLoad
