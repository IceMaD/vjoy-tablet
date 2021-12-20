<script context="module">
    export async function preload() {
        const mapping = await this.fetch(`mapping.json`);

        return {
            mapping: await mapping.json(),
        };
    }
</script>

<script>
    import Button from "../components/Button.svelte";
    import Panel from "../components/Panel.svelte";
    import { theme } from "../stores";

    export let mapping;
</script>

<Panel label="Ignition" color={$theme.lightgrey}>
    <Panel label="Shields" direction="vertical">
        <Button label="On" number={mapping.power.switch.shields.on} />
        <Button label="Off" number={mapping.power.switch.shields.off} />
    </Panel>
    <Panel label="Thrusters" direction="vertical">
        <Button label="On" number={mapping.power.switch.thrusters.on} />
        <Button label="Off" number={mapping.power.switch.thrusters.off} />
    </Panel>
    <Panel label="Weapons" direction="vertical">
        <Button label="On" number={mapping.power.switch.weapons.on} />
        <Button label="Off" number={mapping.power.switch.weapons.off} />
    </Panel>
    <Panel label="All" direction="vertical">
        <Button label="On" number={mapping.power.switch.all.on} />
        <Button label="Off" number={mapping.power.switch.all.off} />
    </Panel>
    <Panel label="Flight ready" direction="vertical">
        <Button label="Toggle" number={mapping.power.flightReady} />
    </Panel>
</Panel>
<Panel label="Power Triangle" color={$theme.lightgrey}>
    <Panel label="Shields" direction="vertical">
        <Button label="Max" number={mapping.power.triangle.shields.max} />
        <Button
            label="+"
            number={mapping.power.triangle.shields.increase}
        />
        <Button
            label="-"
            number={mapping.power.triangle.shields.decrease}
        />
    </Panel>
    <Panel label="Thrusters" direction="vertical">
        <Button label="Max" number={mapping.power.triangle.thrusters.max} />
        <Button
            label="+"
            number={mapping.power.triangle.thrusters.increase}
        />
        <Button
            label="-"
            number={mapping.power.triangle.thrusters.decrease}
        />
    </Panel>
    <Panel label="Weapons" direction="vertical">
        <Button label="Max" number={mapping.power.triangle.weapons.max} />
        <Button
            label="+"
            number={mapping.power.triangle.weapons.increase}
        />
        <Button
            label="-"
            number={mapping.power.triangle.weapons.decrease}
        />
    </Panel>
</Panel>
