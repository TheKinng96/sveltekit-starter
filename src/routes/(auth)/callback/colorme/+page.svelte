<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import * as m from '$lib/paraglide/messages.js'
	import { onMount } from 'svelte'
	import { toast } from 'svelte-sonner'

	let { data } = $props()

	onMount(() => {
		if (!browser) return

		if (data.success) {
			goto('/dashboard')
			toast.success(m.toast_success_login())
		}
	})
</script>

<span class="text-2xl text-neutral-800 dark:text-neutral-100">{m.callback_default()}</span>
