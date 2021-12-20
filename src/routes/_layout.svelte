<script context="module">
    export async function preload() {
        const mapping = await this.fetch(`mapping.json`);

        return {
            mapping: await mapping.json(),
        };
    }
</script>

<script>
	import Nav from '../components/Nav.svelte';
	import { mapping as mappingStore } from '../stores';

	export let segment;
	export let mapping;

	mappingStore.set(mapping)
</script>

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
		align-items: flex-start;
		flex-wrap: wrap;
	}
</style>

<main>
	<div class="nav">
		<Nav {segment}/>
	</div>
	<div class="container">
		<slot mapping={mapping}></slot>
	</div>
</main>
