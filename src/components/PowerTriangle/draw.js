export const drawTriangle = (
    context,
    { a, b, c },
    { lineWidth, color } = {}
) => {
    context.beginPath();
    context.moveTo(...a);
    context.lineTo(...b);
    context.lineTo(...c);
    context.closePath();

    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
};

export const drawDot = (context, [x, y], { radius, color }) => {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.closePath();

    context.fillStyle = color;
    context.fill();
}

export const drawTrangleAxis = (
    context,
    { a, b, c, center },
    { lineWidth, color } = {}
) => {
    context.beginPath();
    context.moveTo(...center);
    context.lineTo(...a);
    context.moveTo(...center);
    context.lineTo(...b);
    context.moveTo(...center);
    context.lineTo(...c);
    context.closePath();

    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
};