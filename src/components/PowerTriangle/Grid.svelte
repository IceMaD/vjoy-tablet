<script>
    import { Layer } from "svelte-canvas";
    import { drawTrangleAxis, drawTriangle, drawDot } from "./draw";
    import { triangleCoordinates, repartitionToCoordinates } from "./calc";
    import { theme } from "../../stores";

    $: render = ({ context, width, height }) => {
        const frameTriangle = triangleCoordinates({ width, height }, 100);
        const color = $theme.grey;
        const lineWidth = (width * 0.5) / 100;
        const radius = lineWidth * 2;

        drawTrangleAxis(context, frameTriangle, { lineWidth, color });
        drawTriangle(context, frameTriangle, { lineWidth, color });

        drawDot(context, frameTriangle.a, { radius, color });
        drawDot(context, frameTriangle.b, { radius, color });
        drawDot(context, frameTriangle.c, { radius, color });

        [80, 60, 40].forEach((percentage) => {
            const rest = (100 - percentage) / 2;

            let coordinates = {
                a: repartitionToCoordinates({ width, height }, [
                    percentage,
                    rest,
                    rest,
                ]),
                b: repartitionToCoordinates({ width, height }, [
                    rest,
                    percentage,
                    rest,
                ]),
                c: repartitionToCoordinates({ width, height }, [
                    rest,
                    rest,
                    percentage,
                ]),
            };

            drawTriangle(context, coordinates, {
                lineWidth: 1,
                color: $theme.grey,
            });
        });

        let tens = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

        tens.forEach((aTen) => {
            tens.forEach((bTen) => {
                tens.forEach((cTen) => {
                    if (100 !== aTen + bTen + cTen) {
                        return;
                    }

                    const coordinates = repartitionToCoordinates(
                        { width, height },
                        [aTen, bTen, cTen]
                    );
                    drawDot(context, coordinates, { radius, color });
                });
            });
        });
    };
</script>

<Layer {render} />
