<script>
    import Fa from "svelte-fa";
	import { faCogs, faBolt, faRocket, faUserFriends, faQuestion } from '@fortawesome/free-solid-svg-icons'

	export let segment;

	let links = [
		{route: 'power', label: 'Power', icon: faBolt},
		{route: 'system', label: 'System', icon: faCogs},
		{route: 'combat', label: 'Combat', icon: faRocket},
		{route: 'comms', label: 'Comms', icon: faUserFriends},
		{route: 'mapping', label: 'Mapping', icon: faQuestion},
	] 
</script>

<nav>
	<ul>
		{#each links as link}
			<li>
				<a
					aria-current={segment === link.route ? "page" : undefined}
					href={link.route}
				>
					<Fa icon={link.icon}/>
					{link.label}
				</a>
			</li>
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
