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
    import Spreaded from "../components/Spreaded.svelte";

    export let mapping;
</script>

<Panel label="PIP" direction="vertical">
    <Button label="Lag" number={mapping.combat.pip.lag} />
    <Button label="Lead" number={mapping.combat.pip.lead} />
</Panel>
<Panel label="Pins">
    {#each [1, 2, 3] as pin}
        <Panel label={pin.toString()} direction="vertical">
            <Button label="Pin" number={mapping.combat.pin[pin - 1].pin} />
            <Button label="Lock" number={mapping.combat.pin[pin - 1].lock} />
            <Button
                label="Release"
                number={mapping.combat.pin[pin - 1].release}
            />
        </Panel>
    {/each}
</Panel>

<Panel label="Missile" direction="vertical">
    <Button label="Engage mode" number={mapping.combat.missile.mode} />
    <Button
        label="Fire"
        number={mapping.combat.missile.mode}
        color={$theme.red}
    />

    <Panel label="Type">
        <Button
            label="Previous"
            number={mapping.combat.missile.type.previous}
        />
        <Button label="Next" number={mapping.combat.missile.type.next} />
    </Panel>

    <Panel label="Armed">
        <Button
            label="Decrease"
            number={mapping.combat.missile.type.decrease}
        />
        <Button
            label="Increase"
            number={mapping.combat.missile.type.increase}
        />
    </Panel>
</Panel>

<Panel label="Countermeasures" direction="vertical">
    <Panel label="Decoy" direction="vertical">
        <Spreaded>
            <Button
                label="Less"
                number={mapping.combat.countermeasures.decoy.decrease}
            />
            <Button
                label="More"
                number={mapping.combat.countermeasures.decoy.increase}
            />
        </Spreaded>
        <Button
            label="Launch"
            number={mapping.combat.countermeasures.decoy.launche}
        />
    </Panel>

    <Button
        label="Noise"
        number={mapping.combat.countermeasures.noise.launche}
    />
</Panel>

<Panel label="Shields" direction="vertical">
    <Button label="Left" number={mapping.combat.shieldFocus.left} />
    <Button label="Right" number={mapping.combat.shieldFocus.right} />
    <Button label="Up" number={mapping.combat.shieldFocus.up} />
    <Button label="Down" number={mapping.combat.shieldFocus.down} />
    <Button label="Front" number={mapping.combat.shieldFocus.front} />
    <Button label="Back" number={mapping.combat.shieldFocus.back} />
    <Button label="Reset" number={mapping.combat.shieldFocus.reset} />
</Panel>

<Panel label="Turret" direction="vertical">
    <Button label="Staggering" number={mapping.combat.turret.staggering} />
    <Button label="Gyro" number={mapping.combat.turret.gyro} />
</Panel>
