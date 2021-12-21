<script>
    import { mapping } from "../../stores";
    import { Button, Panel } from "../../components";

    export let grow = false;
</script>

<Panel label="Quantum" direction="vertical" {grow}>
    <Button label="Spool" number={$mapping.quantum.mode} />
    <Button label="Engage" number={$mapping.quantum.travel} />
</Panel>