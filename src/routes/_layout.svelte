<script context="module">
	export async function preload() {
		const mapping = await this.fetch(`mapping.json`);

		return {
			mapping: await mapping.json(),
		};
	}
</script>

<script>
	import Fullscreen from "svelte-fullscreen";
	import Nav from "../components/Nav.svelte";
	import { mapping as mappingStore } from "../stores";

	export let segment;
	export let mapping;

	mappingStore.set(mapping);
</script>

<Fullscreen let:onToggle>
	<main>
		<div class="nav">
			<Nav {segment} toggleFullScreen={onToggle} />
		</div>
		<div class="container">
			<slot {mapping} />
		</div>
	</main>
</Fullscreen>

<style>
	main {
		height: inherit;
		width: inherit;
		display: flex;
		flex-direction: column;
		background: #1e1e1e
			url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAG0lEQVQYV2P8//+/FCMj4zMGJMCIzIGxKRQEAJgPBAbJqUVTAAAAAElFTkSuQmCC)
			repeat;
		font-family: "Oxanium", sans-serif;
		line-height: 1.5;
		display: flex;
		height: 100vh;
		width: 100vw;
		overflow-x: hidden;
		overflow-y: auto;
		font-weight: 500;
		color: #fff;
	}

	.container,
	.nav {
		display: flex;
	}

	.container {
		padding: 2rem;
		flex-wrap: wrap;
		flex-grow: 1;
		align-items: center;
		justify-content: center;
	}
</style>
