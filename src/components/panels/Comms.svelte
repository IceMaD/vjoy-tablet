<script>
    import { mapping } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
</script>

<Panel label="Comms" direction="vertical">
    <Button label="Hail" number={$mapping.communications.hail} />
</Panel>