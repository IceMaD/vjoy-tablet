<script>
    import { mapping } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
    import Spreaded from "../Spreaded.svelte";
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
            number={$mapping.combat.countermeasures.decoy.launche}
        />
    </Panel>

    <Button
        label="Noise"
        number={$mapping.combat.countermeasures.noise.launche}
    />
</Panel>