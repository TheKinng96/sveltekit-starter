<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

	// import type { LayoutData } from './$types';
	import '../app.css'
</script>
<ParaglideJS {i18n}>


<div class="min-w-screen min-h-screen">
	<slot />
</div>

</ParaglideJS>