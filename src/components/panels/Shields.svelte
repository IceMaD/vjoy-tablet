<script>
    import { mapping, theme } from "../../stores";
    import { Button, Panel, ShieldsFocus } from "../../components";

    export let grow = false;
</script>

<Panel label="Shields focus" direction="vertical" {grow}>
    <ShieldsFocus />
    <Button
        label="Reset"
        color={$theme.lightgrey}
        number={$mapping.combat.shieldFocus.reset}
    />
</Panel>
