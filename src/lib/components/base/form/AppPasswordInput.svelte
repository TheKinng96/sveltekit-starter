<script lang="ts">
	import { AppTextInput } from '.'
	import { AppIcon } from '../icons'
	import type { InputProps } from './form.types'

	let {
		value = $bindable(),
		name,
		label,
		placeholder,
		errors,
		constraints,
		class: extraClass,
	}: InputProps = $props()

	let passwordVisible = $state(false)
</script>

<AppTextInput
	bind:value
	{name}
	{label}
	type={passwordVisible ? 'text' : 'password'}
	{placeholder}
	{errors}
	{constraints}
	class={extraClass}
>
	<div
		class="flex h-full w-10 items-center justify-center rounded-br-lg rounded-tr-lg bg-white dark:bg-slate-800"
	>
		<label class="swap">
			<input type="checkbox" bind:checked={passwordVisible} />

			<AppIcon.Eye class="swap-off size-5 fill-none " />
			<AppIcon.EyeOff class="swap-on size-5 fill-none" />
		</label>
	</div>
</AppTextInput>
