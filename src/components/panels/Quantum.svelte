<script>
    import { mapping, theme } from "../../stores";
    import { Button, BigButton, Panel } from "../../components";

    export let grow = false;
</script>

<Panel label="Quantum" direction="vertical" {grow}>
    <Button label="Spool" number={$mapping.quantum.mode} />
    <BigButton
        label="Engage
        Quantum"
        number={$mapping.quantum.travel}
        color={$theme.blue}
        duration={2}
    />
</Panel>
