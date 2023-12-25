<script lang="ts">
	import { show_settings } from "./stores"
</script>

<button class="button" on:click={() => ($show_settings = !$show_settings)}>
	&#x1F50D; Toggle settings
</button>
