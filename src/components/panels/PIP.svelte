<script>
    import { mapping } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
</script>

<Panel label="PIP" direction="vertical">
    <Button label="Lag" number={$mapping.combat.pip.lag} />
    <Button label="Lead" number={$mapping.combat.pip.lead} />
</Panel>