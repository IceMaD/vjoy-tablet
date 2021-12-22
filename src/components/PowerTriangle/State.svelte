<script>
    import { Layer } from "svelte-canvas";
    import { drawTrangleAxis, drawDot } from "./draw";
    import { theme } from "../../stores";
    import { triangleCoordinates, repartitionToCoordinates } from "./calc";

    export let repartition;

    $: render = ({ context, width, height }) => {
        const center = repartitionToCoordinates({ width, height }, repartition);
        const frameWoordinates = triangleCoordinates({ width, height }, 100);

        drawTrangleAxis(
            context,
            {
                ...frameWoordinates,
                center,
            },
            { color: $theme.blue, lineWidth: 3 }
        );

        drawDot(context, center, { color: $theme.blue, radius: 5 });
        drawDot(context, frameWoordinates.a, { color: $theme.blue, radius: 3 });
        drawDot(context, frameWoordinates.b, { color: $theme.blue, radius: 3 });
        drawDot(context, frameWoordinates.c, { color: $theme.blue, radius: 3 });
    };
</script>

<Layer {render} />
