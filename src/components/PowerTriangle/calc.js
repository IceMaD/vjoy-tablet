export const repartitionToCoordinates = ({ width, height }, repartition) => {
    let [shields, power, thrusters] = repartition.map((r) => r / 100);
    let {
        a: [ax, ay],
        b: [bx, by],
        c: [cx, cy],
    } = triangleCoordinates({ width, height }, 100);

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

const approximate = (value, apporimation = 5) => Math.ceil(Math.round(value / apporimation)) * apporimation;

export const coordinatesToRepartition = ({ width, height }, coordinates) => {
    let { a, b, c } = triangleCoordinates({ width, height }, 100);

    let frameHeight = c[1] - a[1];

    let aLength = lengthToLine(coordinates, [b, c]);
    let bLength = lengthToLine(coordinates, [a, c]);
    let cLength = lengthToLine(coordinates, [a, b]);

    let shields = (aLength / frameHeight) * 100;
    let weapons = (bLength / frameHeight) * 100;
    let thrusters = (cLength / frameHeight) * 100;

    switch (Math.max(shields, weapons, thrusters)) {
        case shields:
            shields = approximate(shields, 10);
            weapons = approximate(weapons, 10);
            thrusters = 100 - shields - weapons;
        case weapons:
            weapons = approximate(weapons, 10);
            thrusters = approximate(thrusters, 10);
            shields = 100 - weapons - thrusters;
        case thrusters:
            thrusters = approximate(thrusters, 10);
            shields = approximate(shields, 10);
            weapons = 100 - thrusters - shields;
    }

    return [shields, weapons, thrusters];

    const repartition = {
    };

    let max = Object
        .keys(repartition)
        .reduce((best, current) => repartition[current] > repartition[best] ? current : best, 'shields')

    repartition[max] = approximate(repartition[max], 20);

    console.log(max, repartition);

    return [repartition.shields, repartition.weapons, repartition.thrusters];
};

export const triangleCoordinates = ({ width: frameWidth, height: frameHeight }, size) => {
    const margin = 10;
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