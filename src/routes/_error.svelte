<script>
    import Spreaded from "../components/Spreaded.svelte";

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0;
		line-height: 1;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<Spreaded direction="vertical" spacing=0>
	<h1>{status}</h1>
	<p>{error.message}</p>
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</Spreaded>
