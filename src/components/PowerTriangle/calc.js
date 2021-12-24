export const repartitionToPoint = ({ width, height }, repartition) => {
    let [shields, power, thrusters] = repartition.map((r) => r / 100);
    let {
        a: [ax, ay],
        b: [bx, by],
        c: [cx, cy],
    } = triangle({ width, height }, 100);

    return [
        ax * shields + bx * power + cx * thrusters,
        ay * shields + by * power + cy * thrusters,
    ];
};

export const widthToHeight = width => (width * Math.sqrt(3)) / 2;

export const segmentLength = ([ax, ay], [bx, by]) => {
    return Math.sqrt(Math.pow(by - ay, 2) + Math.pow(bx - ax, 2));
};

export const lengthToLine = ([px, py], [[ax, ay], [bx, by]]) => {
    var [p2x, p2y] = [bx - ax, by - ay];
    var something = p2x * p2x + p2y * p2y;
    var u = ((px - ax) * p2x + (py - ay) * p2y) / something;

    if (u > 1)
        u = 1;
    else if (u < 0)
        u = 0;

    var x = ax + u * p2x;
    var y = ay + u * p2y;

    var dx = x - px;
    var dy = y - py;

    var dist = Math.sqrt(dx * dx + dy * dy);

    return dist;
};

export const pointToRepartition = ({ width, height }, point) => {
    let { a, b, c } = triangle({ width, height }, 100);

    let frameHeight = c[1] - a[1];

    let aLength = lengthToLine(point, [b, c]);
    let bLength = lengthToLine(point, [a, c]);
    let cLength = lengthToLine(point, [a, b]);

    let shields = (aLength / frameHeight) * 100;
    let weapons = (bLength / frameHeight) * 100;
    let thrusters = (cLength / frameHeight) * 100;

    return [shields, weapons, thrusters];
};

export const triangle = ({ width: frameWidth, height: frameHeight }, size) => {
    const margin = 5;
    const drawWidth = frameWidth - margin * 2;
    const drawHeight = frameHeight - margin * 2;
    const width = (drawWidth * size) / 100;
    const height = widthToHeight(width);
    const offsetX = margin + (drawWidth - width) / 2;
    const offsetY = margin + (drawHeight - height) / 3;

    return {
        a: [offsetX, offsetY],
        b: [offsetX + width, offsetY],
        c: [offsetX + width / 2, height + offsetY],
        center: [margin + width / 2, margin + height / 3],
    };
};

export const pointInTriangle = (
    [px, py],
    { a: [ax, ay], b: [bx, by], c: [cx, cy] }
) => {
    const v0 = [cx - ax, cy - ay];
    const v1 = [bx - ax, by - ay];
    const v2 = [px - ax, py - ay];

    const dot00 = v0[0] * v0[0] + v0[1] * v0[1];
    const dot01 = v0[0] * v1[0] + v0[1] * v1[1];
    const dot02 = v0[0] * v2[0] + v0[1] * v2[1];
    const dot11 = v1[0] * v1[0] + v1[1] * v1[1];
    const dot12 = v1[0] * v2[0] + v1[1] * v2[1];

    const invDenom = 1 / (dot00 * dot11 - dot01 * dot01);

    const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    const v = (dot00 * dot12 - dot01 * dot02) * invDenom;

    return u >= 0 && v >= 0 && u + v < 1;
};

export const third = 100 / 3;
export const increment = (100 - third) / 4;

const pullFrom = (a, b) => {
    let toPull = increment;
    let toPullA = toPull / 2;
    let toPullB = toPull / 2;

    if (a + b < toPull) {
        return [0, 0, a + b];
    }

    if (a < toPullA) {
        return [0, b - toPullB - (toPullA - a), toPull];
    }

    if (b < toPullB) {
        return [a - toPullA - (toPullB - b), 0, toPull];
    }

    return [a - toPullA, b - toPullB, toPull]
}

export const applyInput = (repartition, input) => {
    const [weapons, shields, thrusters] = repartition;
    let weaponsAfter, shieldsAfter, thrustersAfter, pulled;

    switch (input) {
        case 'weapons':
            [shieldsAfter, thrustersAfter, pulled] = pullFrom(shields, thrusters);

            return [weapons + pulled, shieldsAfter, thrustersAfter];
        case 'shields':
            [thrustersAfter, weaponsAfter, pulled] = pullFrom(thrusters, weapons);

            return [weaponsAfter, shields + pulled, thrustersAfter];
        case 'thrusters':
            [weaponsAfter, shieldsAfter, pulled] = pullFrom(weapons, shields);

            return [weaponsAfter, shieldsAfter, thrusters + pulled];
    }
}

function combinations(a, b) {
    return [
        [a],
        [a, a],
        [a, b],
        [a, a, a],
        [a, b, a],
        [a, b, b],
        [a, a, a, a],
        [a, a, a, b],
        [a, a, b, b],
        [a, b, b, b],
    ]
}

export const allowedMatrix = ({ width, height }) => {
    return [
        [],
        ...combinations('weapons', 'shields'),
        ...combinations('shields', 'thrusters'),
        ...combinations('thrusters', 'weapons'),
    ].map(inputs => {
        const finalRepartition = inputs.reduce((repartition, input) => applyInput(repartition, input), [third, third, third]);

        return {
            inputs,
            point: repartitionToPoint({ width, height }, finalRepartition),
        }
    })
};