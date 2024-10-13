<script lang="ts">
	import { onMount } from 'svelte'
	import { createCollapsible, melt } from '@melt-ui/svelte'
	import { AppButton } from '$lib/components/base/button'
	import { fade } from 'svelte/transition'
	import { AppIcon } from '$lib/components/base/icons'

	let darkMode = false

	function toggleTheme() {
		darkMode = !darkMode
		document.documentElement.setAttribute('data-theme', darkMode ? 'night' : 'emerald')
	}

	onMount(() => {
		darkMode = window.matchMedia('(prefers-color-scheme: night)').matches
		document.documentElement.setAttribute('data-theme', darkMode ? 'night' : 'emerald')
	})

	const {
		elements: { root, content, trigger },
		states: { open },
	} = createCollapsible({
		forceVisible: true,
	})
</script>

<label class="swap swap-rotate">
	<input type="checkbox" on:change={toggleTheme} checked={darkMode} />
	<AppIcon.Sun class="swap-on fill-current size-10" />
	<AppIcon.Moon_02 class="swap-off fill-current size-10" />
</label>

<h1 class="text-light-secondary text-2xl font-bold underline">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="root" use:melt={$root}>
	<AppButton on:click={() => console.log('clicked')} {...$trigger} action={trigger}>
		{$open ? 'Close' : 'Open'}
	</AppButton>

	{#if $open}
		<div
			class="rounded-md border border-light-border-default p-4 text-light-primary-dark shadow-sm dark:border-dark-border-default dark:text-light-primary-light"
			use:melt={$content}
			transition:fade
		>
			Obi-Wan says: Hello there!
		</div>
	{/if}
</div>
