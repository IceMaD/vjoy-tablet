<script>
    import { mapping } from "../../stores";
    import { Button, Panel } from "../../components";

    export let grow = false;
</script>

<Panel label="Turret" direction="vertical" {grow}>
    <Button label="Staggering" number={$mapping.combat.turret.staggering} />
    <Button label="Gyro" number={$mapping.combat.turret.gyro} />
</Panel>