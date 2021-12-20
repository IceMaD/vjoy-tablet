<script>
    import { mapping, theme } from "../../stores";
    import { Button, Panel } from "../../components";
</script>

<Panel label="Notifications" direction="horizontal">
    <Button
        label="Accept"
        color={$theme.green}
        number={$mapping.communications.notification.accept}
    />
    <Button
        label="Decline"
        color={$theme.red}
        number={$mapping.communications.notification.decline}
    />
    <Button
        label="Dismiss"
        number={$mapping.communications.notification.dismiss}
    />
</Panel>