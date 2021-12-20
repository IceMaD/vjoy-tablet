<script>
    import { mapping } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
</script>

<Panel label="Power Triangle">
    <Panel label="Shields" direction="vertical">
        <Button label="Max" number={$mapping.power.triangle.shields.max} />
        <Button
            label="+"
            number={$mapping.power.triangle.shields.increase}
        />
        <Button
            label="-"
            number={$mapping.power.triangle.shields.decrease}
        />
    </Panel>
    <Panel label="Thrusters" direction="vertical">
        <Button label="Max" number={$mapping.power.triangle.thrusters.max} />
        <Button
            label="+"
            number={$mapping.power.triangle.thrusters.increase}
        />
        <Button
            label="-"
            number={$mapping.power.triangle.thrusters.decrease}
        />
    </Panel>
    <Panel label="Weapons" direction="vertical">
        <Button label="Max" number={$mapping.power.triangle.weapons.max} />
        <Button
            label="+"
            number={$mapping.power.triangle.weapons.increase}
        />
        <Button
            label="-"
            number={$mapping.power.triangle.weapons.decrease}
        />
    </Panel>
</Panel>