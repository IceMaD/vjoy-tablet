<script>
    import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
    import { mapping, theme } from "../../stores";
    import { Button, Panel } from "../../components";
</script>

<Panel label="Power Triangle">
    <Panel label="Shields" direction="vertical">
        <Button
            label="Max"
            color={$theme.blue}
            number={$mapping.power.triangle.shields.max}
        />
        <Button
            icon={faPlus}
            color={$theme.cyan}
            number={$mapping.power.triangle.shields.increase}
        />
        <Button
            icon={faMinus}
            color={$theme.orange}
            number={$mapping.power.triangle.shields.decrease}
        />
    </Panel>
    <Panel label="Thrusters" direction="vertical">
        <Button
            label="Max"
            color={$theme.blue}
            number={$mapping.power.triangle.thrusters.max}
        />
        <Button
            icon={faPlus}
            color={$theme.cyan}
            number={$mapping.power.triangle.thrusters.increase}
        />
        <Button
            icon={faMinus}
            color={$theme.orange}
            number={$mapping.power.triangle.thrusters.decrease}
        />
    </Panel>
    <Panel label="Weapons" direction="vertical">
        <Button
            label="Max"
            color={$theme.blue}
            number={$mapping.power.triangle.weapons.max}
        />
        <Button
            icon={faPlus}
            color={$theme.cyan}
            number={$mapping.power.triangle.weapons.increase}
        />
        <Button
            icon={faMinus}
            color={$theme.orange}
            number={$mapping.power.triangle.weapons.decrease}
        />
    </Panel>
</Panel>
