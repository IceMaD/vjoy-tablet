<script>
    import {
        faPlus,
        faMinus,
        faChevronLeft,
        faChevronRight,
    } from "@fortawesome/free-solid-svg-icons";
    import { mapping, theme } from "../../stores";
    import { Button, Panel, Spreaded } from "../../components";
</script>

<Panel label="Missiles" direction="vertical">
    <Button label="Engage mode" number={$mapping.combat.missile.mode} />
    <Button
        label="Fire"
        number={$mapping.combat.missile.mode}
        color={$theme.red}
    />

    <Panel label="Type" alignment="space-evenly">
        <Button
            icon={faChevronLeft}
            number={$mapping.combat.missile.type.previous}
        />
        <Button
            icon={faChevronRight}
            number={$mapping.combat.missile.type.next}
        />
    </Panel>

    <Panel label="Armed" alignment="space-evenly">
        <Button
            icon={faMinus}
            number={$mapping.combat.missile.armed.decrease}
        />
        <Button icon={faPlus} number={$mapping.combat.missile.armed.increase} />
    </Panel>
</Panel>
