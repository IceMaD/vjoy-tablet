<script>
    import { mapping } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
</script>

<Panel label="Scanner" direction="vertical">
    <Button label="Activate" number={$mapping.scanner.mode} />
    <Button label="Ping" number={$mapping.scanner.ping} />
    <Panel label="Angle" direction="vertical">
        <Button label="Increase" number={$mapping.scanner.angle.increase} />
        <Button label="Decrease" number={$mapping.scanner.angle.decrease} />
    </Panel>
</Panel>