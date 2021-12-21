<script>
    import { mapping } from "../../stores";
    import { Button, Panel, Spreaded } from "../../components";

    export let grow = false;
</script>

<Panel label="Scanner" {grow}>
    <Panel label="Angle">
        <Button label="Increase" number={$mapping.scanner.angle.increase} />
        <Button label="Decrease" number={$mapping.scanner.angle.decrease} />
    </Panel>
    <Spreaded>
        <Button label="Activate" number={$mapping.scanner.mode} />
        <Button label="Ping" number={$mapping.scanner.ping} />
    </Spreaded>
</Panel>
