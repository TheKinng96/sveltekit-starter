import { setLanguageTag } from '$lib/paraglide/runtime'
import type { LayoutServerLoad } from './$types'

export const load = (async () => {
	// set locale to ja
	setLanguageTag('ja')
	return {}
}) satisfies LayoutServerLoad
