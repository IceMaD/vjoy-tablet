<script>
    import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
    import { mapping, theme } from "../../stores";
    import { Button, Panel, PowerTriangle } from "../../components";

    export let grow = false;
</script>

<Panel label="Power Triangle" {grow}>
    <PowerTriangle/>
    <!-- {#each ["shields", "thrusters", "weapons"] as system}
        <Panel label={system} direction="vertical">
            <Button
                label="Max"
                color={$theme.red}
                number={$mapping.power.triangle[system].max}
            />
            <Button
                icon={faPlus}
                color={$theme.cyan}
                number={$mapping.power.triangle[system].increase}
            />
            <Button
                icon={faMinus}
                color={$theme.blue}
                number={$mapping.power.triangle[system].decrease}
            />
        </Panel>
    {/each}
    <Button
        label="Reset"
        color={$theme.lightgrey}
        number={$mapping.power.triangle.reset}
    /> -->
</Panel>
