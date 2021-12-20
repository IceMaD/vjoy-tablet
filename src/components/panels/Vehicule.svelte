<script>
    import { mapping, theme } from "../../stores";
    import { Button, Panel, Spreaded } from "../../components";
</script>

<Panel label="Vehicule" direction="vertical">
    <Button
        label="Landing gears"
        number={$mapping.system.landingGears.toggle}
    />
    <Button label="Lights" number={$mapping.power.lights} />

    <Panel label="Doors">
        <Spreaded direction="vertical">
            <Button
                label="Open"
                color={$theme.cyan}
                number={$mapping.system.doors.open}
            />
            <Button
                label="Unlock"
                color={$theme.cyan}
                number={$mapping.system.doors.unlock}
            />
        </Spreaded>
        <Spreaded direction="vertical">
            <Button
                label="Close"
                color={$theme.orange}
                number={$mapping.system.doors.close}
            />
            <Button
                label="Lock"
                color={$theme.orange}
                number={$mapping.system.doors.lock}
            />
        </Spreaded>
    </Panel>
</Panel>
