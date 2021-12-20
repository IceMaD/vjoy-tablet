<script>
    import { mapping } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
</script>

<Panel label="Turret" direction="vertical">
    <Button label="Staggering" number={$mapping.combat.turret.staggering} />
    <Button label="Gyro" number={$mapping.combat.turret.gyro} />
</Panel>