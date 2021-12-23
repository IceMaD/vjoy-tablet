<script>
    import { mapping, theme, powerRepartiton } from "../../stores";
    import { Button, Panel, PowerTriangle } from "../../components";

    export let grow = false;
</script>

<Panel label="Power Triangle" {grow}>
    <PowerTriangle />
    <Button
        label="Reset"
        color={$theme.lightgrey}
        number={$mapping.power.triangle.reset}
        on:click={() => powerRepartiton.reset()}
    />
</Panel>
