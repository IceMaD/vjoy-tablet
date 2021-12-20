<script>
    import { mapping } from "../../stores";
    import { Button, Panel } from "../../components";
</script>

<Panel label="Comms" direction="vertical">
    <Button label="Hail" number={$mapping.communications.hail} />
</Panel>