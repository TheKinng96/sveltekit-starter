import type { SvelteComponent } from 'svelte'

// more icons: https://www.untitledui.com/free-icons
import Moon_02 from './moon-02.svelte'
import Sun from './sun.svelte'
import Menu_01 from './menu-01.svelte'
import Colorme_01 from './colorme-01.svelte'
import Colorme_02 from './colorme-02.svelte'

export type Icon = SvelteComponent

export const AppIcon = {
	Moon_02,
	Sun,
	Menu_01,
	Colorme_01,
	Colorme_02,
}
