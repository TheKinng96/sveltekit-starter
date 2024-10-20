<script lang="ts">
	import { page } from '$app/stores'
	import { setLanguageTag } from '$lib/paraglide/runtime'

	let { children } = $props()
	setLanguageTag('ja')
</script>

<div
	class="container relative h-screen w-screen flex-col items-center justify-center md:grid md:max-w-none md:grid-cols-2 md:px-0"
>
	{#if $page.route.id?.includes('login')}
		<a href="/register" class="btn btn-outline absolute right-4 top-4 md:right-8 md:top-8">
			Register
		</a>
	{:else}
		<a href="/login" class="btn btn-outline absolute right-4 top-4 md:right-8 md:top-8"> Login </a>
	{/if}

	<div class="bg-muted relative hidden h-full flex-col p-10 dark:border-r md:flex">
		<div class="absolute inset-0 h-full w-full bg-black">
			<img
				src="/images/auth/auth-abstract.svg"
				alt="auth-img"
				class="h-full w-full bg-cover bg-repeat"
			/>
		</div>
		<div class="relative z-20 flex items-center text-lg font-medium">Acme Inc</div>
		<div class="relative z-20 mt-auto">
			<blockquote class="space-y-2">
				<p class="text-lg">
					&ldquo;This library has saved me countless hours of work and helped me deliver stunning
					designs to my clients faster than ever before. Highly recommended!&rdquo;
				</p>
				<footer class="text-sm">Sofia Davis</footer>
			</blockquote>
		</div>
	</div>

	<div class="m-auto w-full max-w-md lg:p-8">
		{@render children()}
	</div>
</div>
