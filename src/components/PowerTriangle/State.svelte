<script>
    import { Layer } from "svelte-canvas";
    import { drawTrangleAxis, drawDot } from "./draw";
    import { theme } from "../../stores";
    import { triangleCoordinates, repartitionToCoordinates } from "./calc";

    export let repartition;

    $: render = ({ context, width, height }) => {
        const center = repartitionToCoordinates({ width, height }, repartition);
        const frameWoordinates = triangleCoordinates({ width, height }, 100);
        const lineWidth = (width * 1) / 100;
        const radius = lineWidth;

        drawTrangleAxis(
            context,
            {
                ...frameWoordinates,
                center,
            },
            { color: $theme.blue, lineWidth }
        );

        drawDot(context, center, { color: $theme.blue, radius: radius * 2 });
        drawDot(context, frameWoordinates.a, { color: $theme.blue, radius });
        drawDot(context, frameWoordinates.b, { color: $theme.blue, radius });
        drawDot(context, frameWoordinates.c, { color: $theme.blue, radius });
    };
</script>

<Layer {render} />
