<script>
    import { mapping } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
    import MdWifi from "svelte-icons/md/MdWifi.svelte";
    import ShieldsFocus from "../ShieldsFocus.svelte";
</script>

<Panel label="Shields" direction="vertical" icon={MdWifi}>
    <ShieldsFocus />
    <Button label="Reset" number={$mapping.combat.shieldFocus.reset} />
</Panel>