<script lang="ts">
	import { AppIcon } from '$lib/components/base/icons'
	import { AppThemeSwitcher } from '$lib/components/base/themeSwitcher'
	import NavbarItem from './NavbarItem.svelte'
	import type { NavbarItemProps } from './NavbarItem.svelte'

	const navItems: NavbarItemProps[] = [
		{
			href: '/#features',
			name: 'Features',
		},
		{
			href: '/#pricing',
			name: 'Pricing',
		},
		{
			href: '/#contact',
			name: 'Contact',
		},
	]

	let drawerState = $state(false)
</script>

<div class="drawer">
	<input id="navbar-drawer" type="checkbox" class="drawer-toggle" bind:checked={drawerState} />

	<div class="drawer-content flex flex-col">
		<!-- Burger -->
		<div class="navbar sticky top-0 z-50 !h-14 w-full border-b backdrop-blur">
			<div class="flex-none md:hidden">
				<label for="navbar-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<AppIcon.Menu_01 class="size-5" />
				</label>
			</div>

			<div class="container mx-auto max-w-[60rem]">
				<a href="/" class="btn btn-ghost flex items-center space-x-2">
					<span class="text-xl font-bold">Logo</span>
				</a>

				<div class="hidden flex-1 justify-between md:flex">
					<ul class="menu menu-horizontal">
						{#each navItems as item}
							{@const { name, href } = item}
							<li>
								<NavbarItem {name} {href} />
							</li>
						{/each}
					</ul>

					<div class="ml-auto flex items-center gap-2 sm:gap-6">
						<AppThemeSwitcher tooltip="Toggle Theme" />

						<a href="/login" class="btn-small btn btn-outline btn-primary">Login</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile drawer -->
	<div class="drawer-side z-50">
		<label for="navbar-drawer" aria-label="close sidebar" class="drawer-overlay"></label>

		<div class="flex h-full flex-col justify-between">
			<ul class="menu flex min-h-full w-80 flex-col gap-4 bg-white p-4 dark:bg-slate-900">
				{#each navItems as item}
					{@const { name, href } = item}
					<li>
						<NavbarItem {name} {href} cb={() => (drawerState = false)} />
					</li>
				{/each}
				<li class="flex-1 bg-inherit"></li>

				<li class="flex gap-2">
					<AppThemeSwitcher isToggle />
				</li>

				<li>
					<a href="/login" class="btn-small btn btn-outline btn-primary">Login</a>
				</li>
			</ul>
		</div>
	</div>
</div>
