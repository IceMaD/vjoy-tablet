<script>
    export let direction = 'horizontal';
    $: flexDirection = 'vertical' === direction ? 'column' : 'row';
    export let spacing = 1;
    $: gap = `${spacing}rem`;
    $: alignement = 'vertical' === direction ? 'stretch' : 'center';
</script>

<div style="--flex-direction: {flexDirection}; --gap: {gap}; --alignement: {alignement}">
    <slot />
</div>

<style>
    div {
        display: flex;
        flex-direction: var(--flex-direction);
        gap: var(--gap);
        align-items: var(--alignement);
    }
</style>
