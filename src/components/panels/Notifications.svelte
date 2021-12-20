<script>
    import { mapping } from "../../stores";
    import Panel from "../Panel.svelte";
    import Button from "../Button.svelte";
</script>

<Panel label="Notifications" direction="vertical">
    <Button
        label="Accept"
        number={$mapping.communications.notification.accept}
    />
    <Button
        label="Decline"
        number={$mapping.communications.notification.decline}
    />
    <Button
        label="Dismiss"
        number={$mapping.communications.notification.dismiss}
    />
</Panel>