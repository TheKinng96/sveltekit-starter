<script lang="ts">
	import { AppIcon } from '$lib/components/base/icons'
</script>

<div class="tooltip tooltip-bottom" data-tip="Toggle theme">
	<label class="btn-small btn btn-ghost swap swap-rotate">
		<input type="checkbox" class="theme-controller" value="night" />
		<AppIcon.Sun class="swap-on size-5 fill-current" />
		<AppIcon.Moon_02 class="swap-off size-5 fill-current" />
	</label>
</div>
