<script>
	import Fa from "svelte-fa";
	import {
		faCogs,
		faRocket,
		faUserFriends,
		faQuestion,
	} from "@fortawesome/free-solid-svg-icons";
	import { debug } from "../stores";

	export let segment;

	let links = [
		// {route: 'power', label: 'Power', icon: faBolt},
		{ route: "system", label: "System", icon: faCogs },
		{ route: "combat", label: "Combat", icon: faRocket },
		{ route: "comms", label: "Comms", icon: faUserFriends },
		{ route: "mapping", label: "Mapping", icon: faQuestion, debug: true },
	];
</script>

<nav>
	<ul>
		{#each links as link}
			{#if !link.debug || $debug}
				<li>
					<a
						aria-current={segment === link.route
							? "page"
							: undefined}
						href={link.route}
					>
						<Fa icon={link.icon} />
						{link.label}
					</a>
				</li>
			{/if}
		{/each}
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
