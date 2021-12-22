<script>
	import Icon from "svelte-fa";
	import {
		faCogs,
		faRocket,
		faUserFriends,
		faQuestion,
		faSkull,
		faExpand,
		faCompress,
	} from "@fortawesome/free-solid-svg-icons";
	import { theme, debug } from "../stores";

	export let segment;
	export let toggleFullScreen;

	let isFullScreen = false;

	let fullscreenChange = (event) => {
		let window = event.path[event.path.length - 1];
		let document = window.document;
		isFullScreen =
			document.fullScreen ||
			document.mozFullScreen ||
			document.webkitIsFullScreen;
	};

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

<svelte:window on:fullscreenchange={fullscreenChange} />

<nav>
	<ul>
		<li class="spacer" />
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
		<li class="spacer" />
		<li>
			<button
				on:click={() => {
					let response = toggleFullScreen();

					console.log(response);
				}}
			>
				<Icon
					class="icon"
					icon={isFullScreen ? faCompress : faExpand}
				/>
			</button>
		</li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		flex-grow: 1;
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		flex-grow: 1;
		justify-content: center;
	}

	li {
		list-style: none;
	}

	.spacer {
		flex-grow: 1;
	}

	a,
	button {
		border: none;
		color: inherit;
		text-decoration: none;
		padding: 0.5em 1em;
		display: block;
		background-color: var(--bgColor);
		white-space: nowrap;
		cursor: pointer;
	}

	[aria-current="page"] {
		background-color: var(--activeBgColor);
		box-shadow: inset 0px -3px 0px 0px var(--activeBarColor);
	}
</style>
