<script lang="ts">
	import { formSchema } from './schema'
	import { superForm } from 'sveltekit-superforms'
	import { zodClient } from 'sveltekit-superforms/adapters'
	import { goto } from '$app/navigation'
	import { AppIcon } from '$lib/components/base/icons'

	let { data } = $props()

	const form = superForm(data.form, {
		validators: zodClient(formSchema),
	})

	const { form: formData, enhance, message } = form

	$effect(() => {
		if ($message?.status) {
			if ($message.status !== 'success' && $message.text) {
				// show toast
				// toast.error($message.text.title, {
				// 	description: $message.text.description,
				// })
			}

			if ($message.status === 'success') {
				goto('/dashboard')
			}
		}
	})
</script>

<div class="flex flex-col space-y-2 text-center">
	<h1 class="text-2xl font-semibold tracking-tight">m.auth_login_formTitle()</h1>
	<p class="text-muted-foreground text-sm">m.auth_login_formDescription()</p>
</div>

<div>
	<form method="POST" use:enhance>
		<label for="name">Name</label>
		<input type="text" name="name" bind:value={$formData.password} />

		<label for="email">E-mail</label>
		<input type="email" name="email" bind:value={$formData.email} />
	</form>

	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t"></span>
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background text-muted-foreground px-2"> Or continue with </span>
		</div>
	</div>

	<a href={data.colormeUrl} class="btn btn-outline btn-neutral flex gap-2">
		<AppIcon.Colorme_01 class="h-full scale-90 " />
		ColorMe
	</a>
</div>
