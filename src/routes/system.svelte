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
    import Spreaded from "../components/spreaded.svelte";

    export let mapping;
</script>

<Panel label="Flight systems" color={$theme.lightgrey} direction="vertical">
    <Button label="VTOL" number={mapping.system.vtol.toggle} />
    <Button label="G-safe" number={mapping.system.gsafe.toggle} />
    <Button label="ESP" number={mapping.system.esp.toggle} />
    <Button
        label="Poximity assist"
        number={mapping.system.proximityAssist.toggle}
    />
    <Button
        label="Cruise control"
        number={mapping.system.cruiseControl.toggle}
    />
</Panel>
<Panel label="Vehicule" color={$theme.lightgrey} direction="vertical">
    <Button label="Landing gears" number={mapping.system.landingGears.toggle} />
    <Button label="Lights" number={mapping.power.lights} />

    <Panel label="Doors">
        <Spreaded direction="vertical">
            <Button label="Open" number={mapping.system.doors.open} />
            <Button label="Close" number={mapping.system.doors.close} />
        </Spreaded>
        <Spreaded direction="vertical">
            <Button label="Lock" number={mapping.system.doors.lock} />
            <Button label="Unlock" number={mapping.system.doors.unlock} />
        </Spreaded>
    </Panel>
</Panel>
<Panel label="Quantum" direction="vertical">
    <Button label="Spool" number={mapping.quantum.mode} />
    <Button label="Engage" number={mapping.quantum.travel} />
</Panel>
<Panel label="Scanner" direction="vertical">
    <Button label="Activate" number={mapping.scanner.mode} />
    <Button label="Ping" number={mapping.scanner.ping} />
    <Panel label="Angle" direction="vertical">
        <Button label="Increase" number={mapping.scanner.angle.increase} />
        <Button label="Decrease" number={mapping.scanner.angle.decrease} />
    </Panel>
</Panel>
<Panel label="Docking" direction="vertical">
    <Button label="Activate" number={mapping.docking.mode} />
    <Button label="Request" number={mapping.docking.request} />
    <Button label="Camera" number={mapping.docking.camera} />
</Panel>
<Panel label="Danger zone" color={$theme.red} direction="vertical">
    <Button
        label="Self-destruct"
        number={mapping.system.selfDestruct}
        color={$theme.red}
    />
    <Button label="Eject" number={mapping.system.eject} color={$theme.yellow} />
</Panel>
