import {device} from '../Utils/VJoy'

export function post(req, res) {
	let {number, state} = req.body;

    device.buttons[number].set(state)

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end('');
}