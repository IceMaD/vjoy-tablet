<script>
    import Client from "../utils/Client";
    import { debug, theme } from "../stores";

    export let label = '';
    $: upperLabel = label.toUpperCase();
    export let color = $theme.lightgrey;
    $: bgColor = `${color}22`;
    $: activeBgColor = `${color}66`;
    export let number;

    const callback = (number, state) => () => Client.post("vjoy", { number, state })
</script>

<button 
    style="--color: {color}; --bgColor: {bgColor}; --activeBgColor: {activeBgColor}"
    on:mousedown={callback(number, 1)}
    on:touchstart={callback(number, 1)}
    on:mouseup={callback(number, 0)}
    on:touchend={callback(number, 0)}
>
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
