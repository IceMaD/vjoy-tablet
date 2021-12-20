<script>
    import { mapping } from "../../stores";
    import { Button, Panel, Spreaded } from "../../components";
</script>

<Panel label="Countermeasures" direction="vertical">
    <Panel label="Decoy" direction="vertical">
        <Spreaded>
            <Button
                label="Less"
                number={$mapping.combat.countermeasures.decoy.decrease}
            />
            <Button
                label="More"
                number={$mapping.combat.countermeasures.decoy.increase}
            />
        </Spreaded>
        <Button
            label="Launch"
            number={$mapping.combat.countermeasures.decoy.launch}
        />
    </Panel>

    <Button
        label="Noise"
        number={$mapping.combat.countermeasures.noise.launch}
    />
</Panel>