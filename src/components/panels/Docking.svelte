<script>
    import { mapping } from "../../stores";
    import { Button, Panel } from "../../components";
</script>

<Panel label="Docking" direction="horizontal">
    <Button label="Activate" number={$mapping.docking.mode} />
    <Button label="Request" number={$mapping.docking.request} />
    <Button label="Camera" number={$mapping.docking.camera} />
</Panel>