<script>
    export let icon;
</script>

<span class="icon">
    <svelte:component this={icon} />
</span>

<style>
    .icon {
        display: inline-flex;
        vertical-align: middle;
        color: inherit;
        width: 1rem;
        height: 1rem;
        margin-top: -0.25rem;
    }
</style>
