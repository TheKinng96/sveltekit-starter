<script lang="ts">
	import { AppIcon } from '$lib/components/base/icons'

	let { tooltip, isToggle }: { tooltip?: string; isToggle?: boolean } = $props()

	let theme = $state('emerald')

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
			<AppIcon.Sun class="swap-on size-5 fill-current" />
		{/if}
		<input
			type="checkbox"
			class="theme-controller {isToggle ? 'toggle' : ''}"
			value="night"
			onchange={toggleTheme}
		/>
		{#if !isToggle}
			<AppIcon.Sun class="swap-on size-5 fill-current" />
		{/if}
		<AppIcon.Moon_02 class="swap-off size-5 fill-current" />
	</label>
</div>
