<script>
    import { mapping } from "../../stores";
    import { Button, Panel } from "..";
</script>

<Panel label="PIP" direction="vertical">
    <Button label="Lag" number={$mapping.combat.pip.lag} />
    <Button label="Lead" number={$mapping.combat.pip.lead} />
</Panel>