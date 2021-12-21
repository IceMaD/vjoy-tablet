<script>
    import { mapping, theme } from "../../stores";
    import { Button, Panel, Spreaded } from "../../components";

    export let grow = false;
</script>

<Panel label="Targetting" {grow}>
    {#each [1, 2, 3] as pin}
        <Panel label={pin.toString()} direction="vertical">
            <Button
                label="Pin"
                color={$theme.yellow}
                number={$mapping.combat.pin[pin - 1].pin}
            />
            <Button
                label="Lock"
                color={$theme.orange}
                number={$mapping.combat.pin[pin - 1].lock}
            />
            <Button
                label="Release"
                color={$theme.cyan}
                number={$mapping.combat.pin[pin - 1].release}
            />
        </Panel>
    {/each}
    <Spreaded direction="vertical">
        <Panel label="PIP" direction="vertical">
            <Button label="Lead" number={$mapping.combat.pip.lead} />
            <Button label="Lag" number={$mapping.combat.pip.lag} />
        </Panel>

        <Button
            label="Hail"
            color={$theme.blue}
            number={$mapping.communications.hail}
        />
    </Spreaded>
</Panel>
