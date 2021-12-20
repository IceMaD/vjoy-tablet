import { readable } from 'svelte/store';

export const debug = readable(
    false,
    function start() {
        return function stop() { };
    }
);
