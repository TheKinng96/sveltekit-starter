export type Message = {
	status: 'error' | 'success'
	text?: {
		title: string
		description?: string
	}
}
