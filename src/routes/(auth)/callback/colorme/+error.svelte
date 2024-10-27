<script lang="ts">
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import * as m from '$lib/paraglide/messages.js'
	import { page } from '$app/stores'
	import { toast } from 'svelte-sonner'

	onMount(() => {
		setTimeout(() => {
			goto('/login')
		}, 2000)

		if ($page.error) toast.error($page.error.message)
	})
</script>

<h1 class="text-xl text-red-800">{m.callback_error()}</h1>
