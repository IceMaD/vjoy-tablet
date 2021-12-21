<script>
    import { mapping, theme } from "../../stores";
    import { Button, Panel } from "../../components";

    export let grow = false;
</script>

<Panel label="Comms" direction="vertical" {grow}>
    <Button label="Hail" color={$theme.blue} number={$mapping.communications.hail} />
</Panel>