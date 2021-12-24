<script>
    import { Layer } from "svelte-canvas";
    import { drawTrangleAxis } from "./draw";
    import { theme } from "../../stores";
    import { triangle, repartitionToPoint } from "./calc";

    export let repartition;

    $: render = ({ context, width, height }) => {
        const lineWidth = (width * 0.5) / 100;

        if (repartition) {
            drawTrangleAxis(
                context,
                {
                    ...triangle({ width, height }, 100),
                    center: repartitionToPoint(
                        { width, height },
                        repartition
                    ),
                },
                { color: $theme.lightgrey, lineWidth }
            );
        }
    };
</script>

<Layer {render} />
