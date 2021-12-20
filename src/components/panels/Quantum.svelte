<script>
    import { mapping } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
</script>

<Panel label="Quantum" direction="vertical">
    <Button label="Spool" number={$mapping.quantum.mode} />
    <Button label="Engage" number={$mapping.quantum.travel} />
</Panel>