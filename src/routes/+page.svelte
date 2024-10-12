<script lang="ts">
	import { onMount } from 'svelte';
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { AppButton } from '$lib/components/base/button';
	import { fade } from 'svelte/transition';

	let darkMode = false;

	function toggleTheme() {
		darkMode = !darkMode;
		document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
	}

	onMount(() => {
		darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
	});

	const {
		elements: { root, content, trigger },
		states: { open }
	} = createCollapsible({
		forceVisible: true
	});
</script>

<button
	on:click={toggleTheme}
	type="button"
	class=" shadow-mini hover:bg-dark/95 active:scale-98 active:transition-all p-2 m-4 bg-light-secondary-default dark:bg-dark-secondary-default text-light-text-default rounded"
>
	{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
</button>

<h1 class="underline text-2xl font-bold text-light-secondary">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="root" use:melt={$root}>
	<AppButton on:click={() => console.log('clicked')} {...$trigger} action={trigger}>
		{$open ? 'Close' : 'Open'}
	</AppButton>

	{#if $open}
		<div
			class="rounded-md border border-light-border-default dark:border-dark-border-default p-4 text-light-primary-dark dark:text-light-primary-light shadow-sm"
			use:melt={$content}
			transition:fade
		>
			Obi-Wan says: Hello there!
		</div>
	{/if}
</div>
