import { readable } from 'svelte/store';

const colors = {
    cyan: '#16a085',
    green: '#27ae60',
    blue: '#2980b9',
    violet: '#8e44ad',
    yellow: '#f39c12',
    orange: '#d35400',
    red: '#c0392b',
    white: '#ffffff',
    lightgrey: '#bdc3c7',
    grey: '#7f8c8d',
    darkgrey: '#2c3e50',
} 

export const theme = readable(colors,
    function start() {
        return function stop() {};
    }
);
