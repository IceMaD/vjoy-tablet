<script>
    import { Layer } from "svelte-canvas";
    import { drawTrangleAxis } from "./draw";
    import { theme } from "../../stores";
    import { triangleCoordinates, repartitionToCoordinates } from "./calc";

    export let repartition;

    $: render = ({ context, width, height }) => {
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
                { color: $theme.lightgrey, lineWidth: 1 }
            );
        }
    };
</script>

<Layer {render} />
