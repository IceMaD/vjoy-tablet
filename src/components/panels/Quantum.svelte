<script>
    import { mapping } from "../../stores";
    import { Button, Panel } from "../../components";
</script>

<Panel label="Quantum" direction="horizontal">
    <Button label="Spool" number={$mapping.quantum.mode} />
    <Button label="Engage" number={$mapping.quantum.travel} />
</Panel>