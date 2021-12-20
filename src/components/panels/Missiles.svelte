<script>
    import { mapping, theme } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
</script>

<Panel label="Missiles" direction="vertical">
    <Button label="Engage mode" number={$mapping.combat.missile.mode} />
    <Button
        label="Fire"
        number={$mapping.combat.missile.mode}
        color={$theme.red}
    />

    <Panel label="Type">
        <Button
            label="Previous"
            number={$mapping.combat.missile.type.previous}
        />
        <Button label="Next" number={$mapping.combat.missile.type.next} />
    </Panel>

    <Panel label="Armed">
        <Button
            label="Decrease"
            number={$mapping.combat.missile.type.decrease}
        />
        <Button
            label="Increase"
            number={$mapping.combat.missile.type.increase}
        />
    </Panel>
</Panel>