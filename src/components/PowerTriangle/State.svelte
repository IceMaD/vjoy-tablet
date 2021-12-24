<script>
    import { Layer } from "svelte-canvas";
    import { drawTrangleAxis, drawDot } from "./draw";
    import { theme } from "../../stores";
    import { triangle, repartitionToPoint } from "./calc";

    export let repartition;

    $: render = ({ context, width, height }) => {
        const center = repartitionToPoint({ width, height }, repartition);
        const frameTriangle = triangle({ width, height }, 100);
        const lineWidth = (width * 1) / 100;
        const radius = lineWidth;

        drawTrangleAxis(
            context,
            {
                ...frameTriangle,
                center,
            },
            { color: $theme.blue, lineWidth }
        );

        drawDot(context, center, { color: $theme.blue, radius: radius * 2 });
        drawDot(context, frameTriangle.a, { color: $theme.blue, radius });
        drawDot(context, frameTriangle.b, { color: $theme.blue, radius });
        drawDot(context, frameTriangle.c, { color: $theme.blue, radius });
    };
</script>

<Layer {render} />
