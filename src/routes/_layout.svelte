
<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
	export let mapping;
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
