<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'
	import '../app.css'
	import { setLanguageTag } from '$lib/paraglide/runtime'
	import { Toaster } from 'svelte-sonner'

	// Defualt language is japanese
	setLanguageTag('ja')

	let { children } = $props()
</script>

<ParaglideJS {i18n}>
	<Toaster richColors position="top-center" expand={true} duration={3000}></Toaster>

	<div class="min-w-screen min-h-screen">
		{@render children()}
	</div>
</ParaglideJS>
