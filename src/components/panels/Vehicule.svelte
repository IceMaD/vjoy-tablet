<script>
    import { mapping } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
    import Spreaded from "../Spreaded.svelte";
</script>

<Panel label="Vehicule" direction="vertical">
    <Button label="Landing gears" number={$mapping.system.landingGears.toggle} />
    <Button label="Lights" number={$mapping.power.lights} />

    <Panel label="Doors">
        <Spreaded direction="vertical">
            <Button label="Open" number={$mapping.system.doors.open} />
            <Button label="Close" number={$mapping.system.doors.close} />
        </Spreaded>
        <Spreaded direction="vertical">
            <Button label="Lock" number={$mapping.system.doors.lock} />
            <Button label="Unlock" number={$mapping.system.doors.unlock} />
        </Spreaded>
    </Panel>
</Panel>