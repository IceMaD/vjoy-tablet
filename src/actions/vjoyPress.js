import VjoyClient from "../utils/VjoyClient";

export function vjoyPress(node, { number, duration = 0}) {
    let timer, durationMillisecond = duration * 1000;

    const start = () => {
        timer = setTimeout(() => {
            VjoyClient.press(number);
        }, durationMillisecond);
    };

    const stop = () => {
        clearTimeout(timer)
    };

    node.oncontextmenu = () => false

    node.addEventListener('pointerdown', start);
    // node.addEventListener('touchstart', start);
    node.addEventListener('pointerup', stop);
    // node.addEventListener('touchend', stop);

    return {
        update(newNumber, newDuration) {
            durationMillisecond = newDuration * 1000;
            number = newNumber;
        },
        destroy() {
            node.removeEventListener('pointerdown', start);
            // node.removeEventListener('touchstart', start);
            node.removeEventListener('pointerup', stop);
            // node.removeEventListener('touchend', stop);
        }
    };
}