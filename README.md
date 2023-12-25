# Local Storage Stores in Svelte

This repo provides a general function `local_store` in `src/lib/stores.ts` (see also below) that generates stores that will be synced with the browser's localStorage. This can be used to persist user preferences easily. The Svelte app demonstrates this with a couple of examples.

https://localstoragestore.netlify.app

## Code

```typescript
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
```

## SvelteKit considerations

For SvelteKit applications, make sure to always check if `browser=true` before using the localStorage, since otherwise you will run into an error: the server has no `localStorage` global.
