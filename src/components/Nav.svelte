<script>
	import Icon from "svelte-fa";
	import {
		faCogs,
		faRocket,
		faUserFriends,
		faQuestion,
		faSkull,
	} from "@fortawesome/free-solid-svg-icons";
	import { theme, debug } from "../stores";

	export let segment;

	let links = [
		{ route: "system", label: "System", icon: faCogs },
		{ route: "combat", label: "Combat", icon: faRocket },
		{ route: "comms", label: "Comms", icon: faUserFriends },
		{
			route: "dangerZone",
			label: "Danger zone",
			icon: faSkull,
			color: $theme.red,
		},
		{ route: "mapping", label: "Mapping", icon: faQuestion, debug: true },
	];
</script>

<nav>
	<ul>
		{#each links as link}
			{#if !link.debug || $debug}
				<li
					style="
							--bgColor: {link.color ? `${link.color}33` : 'transparent'};
							--activeBgColor: {link.color ? `${link.color}66` : `${$theme.white}22`};
							--activeBarColor: {link.color ?? $theme.cyan};
						"
				>
					<a
						aria-current={segment === link.route
							? "page"
							: undefined}
						href={link.route}
					>
						<Icon class="icon" icon={link.icon} />
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
		background-color: var(--bgColor);
	}

	[aria-current="page"] {
		background-color: var(--activeBgColor);
		box-shadow: inset 0px -3px 0px 0px var(--activeBarColor);
	}
</style>
