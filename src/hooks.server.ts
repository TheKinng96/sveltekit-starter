import { sequence } from '@sveltejs/kit/hooks'
import { i18n } from '$lib/i18n'
import Pocketbase from 'pocketbase'
import type { Handle } from '@sveltejs/kit'
import type { AuthSystemFields, TypedPocketBase } from '$lib/types/pocketbase-types'

const handlePocketbase: Handle = async ({ event, resolve }) => {
	event.locals.pb = new Pocketbase('http://localhost:8090') as TypedPocketBase

	event.locals.pb.autoCancellation(false)

	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = event.locals.pb.authStore.model as AuthSystemFields
	} else {
		event.locals.user = undefined
	}

	const response = await resolve(event)

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

	return response
}

export const handle = sequence(i18n.handle(), handlePocketbase)
