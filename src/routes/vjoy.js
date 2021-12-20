import {device} from '../Utils/VJoy'

const contents = JSON.stringify({
    ack: true
});

export function post(req, res) {
	let {number, state} = req.body;

    device.buttons[number].set(state)

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}