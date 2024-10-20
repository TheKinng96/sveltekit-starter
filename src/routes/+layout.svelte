<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'
	import '../app.css'
	import { setLanguageTag } from '$lib/paraglide/runtime'

	// Defualt language is japanese
	setLanguageTag('ja')

	let { children } = $props()
</script>

<ParaglideJS {i18n}>
	<div class="min-w-screen min-h-screen">
		{@render children()}
	</div>
</ParaglideJS>
