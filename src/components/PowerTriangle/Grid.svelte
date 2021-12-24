<script>
    import { Layer } from "svelte-canvas";
    import { drawTrangleAxis, drawTriangle, drawDot } from "./draw";
    import {
        triangle,
        repartitionToPoint,
        increment,
        third,
        allowedMatrix,
    } from "./calc";
    import { gridPositions, theme } from "../../stores";

    $: render = ({ context, width, height }) => {
        const frameTriangle = triangle({ width, height }, 100);
        const color = $theme.grey;
        const lineWidth = (width * 0.5) / 100;
        const radius = lineWidth * 2;

        drawTrangleAxis(context, frameTriangle, { lineWidth, color });

        [1, 2, 3, 4].forEach((multiplier) => {
            const percentage = third + multiplier * increment;
            const rest = (100 - percentage) / 2;

            let point = {
                a: repartitionToPoint({ width, height }, [
                    percentage,
                    rest,
                    rest,
                ]),
                b: repartitionToPoint({ width, height }, [
                    rest,
                    percentage,
                    rest,
                ]),
                c: repartitionToPoint({ width, height }, [
                    rest,
                    rest,
                    percentage,
                ]),
            };

            drawTriangle(context, point, {
                lineWidth: 1,
                color: $theme.grey,
            });
        });

        const positions = allowedMatrix({ width, height });

        gridPositions.set(positions);

        positions.forEach(({point}) => {
            drawDot(context, point, { radius, color });
        });
    };
</script>

<Layer {render} />
