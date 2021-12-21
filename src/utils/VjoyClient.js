import Client from "./Client";

export default {
    press: async number => {
        await Client.post("vjoy", { number, state: 1 })

        setTimeout(() => {
            Client.post("vjoy", { number, state: 0 })
        }, 100);  
    }
}