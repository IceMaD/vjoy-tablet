<script>
    import { createEventDispatcher } from "svelte";
    import Icon from "svelte-fa";
    import { vjoyPress } from "../actions";
    import { debug, theme } from "../stores";

    export let label = "";
    export let icon = null;
    $: upperLabel = label.toUpperCase();
    export let color = $theme.lightgrey;
    $: bgColor = `${color}22`;
    $: activeBgColor = `${color}66`;
    export let number;

    const dispatch = createEventDispatcher();

    export let x = 0.5;
    export let y = 0.3;
    let c = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    let rad = Math.asin(y / c);
    let deg = rad * (180 / Math.PI);
</script>

<button
    style="
        --color: {color};
        --bgColor: {bgColor};
        --activeBgColor: {activeBgColor};
        --x: {x}rem;
        --y: {y}rem;
        --rotate: -{deg}deg;
    "
    on:click={() => dispatch('click')}
    use:vjoyPress={{ number }}
>
    {#if icon}
        <Icon {icon} />
    {/if}
    {upperLabel}
    {#if $debug}
        ({number})
    {/if}
</button>

<style>
    button {
        --border: 1px;
        --path: var(--x) 0, 100% 0, 100% calc(100% - var(--y)),
            calc(100% - var(--x)) 100%, 0 100%, 0 var(--y);
        border: none;
        color: inherit;
        padding: 0.5rem 1rem;
        box-shadow: inset 0 0 0 var(--border) var(--color);
        cursor: pointer;
        justify-self: flex-end;
        background-color: var(--bgColor);
        clip-path: polygon(var(--path));
        position: relative;
    }

    button::before,
    button::after {
        content: "";
        position: absolute;
        background-color: var(--color);
        height: var(--border);
        width: calc(var(--x) + var(--y));
        transform: rotate(var(--rotate));
    }

    button::before {
        top: var(--y);
        left: 0;
        transform-origin: 0 0;
    }

    button::after {
        bottom: var(--y);
        right: 0;
        transform-origin: 100% 100%;
    }

    button:active {
        background: var(--activeBgColor);
    }
</style>
