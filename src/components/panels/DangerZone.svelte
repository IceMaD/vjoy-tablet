<script>
    import { mapping, theme } from "../../stores";
    import { Button, Panel } from "../../components";
</script>

<Panel label="Danger zone" color={$theme.red}>
    <Button
        label="Self-destruct"
        number={$mapping.system.selfDestruct}
        color={$theme.red}
    />
    <Button label="Eject" number={$mapping.system.eject} color={$theme.yellow} />
</Panel>