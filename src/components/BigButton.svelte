<script>
    import { vjoyPress } from "../actions";
    import { debug, theme } from "../stores";

    export let label = "";
    export let duration = 1;
    $: upperLabel = label.toUpperCase();
    export let color = $theme.lightgrey;
    $: bgColor = `${color}22`;
    $: activeBgColor = `${color}66`;
    export let number;
</script>

<div class="container">
    <!-- ontouchstart="" is a dirty fix. See https://stackoverflow.com/a/41136194 -->
    <button
        style="
        --color: {color};
        --bgColor: {bgColor};
        --activeBgColor: {activeBgColor};
        --duration: {duration}s;
    "
        ontouchstart=""
        use:vjoyPress={{ number, duration }}
    >
        <span class="loader" />
        <span class="label">
            {upperLabel}
            {#if $debug}
                ({number})
            {/if}
        </span>
    </button>
</div>

<style>
    .container {
        align-self: center;
        justify-self: center;
    }
    button {
        aspect-ratio: 1;
        user-select: none;
        border-radius: 100%;
        border: none;
        text-transform: uppercase;
        color: inherit;
        background-color: var(--bgColor);
        box-shadow: inset 0 0 0 1px var(--color);
        padding: 1rem;
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: pre-line;
    }

    .loader {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: 50% 50%;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-color: var(--activeBgColor);
        transform: scale(0%);
        z-index: 1;
    }

    .label {
        z-index: 2;
        position: relative;
    }

    button:active .loader {
        transition: var(--duration) cubic-bezier(0,.8,1,0);
        transform: scale(100%);
    }
</style>
