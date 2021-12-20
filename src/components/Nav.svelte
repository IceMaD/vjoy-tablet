<script>
	import GiMissileSwarm from "svelte-icons/gi/GiMissileSwarm.svelte";
	import Icon from "./Icon.svelte";
	import { debug } from "../stores";

	export let segment;
</script>

<nav>
	<ul>
		<li>
			<a
				aria-current={segment === "power" ? "page" : undefined}
				href="power"
			>
				POWER
			</a>
		</li>
		<li>
			<a
				aria-current={segment === "system" ? "page" : undefined}
				href="system"
			>
				SYSTEM
			</a>
		</li>
		<li>
			<a
				aria-current={segment === "combat" ? "page" : undefined}
				href="combat"
			>
				<Icon icon={GiMissileSwarm}/>
				COMBAT
			</a>
		</li>
		<li>
			<a
				aria-current={segment === "comms" ? "page" : undefined}
				href="comms"
			>
				COMMS
			</a>
		</li>
		<!-- {#if $debug} -->
		<li>
			<a
				aria-current={segment === "mapping" ? "page" : undefined}
				href="mapping"
			>
				MAPPING
			</a>
		</li>
		<!-- {/if} -->
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
	}

	li {
		list-style: none;
	}

	a {
		color: inherit;
		text-decoration: none;
		padding: 0.5em 1em;
		display: block;
		background-color: rgba(255, 255, 255, 0);
		box-shadow: inset 0px 0 0px 0px cyan;
	}

	[aria-current="page"] {
		background-color: rgba(255, 255, 255, 0.2);
		box-shadow: inset 0px -2px 0px 0px cyan;
	}
</style>
