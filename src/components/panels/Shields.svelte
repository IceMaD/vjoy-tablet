<script>
    import { mapping, theme } from "../../stores";
    import { Button, Panel, ShieldsFocus } from "../../components";
</script>

<Panel label="Shields" direction="vertical">
    <ShieldsFocus />
    <Button
        label="Reset"
        color={$theme.lightgrey}
        number={$mapping.combat.shieldFocus.reset}
    />
</Panel>
