<script lang="ts">
	import type { NavbarItemProps } from '../landingPage.types'

	let { name, href, cb }: NavbarItemProps = $props()
</script>

<a
	onclick={() => cb?.()}
	class="btn btn-ghost text-sm font-medium underline-offset-4 hover:underline"
	{href}
>
	{name}
</a>
