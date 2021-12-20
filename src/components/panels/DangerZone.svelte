<script>
    import { mapping, theme } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
</script>

<Panel label="Danger zone" color={$theme.red} direction="vertical">
    <Button
        label="Self-destruct"
        number={$mapping.system.selfDestruct}
        color={$theme.red}
    />
    <Button label="Eject" number={$mapping.system.eject} color={$theme.yellow} />
</Panel>