<script context="module">
    export async function preload() {
        const mapping = await this.fetch(`mapping.json`);

        return {
            mapping: await mapping.json(),
        };
    }
</script>

<script>
    import { theme } from "../stores";

    import Panel from "../components/Panel.svelte";
    import Button from "../components/Button.svelte";

    export let mapping;
</script>

<Panel label="PIP" color={$theme.lightgrey} direction="vertical">
    <Button label="Lag" number={mapping.combat.pip.lag} />
    <Button label="Lead" number={mapping.combat.pip.lead} />
</Panel>
<Panel label="Pins" color={$theme.lightgrey}>
    {#each [1, 2, 3] as pin}
        <Panel
            label={pin.toString()}
            color={$theme.lightgrey}
            direction="vertical"
        >
            <Button label="Pin" number={mapping.combat.pin[pin - 1].pin} />
            <Button label="Lock" number={mapping.combat.pin[pin - 1].lock} />
            <Button
                label="Release"
                number={mapping.combat.pin[pin - 1].release}
            />
        </Panel>
    {/each}
</Panel>

<Panel label="Missile" color={$theme.lightgrey} direction="vertical">
    <Button label="Engage mode" number={mapping.combat.missile.mode} />
    <Button
        label="Fire"
        number={mapping.combat.missile.mode}
        color={$theme.red}
    />

    <Panel label="Type" color={$theme.lightgrey}>
        <Button label="Previous" number={mapping.combat.missile.type.previous} />
        <Button label="Next" number={mapping.combat.missile.type.next} />
    </Panel>

    <Panel label="Armed" color={$theme.lightgrey}>
        <Button label="Increase" number={mapping.combat.missile.type.increase} />
        <Button label="Decrease" number={mapping.combat.missile.type.decrease} />
    </Panel>
</Panel>

<Panel label="Turret" color={$theme.lightgrey} direction="vertical">
    <Button label="Staggering" number={mapping.combat.turret.staggering} />
    <Button label="Gyro" number={mapping.combat.turret.gyro} />
</Panel>
