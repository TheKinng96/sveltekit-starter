<script>
	import { invalidateAll } from '$app/navigation'

	const handleLogout = async () => {
		const response = await fetch('/logout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (response.status === 200) {
			invalidateAll()
		}
	}
</script>

Dashboard

<button onclick={handleLogout} class="btn btn-outline">Logout</button>
