const { vJoy, vJoyDevice } = require('vjoy');

if (!vJoy.isEnabled()) {
	console.log("vJoy is not enabled.");
	process.exit();
}

export const device = vJoyDevice.create(3);
