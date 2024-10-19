import type { Snippet } from 'svelte'

export interface InputProps {
	value: string
	name: string // superform name
	label?: string
	type: string
	placeholder?: string
	errors?: string[]
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	constraints?: Record<string, any>
	children?: Snippet
	class?: string
}
