import { languageTag, setLanguageTag } from '$lib/paraglide/runtime'
import type { LayoutServerLoad } from './$types'

export const load = (async () => {
	console.log('on app load', languageTag())
	// set locale to ja
	setLanguageTag('ja')
	console.log('on app load after set', languageTag())
	return {}
}) satisfies LayoutServerLoad
