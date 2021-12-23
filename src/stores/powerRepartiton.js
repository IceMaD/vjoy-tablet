import { writable } from 'svelte/store';
import { tweened } from "svelte/motion";
import { quadOut as easing } from "svelte/easing";

const DEFAULT = [100 / 3, 100 / 3, 100 / 3];

const { subscribe, set } = writable(DEFAULT);
const { subscribe: subscribeAnimated, set: setAnimated } = tweened(DEFAULT, {
    duration: 200,
    easing,
});

subscribe(repartition => setAnimated(repartition))

export const powerRepartiton = {
    subscribe,
    set,
    reset: () => set(DEFAULT),
};

export const animatedPowerRepartiton = {
    subscribe: subscribeAnimated,
};


