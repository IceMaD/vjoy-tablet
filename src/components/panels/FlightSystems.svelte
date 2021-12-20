<script>
    import { mapping } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
</script>

<Panel label="Flight systems" direction="vertical">
    <Button label="VTOL" number={$mapping.system.vtol.toggle} />
    <Button label="G-safe" number={$mapping.system.gsafe.toggle} />
    <Button label="ESP" number={$mapping.system.esp.toggle} />
    <Button
        label="Poximity assist"
        number={$mapping.system.proximityAssist.toggle}
    />
    <Button
        label="Cruise control"
        number={$mapping.system.cruiseControl.toggle}
    />
</Panel>