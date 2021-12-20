<script>
    import { theme } from "../stores";
    import Spreaded from "./spreaded.svelte";

    export let label = "";
    $: upperLabel = label.toUpperCase();
    export let color = $theme.lightgrey;
    export let direction = 'horizontal';
    export let icon = null;
</script>

<div class="panel" style="--color: {color}">
    <div class="label">
        {#if icon}
            <span class="icon">
                <svelte:component this={icon}/>
            </span>
        {/if}
        {upperLabel}
    </div>
    <Spreaded direction={direction}>
        <slot />
    </Spreaded>
</div>

<style>
    .panel {
        padding: 1rem;
        box-shadow: inset 0 0 0 1px var(--color);
        margin-top: 0.5rem;
        gap: 1rem;
        display: inline-flex;
        flex-direction: column;
    }

    .label {
        align-self: flex-start;
        width: auto;
        line-height: 1rem;
        background: #1e1e1e
            url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAG0lEQVQYV2P8//+/FCMj4zMGJMCIzIGxKRQEAJgPBAbJqUVTAAAAAElFTkSuQmCC)
            repeat;
        padding: 0;
        margin: -1.5rem 0 -0.25rem -0.25rem;
        padding: 0 0.25em;
    }

    .icon {
        display: inline-flex;
        vertical-align: middle;
        color: inherit;
        width: 1rem;
        height: 1rem;
        margin-top: -0.25rem;
    }
</style>
