<script>
	import { AppThemeSwitcher } from '$lib/components/base/themeSwitcher'
</script>

<header class="sticky top-0 z-50 w-full border-b backdrop-blur">
	<div class="container mx-auto flex h-14 max-w-[60rem] items-center">
		<a href="/" class="btn btn-ghost flex items-center space-x-2">
			<span class="text-xl font-bold">Logo</span>
		</a>
		<nav class="ml-auto flex items-center gap-4 sm:gap-6">
			<a
				class="btn btn-ghost text-sm font-medium underline-offset-4 hover:underline"
				href="#features"
			>
				Features
			</a>
			<a
				class="btn btn-ghost text-sm font-medium underline-offset-4 hover:underline"
				href="#pricing"
			>
				Pricing
			</a>
			<a
				class="btn btn-ghost text-sm font-medium underline-offset-4 hover:underline"
				href="#contact"
			>
				Contact
			</a>

			<AppThemeSwitcher />

			<button class="btn-small btn btn-outline btn-primary">Login</button>
		</nav>
	</div>
</header>
