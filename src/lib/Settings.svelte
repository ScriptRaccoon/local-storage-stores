<script lang="ts">
	import { COLOR_THEMES } from "./config"
	import { color_theme, difficulty, rounded } from "./stores"
</script>

<section class:rounded={$rounded}>
	<h2>&#129683; Settings</h2>

	<div>
		<label for="theme">Theme</label>
		<select class="select" id="theme" bind:value={$color_theme}>
			{#each COLOR_THEMES as theme}
				<option value={theme}>{theme}</option>
			{/each}
		</select>
	</div>

	<div>
		<label for="rounded">Rounded design</label>
		<input type="checkbox" bind:checked={$rounded} />
	</div>

	<div>
		<label for="difficulty">Difficulty</label>
		<input
			class="input"
			type="number"
			bind:value={$difficulty}
			min="0"
			max="10"
		/>
	</div>
</section>

<style>
	section {
		margin-block: 2rem;
		padding: 1.25rem;
		background-color: var(--card-color);
		border-radius: calc(4 * var(--radius));
	}

	div {
		margin-top: 1rem;
	}

	label {
		margin-right: 0.25rem;
	}

	input[type="number"] {
		width: 4rem;
	}
</style>
