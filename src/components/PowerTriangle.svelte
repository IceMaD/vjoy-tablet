<script>
    import { spring } from "svelte/motion";

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

    import { powerRepartiton, animatedPowerRepartiton } from "../stores";

    let screenWidth;
    $: width = screenWidth * 0.18;
    $: height = widthToHeight(width);
    let preview = spring(null, {
        stiffness: 0.1,
        damping: 0.4,
    });
    let cursor = "default";

    const updatePreview = coordinates => {
        cursor = "pointer";
        preview.set(
            coordinatesToRepartition({ width, height }, coordinates)
        );
    };

    const clearPreview = () => {
        preview.set(null, { hard: true });
        cursor = "default";
    };

    const onMouseMove = ({ clientX, clientY, target: canvas }) => {
        let { x: canvasX, y: canvasY } = canvas.getBoundingClientRect();
        let previewCoordinates = [clientX - canvasX, clientY - canvasY];

        if (
            pointInTriangle(
                previewCoordinates,
                triangleCoordinates({ width, height }, 110)
            )
        ) {
            updatePreview(previewCoordinates)
        } else {
            clearPreview();
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
            powerRepartiton.set(
                coordinatesToRepartition({ width, height }, stateCoordinates)
            );
        }
    };
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="container">
    <div class="label shields">Shields</div>
    <div class="label weapons">Weapons</div>
    <Canvas
        {width}
        {height}
        on:click={onClick}
        on:mousemove={onMouseMove}
        on:mouseleave={clearPreview}
        style="cursor: {cursor}"
    >
        <Grid />
        <Preview repartition={$preview} />
        <State repartition={$animatedPowerRepartiton} />
    </Canvas>
    <div class="label engine">Engine</div>
</div>

<style>
    .container {
        position: relative;
        padding: 2rem;
        align-self: center;
        justify-self: center;
    }

    .label {
        position: absolute;
        text-transform: uppercase;
        line-height: 1rem;
    }

    .shields {
        top: 0.5rem;
        left: 0.5rem;
    }

    .weapons {
        top: 0.5rem;
        right: 0.5rem;
    }

    .engine {
        bottom: 0.5rem;
        transform: translateX(-50%);
        left: 50%;
    }
</style>
