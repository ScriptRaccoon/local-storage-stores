<script lang="ts">
	import Game from "./lib/Game.svelte"
	import Menu from "./lib/Menu.svelte"
	import Settings from "./lib/Settings.svelte"
	import { show_settings } from "./lib/stores"
</script>

<header>
	<h1>Local Storage Stores in Svelte</h1>
</header>

<main>
	<Menu />
	{#if $show_settings}
		<Settings />
	{/if}
	<Game />
</main>

<style>
	header {
		padding-block: 2rem;
		text-align: center;
	}
	main {
		width: min(95vw, var(--width));
		margin-inline: auto;
	}
</style>
