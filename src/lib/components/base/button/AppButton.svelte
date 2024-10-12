<script lang="ts">
	import type { Action } from 'svelte/action';
	export let action: Action;
</script>

<button use:action>
	<slot />
</button>
