<script>
    import { faBolt } from "@fortawesome/free-solid-svg-icons";
    import { mapping } from "../../stores";
    import { Button, Panel } from "../../components";
</script>

<Panel label="Alimentation">
    <Panel label="Shields" direction="vertical">
        <Button label="On" number={$mapping.power.switch.shields.on} />
        <Button label="Off" number={$mapping.power.switch.shields.off} />
    </Panel>
    <Panel label="Thrusters" direction="vertical">
        <Button label="On" number={$mapping.power.switch.thrusters.on} />
        <Button label="Off" number={$mapping.power.switch.thrusters.off} />
    </Panel>
    <Panel label="Weapons" direction="vertical">
        <Button label="On" number={$mapping.power.switch.weapons.on} />
        <Button label="Off" number={$mapping.power.switch.weapons.off} />
    </Panel>
    <Panel label="All" direction="vertical">
        <Button label="On" number={$mapping.power.switch.all.on} />
        <Button label="Off" number={$mapping.power.switch.all.off} />
    </Panel>
    <Panel label="Flight ready" direction="vertical">
        <Button label="Toggle" number={$mapping.power.flightReady} />
    </Panel>
</Panel>
