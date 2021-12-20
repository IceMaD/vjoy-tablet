<script context="module">
    export async function preload() {
        const mapping = await this.fetch(`mapping.json`);

        return {
            mapping: await mapping.json(),
        };
    }
</script>

<script>
    import { theme } from "../stores";

    import Panel from "../components/Panel.svelte";
    import Button from "../components/Button.svelte";

    export let mapping;
</script>

<Panel label="Comms" direction="vertical">
    <Button label="Hail" number={mapping.communications.hail} />
</Panel>

<Panel label="Notification" direction="vertical">
    <Button label="Accept" number={mapping.communications.notification.accept} />
    <Button label="Decline" number={mapping.communications.notification.decline} />
    <Button label="Dismiss" number={mapping.communications.notification.dismiss} />
</Panel>