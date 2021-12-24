import Client from "./Client";

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const calls = [];

export default {
    press: async number => {
        calls.push(
            Promise.all(calls).then(async () => {
                await Client.post("vjoy", { number, state: 1 })
                await timeout(50);
                await Client.post("vjoy", { number, state: 0 })
                await timeout(50);
            })
        )
    }
}