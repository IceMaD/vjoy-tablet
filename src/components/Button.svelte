<script>
    import Icon from "svelte-fa";
	import { tap } from '@sveltejs/gestures';
    import VjoyClient from "../utils/VjoyClient";
    import { debug, theme } from "../stores";

    export let label = '';
    export let icon = null;
    $: upperLabel = label.toUpperCase();
    export let color = $theme.lightgrey;
    $: bgColor = `${color}22`;
    $: activeBgColor = `${color}66`;
    export let number;

    const callback = number => () => VjoyClient.press(number)
</script>

<button 
    style="--color: {color}; --bgColor: {bgColor}; --activeBgColor: {activeBgColor}"
    use:tap 
    on:mousedown={callback(number)}
    on:touchstart={callback(number)}>
    {#if icon}
        <Icon icon={icon}/>
    {/if}
    {upperLabel}
    {#if $debug}
        ({number})
    {/if}
</button>

<style>
    button {
        border: none;
        color: inherit;
        padding: 0.5rem;
        box-shadow: inset 0 0 0 1px var(--color);
        cursor: pointer;
        justify-self: flex-end;
        background: var(--bgColor);
    }

    button:active {
        background: var(--activeBgColor);
    }
</style>
