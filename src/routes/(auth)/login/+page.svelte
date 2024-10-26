<script lang="ts">
	import * as m from '$lib/paraglide/messages.js'
	import { formSchema } from './login.schema'
	import { superForm } from 'sveltekit-superforms'
	import { zodClient } from 'sveltekit-superforms/adapters'
	import { goto } from '$app/navigation'
	import { AppIcon } from '$lib/components/base/icons'
	import { AppTextInput, AppPasswordInput } from '$lib/components/base/form/'
	import { toast } from 'svelte-sonner'

	let { data } = $props()

	const form = superForm(data.form, {
		validators: zodClient(formSchema()),
	})

	const { form: formData, enhance, message, constraints, errors } = form

	$effect(() => {
		if (!$message?.status || !$message.text) return

		const { title, description } = $message.text

		if ($message.status === 'success') {
			toast.success(title, { description })
			goto('/dashboard')
		} else {
			toast.error(title, { description })
		}
	})
</script>

<svelte:head>
	<title>{m.login_title()}</title>
</svelte:head>

<div class="mb-4 flex flex-col gap-2">
	<h1 class="text-2xl font-bold tracking-tight">{m.login_title()}</h1>
	<p class="text-muted-foreground text-sm">{m.login_description()}</p>
</div>

<div class="flex flex-col gap-4">
	<form method="POST" use:enhance>
		<AppTextInput
			name="email"
			type="text"
			bind:value={$formData.email}
			constraints={$constraints.email}
			errors={$errors.email}
			placeholder={m.login_form_email_placeholder()}
		/>

		<AppPasswordInput
			name="password"
			bind:value={$formData.password}
			constraints={$constraints.password}
			errors={$errors.password}
			placeholder={m.login_form_password_placeholder()}
		/>

		<button class="btn btn-primary btn-sm w-full">{m.action_login()}</button>
	</form>

	<div class="divider">{m.login_continueWith()}</div>

	<a href={data.colormeUrl} class="group btn btn-outline btn-neutral btn-sm flex gap-2">
		<AppIcon.Colorme_01 class="h-full w-14 scale-90 group-hover:stroke-white" />
		ColorMe
	</a>
</div>
