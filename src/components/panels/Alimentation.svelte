<script>
    import { mapping, theme } from "../../stores";
    import { Button, Panel } from "../../components";
</script>

<Panel label="Alimentation">
    <Panel label="Shields" direction="vertical">
        <Button
            label="On"
            color={$theme.cyan}
            number={$mapping.power.switch.shields.on}
        />
        <Button
            label="Off"
            color={$theme.orange}
            number={$mapping.power.switch.shields.off}
        />
    </Panel>
    <Panel label="Thrusters" direction="vertical">
        <Button
            label="On"
            color={$theme.cyan}
            number={$mapping.power.switch.thrusters.on}
        />
        <Button
            label="Off"
            color={$theme.orange}
            number={$mapping.power.switch.thrusters.off}
        />
    </Panel>
    <Panel label="Weapons" direction="vertical">
        <Button
            label="On"
            color={$theme.cyan}
            number={$mapping.power.switch.weapons.on}
        />
        <Button
            label="Off"
            color={$theme.orange}
            number={$mapping.power.switch.weapons.off}
        />
    </Panel>
    <Panel label="All" direction="vertical">
        <Button
            label="On"
            color={$theme.cyan}
            number={$mapping.power.switch.all.on}
        />
        <Button
            label="Off"
            color={$theme.orange}
            number={$mapping.power.switch.all.off}
        />
    </Panel>
    <Panel label="Flight ready" direction="vertical">
        <Button label="Toggle" number={$mapping.power.flightReady} />
    </Panel>
</Panel>
