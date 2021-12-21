<script context="module">
	export async function preload() {
		const mapping = await this.fetch(`mapping.json`);

		return {
			mapping: await mapping.json(),
		};
	}
</script>

<script>
	import Nav from "../components/Nav.svelte";
	import { mapping as mappingStore } from "../stores";

	export let segment;
	export let mapping;

	mappingStore.set(mapping);
</script>

<main>
	<div class="nav">
		<Nav {segment} />
	</div>
	<div class="container">
		<slot {mapping} />
	</div>
</main>

<style>
	main {
		height: inherit;
		width: inherit;
		display: flex;
		flex-direction: column;
	}

	.container {
		padding: 2rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		flex-grow: 1;
	}
</style>
