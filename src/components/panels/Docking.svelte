<script>
    import { mapping } from "../../stores";
    import { Button, Panel, Spreaded } from "../../components";

    export let grow = false;
</script>

<Panel label="Docking" {grow}>
    <Button label="Activate" number={$mapping.docking.mode} />
    <Button label="Request" number={$mapping.docking.request} />
    <Button label="Camera" number={$mapping.docking.camera} />
</Panel>