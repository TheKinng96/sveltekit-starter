<script lang="ts">
	import { browser } from '$app/environment'
	import { AppIcon } from '$lib/components/base/icons'
	import { onMount } from 'svelte'

	let { tooltip, isToggle }: { tooltip?: string; isToggle?: boolean } = $props()

	const themeOnLoad = browser ? document.documentElement.getAttribute('data-theme') : 'emerald'
	let theme = $state('emerald')

	onMount(() => {
		theme = themeOnLoad ?? 'emerald'
	})

	const toggleTheme = () => {
		theme = theme === 'emerald' ? 'night' : 'emerald'
		document.documentElement.setAttribute('data-theme', theme)
	}
</script>

<div class="tooltip tooltip-bottom w-full p-0" data-tip={tooltip ?? null}>
	<label
		class={isToggle
			? 'btn-small btn btn-ghost flex cursor-pointer gap-2'
			: 'btn-small btn btn-ghost swap swap-rotate w-full'}
	>
		{#if isToggle}
			<AppIcon.Sun
				class="{themeOnLoad === 'emerald' ? 'swap-on' : 'swap-off'} size-5 fill-current"
			/>
		{/if}
		<input
			type="checkbox"
			class="theme-controller {isToggle ? 'toggle' : ''}"
			value={theme}
			onchange={toggleTheme}
		/>
		{#if !isToggle}
			<AppIcon.Sun
				class="{themeOnLoad === 'emerald' ? 'swap-on' : 'swap-off'} size-5 fill-current"
			/>
		{/if}
		<AppIcon.Moon_02
			class="{themeOnLoad === 'emerald' ? 'swap-off' : 'swap-on'} size-5 fill-current"
		/>
	</label>
</div>
