<script>
    import { Canvas } from "svelte-canvas";
    import Grid from "./PowerTriangle/Grid.svelte";
    import State from "./PowerTriangle/State.svelte";
    import Preview from "./PowerTriangle/Preview.svelte";
    import {
        widthToHeight,
        coordinatesToRepartition,
        pointInTriangle,
        triangleCoordinates,
    } from "./PowerTriangle/calc";

    const width = 300;
    const height = widthToHeight(width);
    let repartition = [60, 20, 20];
    let preview = null;
    let cursor = "default";

    const onMouseMove = ({ clientX, clientY, target: canvas }) => {
        let { x: canvasX, y: canvasY } = canvas.getBoundingClientRect();
        let stateCoordinates = [clientX - canvasX, clientY - canvasY];

        if (
            pointInTriangle(
                stateCoordinates,
                triangleCoordinates({ width, height }, 110)
            )
        ) {
            cursor = "pointer";
            preview = coordinatesToRepartition(
                { width, height },
                stateCoordinates
            );
        } else {
            preview = null;
            cursor = "default";
        }
    };

    const onClick = ({ clientX, clientY, target: canvas }) => {
        let { x: canvasX, y: canvasY } = canvas.getBoundingClientRect();
        let stateCoordinates = [clientX - canvasX, clientY - canvasY];

        if (
            pointInTriangle(
                stateCoordinates,
                triangleCoordinates({ width, height }, 110)
            )
        ) {
            repartition = coordinatesToRepartition(
                { width, height },
                stateCoordinates
            );
        }
    };
</script>

<div class="container">
    <div class="label shields">Shields</div>
    <div class="label weapons">Weapons</div>
    <Canvas
        {width}
        {height}
        on:click={onClick}
        on:mousemove={onMouseMove}
        on:mouseleave={onMouseMove}
        style="cursor: {cursor}"
    >
        <Grid />
        <Preview repartition={preview} />
        <State {repartition} />
    </Canvas>
    <div class="label engine">
        {preview ? JSON.stringify(preview) : "Engine"}
    </div>
</div>

<style>
    .container {
        position: relative;
        padding: 2rem;
    }

    .label {
        position: absolute;
        text-transform: uppercase;
    }

    .shields {
        top: 0;
        left: 0;
    }

    .weapons {
        top: 0;
        right: 0;
    }

    .engine {
        bottom: 0;
        transform: translateX(-50%);
        left: 50%;
    }
</style>
