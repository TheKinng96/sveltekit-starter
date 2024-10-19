<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import type { InputProps } from './form.types'

	let {
		value = $bindable(),
		name,
		label,
		type,
		placeholder,
		errors,
		constraints,
		children,
		class: extraClass,
	}: InputProps = $props()

	const dispatch = createEventDispatcher()

	// Handle input event and dispatch the value change
	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement
		dispatch('input', target.value) // For two-way binding
	}
</script>

<label class="form-control w-full {extraClass ?? ''}">
	{#if label}
		<div class="label">
			<span class="label-text">{label}</span>
		</div>
	{/if}

	<div
		class="flex items-center rounded-lg border {children
			? ' outline-slate-300 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2'
			: ''}"
	>
		<input
			bind:value
			{name}
			{type}
			{placeholder}
			class="input input-sm w-full {children
				? 'rounded-br-none rounded-tr-none focus:outline-none'
				: ''}"
			oninput={handleInput}
			{...constraints}
		/>

		{#if children}
			{@render children()}
		{/if}
	</div>

	<div class="label">
		{#if errors}
			<span class="label-text-alt text-red-500">{errors[0]}</span>
		{/if}
	</div>
</label>
