<script>
    import { mapping } from "../../stores";
    import { Button, Panel, ShieldsFocus } from "../../components";
</script>

<Panel label="Shields" direction="vertical">
    <ShieldsFocus />
    <Button label="Reset" number={$mapping.combat.shieldFocus.reset} />
</Panel>
