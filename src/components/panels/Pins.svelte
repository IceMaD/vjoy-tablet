<script>
    import { mapping } from "../../stores";
    import { Button, Panel } from "../../components";
</script>

<Panel label="Pins">
    {#each [1, 2, 3] as pin}
        <Panel label={pin.toString()} direction="vertical">
            <Button label="Pin" number={$mapping.combat.pin[pin - 1].pin} />
            <Button label="Lock" number={$mapping.combat.pin[pin - 1].lock} />
            <Button
                label="Release"
                number={$mapping.combat.pin[pin - 1].release}
            />
        </Panel>
    {/each}
</Panel>