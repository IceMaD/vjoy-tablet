<script>
    import { mapping, theme } from "../../stores";
    import { Button, Panel } from "../../components";

    export let grow = false;
</script>

<Panel label="Flight systems" {grow}>
    <Panel label="VTOL" direction="vertical">
        <Button label="On" color={$theme.cyan} number={$mapping.system.vtol.on} />
        <Button label="Off" color={$theme.orange} number={$mapping.system.vtol.off} />
    </Panel>
    <Panel label="G-safe" direction="vertical">
        <Button label="On" color={$theme.cyan} number={$mapping.system.gsafe.on} />
        <Button label="Off" color={$theme.orange} number={$mapping.system.gsafe.off} />
    </Panel>
    <Panel label="ESP" direction="vertical">
        <Button label="On" color={$theme.cyan} number={$mapping.system.esp.on} />
        <Button label="Off" color={$theme.orange} number={$mapping.system.esp.off} />
    </Panel>
    <Panel label="Coupled" direction="vertical">
        <Button label="On" color={$theme.cyan} number={$mapping.system.coupled.on} />
        <Button label="Off" color={$theme.orange} number={$mapping.system.coupled.off} />
    </Panel>
    <Panel label="Poximity assist" direction="vertical">
        <Button label="On" color={$theme.cyan} number={$mapping.system.proximityAssist.on} />
        <Button label="Off" color={$theme.orange} number={$mapping.system.proximityAssist.off} />
    </Panel>
    <Panel label="Cruise control" direction="vertical">
        <Button label="On" color={$theme.cyan} number={$mapping.system.cruiseControl.on} />
        <Button label="Off" color={$theme.orange} number={$mapping.system.cruiseControl.off} />
    </Panel>
</Panel>