<script>
    import Spreaded from "./Spreaded.svelte";
    import { theme } from "../stores";

    export let label = "";
    $: upperLabel = label.toUpperCase();
    export let color = $theme.lightgrey;
    export let direction = "horizontal";
</script>

<div class="panel" style="--color: {color}">
    <div class="label">
        {upperLabel}
    </div>
    <Spreaded {direction}>
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
</style>
