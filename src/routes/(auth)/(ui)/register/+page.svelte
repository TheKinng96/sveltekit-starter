<script lang="ts">
	// import { AppPasswordInput, AppTextInput } from '$lib/components/base/form'
	import { AppIcon } from '$lib/components/base/icons'
	import * as m from '$lib/paraglide/messages.js'
	// import { superForm } from 'sveltekit-superforms'
	// import { zodClient } from 'sveltekit-superforms/adapters'
	// import { formSchema } from './register.schema.js'
	// import { toast } from 'svelte-sonner'

	let { data } = $props()

	// const form = superForm(data.form, {
	// 	validators: zodClient(formSchema()),
	// })

	// const { form: formData, enhance, constraints, errors, message } = form

	// $effect(() => {
	// 	if ($message?.status === 'success' && $message.text) {
	// 		toast.success($message.text.title)
	// 	}
	// })
</script>

<svelte:head>
	<title>{m.register_metaTitle()}</title>
</svelte:head>

<div class="mx-auto flex w-full flex-col justify-start gap-2">
	<div class="mb-4 flex flex-col justify-start gap-2">
		<h1 class="text-2xl font-semibold tracking-tight">{m.register_title()}</h1>
		<p class="text-muted-foreground text-sm">{m.register_description()}</p>
	</div>

	<div class="mb-4 flex flex-col gap-4">
		<!-- By default can only login by Colorme -->
		<!-- <form method="POST" use:enhance>
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

			<AppPasswordInput
				name="passwordConfirm"
				bind:value={$formData.passwordConfirm}
				constraints={$constraints.passwordConfirm}
				errors={$errors.passwordConfirm}
				placeholder={m.register_form_passwordConfirmation_placeholder()}
			/>

			<button class="btn btn-primary btn-sm w-full">{m.action_login()}</button>
		</form> -->

		<!-- <div class="divider">{m.login_continueWith()}</div> -->

		<a href={data.colormeUrl} class="group btn btn-outline btn-neutral btn-sm flex gap-2">
			<AppIcon.Colorme_01 class="h-full w-14 scale-90 group-hover:stroke-white" />
			ColorMe
		</a>
	</div>

	<p class="text-muted-foreground px-8 text-center text-sm">
		By clicking continue, you agree to our
		<a href="/terms" class="underline underline-offset-4 hover:text-primary"> Terms of Service </a>
		and
		<a href="/privacy" class="underline underline-offset-4 hover:text-primary"> Privacy Policy </a>
		.
	</p>
</div>
