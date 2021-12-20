<script>
    import { mapping, theme, debug } from "../stores";

    export let color = $theme.blue;
    $: fillColor = `${color}22`;
    $: activeFillColor = `${color}66`;

    const calc = function (size, from) {
        let degree = size * 3.6;
        let rayon = (degree * Math.PI) / 180,
            x = Math.sin(rayon) * 50,
            y = Math.cos(rayon) * -50,
            mid = degree > 180 ? 1 : 0,
            anim = `M 0 0 v -50 A 50 50 1 ${mid} 1 ${x} ${y} z`;

        return {
            d: anim,
            transform: `translate(50, 50) rotate(${from})`,
            drawPosition: from + degree,
        };
    };

    const bind = (number, state) => () => {
        console.log(number, state);
    };

    let parts = [
        { size: 1 },
        { size: 23, button: $mapping.combat.shieldFocus.right },
        { size: 2 },
        { size: 23, button: $mapping.combat.shieldFocus.down },
        { size: 2 },
        { size: 23, button: $mapping.combat.shieldFocus.left },
        { size: 2 },
        { size: 23, button: $mapping.combat.shieldFocus.up },
        { size: 1 },
    ];

    $: graph = parts.reduce(
        (graph, part) => {
            let { d, transform, drawPosition } = calc(
                part.size,
                graph.drawPosition
            );

            return {
                drawPosition,
                parts: [...graph.parts, { ...part, d, transform }],
            };
        },
        { drawPosition: 0, parts: [] }
    );
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2 -2 104 104"
    style="--color: {color}; --fillColor: {fillColor}; --activeFillColor: {activeFillColor}"
>
    <g class="graph">
        <mask id="remove-center-circle">
            <rect width="200" height="200" fill="white" />
            <circle
                transform="translate(50, 50)"
                r="40"
                fill="black"
                class="center"
            />
        </mask>

        <g mask="url(#remove-center-circle)">
            {#each graph.parts as part}
                {#if part.button}
                    <path
                        fill="transparent"
                        class="action"
                        d={part.d}
                        transform={part.transform}
                        on:mousedown={bind(part.button, 1)}
                        on:mouseup={bind(part.button, 0)}
                        on:touchstart={bind(part.button, 1)}
                        on:touchend={bind(part.button, 0)}
                    />
                {:else}
                    <path
                        fill="transparent"
                        size={part.size}
                        d={part.d}
                        transform={part.transform}
                    />
                {/if}
            {/each}
        </g>

        <circle
            transform="translate(50, 50)"
            r="37"
            fill="transparent"
            class="click-preventer"
        />

        <mask id="remove-center-square">
            <rect width="100" height="100" fill="white" />
            <rect x="37" y="37" width="26" height="26" fill="black" />
        </mask>

        <rect
            x="30"
            y="30"
            width="25"
            height="25"
            mask="url(#remove-center-square)"
            class="action"
            on:mousedown={bind($mapping.combat.shieldFocus.up, 1)}
            on:mouseup={bind($mapping.combat.shieldFocus.up, 0)}
            on:touchstart={bind($mapping.combat.shieldFocus.up, 1)}
            on:touchend={bind($mapping.combat.shieldFocus.up, 0)}
        />

        <rect
            x="45"
            y="45"
            width="25"
            height="25"
            mask="url(#remove-center-square)"
            class="action"
            on:mousedown={bind($mapping.combat.shieldFocus.down, 1)}
            on:mouseup={bind($mapping.combat.shieldFocus.down, 0)}
            on:touchstart={bind($mapping.combat.shieldFocus.down, 1)}
            on:touchend={bind($mapping.combat.shieldFocus.down, 0)}
        />

        <rect x="40" y="40" width="20" height="20" fill="transparent" />
    </g>

    {#if $debug}
        <text x="45" y="40" class="debug">
            {$mapping.combat.shieldFocus.up}
        </text>
        <text x="45" y="65" class="debug">
            {$mapping.combat.shieldFocus.down}
        </text>
        <text x="5" y="52" class="debug">
            {$mapping.combat.shieldFocus.left}
        </text>
        <text x="85" y="52" class="debug">
            {$mapping.combat.shieldFocus.right}
        </text>
        <text x="45" y="12" class="debug">
            {$mapping.combat.shieldFocus.front}
        </text>
        <text x="45" y="92" class="debug">
            {$mapping.combat.shieldFocus.back}
        </text>
    {/if}
</svg>

<style>
    .debug {
        fill: var(--color);
        font-size: .5rem;
        pointer-events: none;
    }

    svg {
        width: 10rem;
        height: 10rem;
        user-select: none;
    }

    .graph {
        transform-origin: 48% 48%;
        transform: rotate(45deg);
    }

    .click-preventer {
        pointer-events: all;
        cursor: default;
    }

    .action {
        cursor: pointer;
        fill: var(--fillColor);
        stroke: var(--color);
        stroke-width: 1;
    }

    .action:active {
        fill: var(--activeFillColor);
    }
</style>
