<script>
    import { spring } from "svelte/motion";

    import { Canvas } from "svelte-canvas";
    import Grid from "./PowerTriangle/Grid.svelte";
    import State from "./PowerTriangle/State.svelte";
    import Preview from "./PowerTriangle/Preview.svelte";
    import {
        widthToHeight,
        pointToRepartition,
        pointInTriangle,
        triangle,
        allowedMatrix,
    } from "./PowerTriangle/calc";

    import {
        powerRepartiton,
        animatedPowerRepartiton,
        gridPositions,
        mapping,
    } from "../stores";
    import VjoyClient from "../utils/VjoyClient";

    let screenWidth;
    $: width = screenWidth * 0.18;
    $: height = widthToHeight(width);
    let preview = spring(null, {
        stiffness: 0.1,
        damping: 0.4,
    });
    let cursor = "default";

    const getClosestGridPosition = ([x, y]) => {
        return $gridPositions.reduce((closestPosition, gridPosition) => {
            if (!closestPosition) {
                return gridPosition;
            }

            const [closestX, closestY] = closestPosition.point;
            const [gridX, gridY] = gridPosition.point;

            const closestDiff = Math.abs(x - closestX) + Math.abs(y - closestY);
            const currentDiff = Math.abs(x - gridX) + Math.abs(y - gridY);

            return currentDiff < closestDiff ? gridPosition : closestPosition;
        }, null);
    };

    const updatePreview = (point) => {
        cursor = "pointer";

        preview.set(
            pointToRepartition(
                { width, height },
                getClosestGridPosition(point).point
            )
        );
    };

    const clearPreview = () => {
        preview.set(null, { hard: true });
        cursor = "default";
    };

    const onMouseMove = ({ clientX, clientY, target: canvas }) => {
        const { x: canvasX, y: canvasY } = canvas.getBoundingClientRect();
        const previewPoint = [clientX - canvasX, clientY - canvasY];

        if (pointInTriangle(previewPoint, triangle({ width, height }, 110))) {
            updatePreview(previewPoint);
        } else {
            clearPreview();
        }
    };

    const inputMapping = {
        weapons: $mapping.power.triangle.weapons.increase,
        shields: $mapping.power.triangle.shields.increase,
        thrusters: $mapping.power.triangle.thrusters.increase,
    };

    const onClick = ({ clientX, clientY, target: canvas }) => {
        const { x: canvasX, y: canvasY } = canvas.getBoundingClientRect();
        const point = [clientX - canvasX, clientY - canvasY];

        if (pointInTriangle(point, triangle({ width, height }, 110))) {
            const closestPosition = getClosestGridPosition(point);

            closestPosition.inputs
                .map((input) => inputMapping[input])
                .reduce(
                    (previousPromise, input) =>
                        previousPromise.then(() => VjoyClient.press(input)),
                    VjoyClient.press($mapping.power.triangle.reset)
                );

            powerRepartiton.set(
                pointToRepartition({ width, height }, closestPosition.point)
            );
        }
    };
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="container">
    <div class="label weapons">Weapons</div>
    <div class="label shields">Shields</div>
    <div class="label thrusters">Thrusters</div>
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
        right: 0.5rem;
    }

    .weapons {
        top: 0.5rem;
        left: 0.5rem;
    }

    .thrusters {
        bottom: 0.5rem;
        transform: translateX(-50%);
        left: 50%;
    }
</style>
