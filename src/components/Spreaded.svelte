<script>
    export let alignment = null;
    export let direction = "horizontal";
    $: flexDirection = "vertical" === direction ? "column" : "row";
    export let spacing = 1;
    $: gap = `${spacing}rem`;
    $: alignItems = alignment
        ? alignment
        : "vertical" === direction
        ? "stretch"
        : "center";
    export let grow = false;
    $: panelGrow = grow ? 1 : 0;
</script>

<div
    style="
    --flex-direction: {flexDirection};
    --gap: {gap};
    --alignItems: {alignItems};
     --panelGrow: {panelGrow};
"
>
    <slot />
</div>

<style>
    div {
        display: flex;
        flex-direction: var(--flex-direction);
        gap: var(--gap);
        align-items: var(--alignItems);
        justify-content: var(--alignItems);
        flex-grow: var(--panelGrow);
    }
</style>
