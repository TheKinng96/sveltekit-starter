import { COLORME_CLIENT, COLORME_CLIENT_SECRET, COLORME_REDIRECT_URL } from '$env/static/private'
import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { ColormeAuthenticatedRequest, ColormeTokenRequest } from '$lib/server/Colorme.api'
import * as m from '$lib/paraglide/messages.js'
import { generatePassword } from '$lib/auth/passwordGenerator'
import { fetchApi } from '$lib/api/api.utils'
import type { AuthProvidersResponse } from '$lib/types/pocketbase-types'
import type { ColormeShop } from '$lib/types/colorme.types'

export const load: PageServerLoad = async function ({ url, locals }) {
	const code = url.searchParams.get('code') || ''

	if (!code) {
		error(401, { message: m.register_colorme_unauthorized() })
	}

	const accessToken = await new ColormeTokenRequest(
		COLORME_CLIENT,
		COLORME_REDIRECT_URL,
		COLORME_CLIENT_SECRET,
	).getAccessToken(code)

	let colormeShopData: ColormeShop | null = null

	try {
		colormeShopData = await new ColormeAuthenticatedRequest(accessToken).getShopInfo()
		// eslint-disable-next-line
	} catch (err) {
		error(401, { message: m.register_colorme_accessTokenExpired() })
	}

	if (!accessToken || !colormeShopData) {
		error(401, { message: m.register_colorme_unauthorized() })
	}

	const password = await generatePassword(colormeShopData.id)

	const { authProvider } = await fetchApi<{ authProvider: AuthProvidersResponse }>('colorme/auth', {
		accessToken,
		password,
		colormeShopData,
	})

	if (!authProvider) {
		error(406, { message: m.register_colorme_createFailed() })
	}

	const loginResponse = await locals.pb
		.collection('users')
		.authWithPassword(colormeShopData.email, password)

	return { success: loginResponse.token?.length > 0, user: loginResponse.record }
}
