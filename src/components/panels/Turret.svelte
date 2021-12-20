<script>
    import { mapping } from "../../stores";
    import { Button, Panel } from "../../components";
</script>

<Panel label="Turret" direction="vertical">
    <Button label="Staggering" number={$mapping.combat.turret.staggering} />
    <Button label="Gyro" number={$mapping.combat.turret.gyro} />
</Panel>