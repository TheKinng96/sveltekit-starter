<script lang="ts">
	import { onMount } from 'svelte';
	let darkMode = false;

	function toggleTheme() {
		darkMode = !darkMode;
		document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
	}

	onMount(() => {
		darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
	});
</script>

<button
	on:click={toggleTheme}
	class="p-2 m-4 bg-light-secondary-default dark:bg-dark-secondary-default text-light-text-default rounded"
>
	{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
</button>

<h1 class="underline text-2xl font-bold text-light-secondary">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
