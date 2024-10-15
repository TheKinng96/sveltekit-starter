<script module>
	export interface NavbarItemProps {
		name: string
		href: string
		cb?: () => void
	}
</script>

<script lang="ts">
	let { name, href, cb }: NavbarItemProps = $props()
</script>

<a
	onclick={() => cb?.()}
	class="btn btn-ghost text-sm font-medium underline-offset-4 hover:underline"
	{href}
>
	{name}
</a>
