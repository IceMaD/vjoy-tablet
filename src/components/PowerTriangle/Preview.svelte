<script>
    import { Layer } from "svelte-canvas";
    import { drawTrangleAxis } from "./draw";
    import { theme } from "../../stores";
    import { triangleCoordinates, repartitionToCoordinates } from "./calc";

    export let repartition;

    $: render = ({ context, width, height }) => {
        const lineWidth = (width * 0.5) / 100;

        if (repartition) {
            drawTrangleAxis(
                context,
                {
                    ...triangleCoordinates({ width, height }, 100),
                    center: repartitionToCoordinates(
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
