import { writable, type Writable } from "svelte/store"
import { DEFAULT_THEME } from "./config"

export const show_settings = writable<boolean>(false)

function local_store<T>(
	key: string,
	default_value: T,
	update: (value: T) => void = () => {}
): Writable<T> {
	let initial_value: T
	try {
		const has_stored_value = localStorage.getItem(key) !== null
		initial_value = has_stored_value
			? JSON.parse(localStorage.getItem(key)!)
			: default_value
	} catch (_) {
		initial_value = default_value
	}

	const store = writable<T>(initial_value)

	store.subscribe((value: T) => {
		localStorage.setItem(key, JSON.stringify(value))
		update(value)
	})

	return store
}

export const color_theme = local_store<string>(
	"color_theme",
	DEFAULT_THEME,
	(theme) => document.body.setAttribute("data-theme", theme)
)

export const rounded = local_store<boolean>("rounded", true, (is_rounded) => {
	document.body.setAttribute("data-rounded", String(is_rounded))
})

export const difficulty = local_store<number>("difficulty", 0)
