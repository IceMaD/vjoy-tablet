function* indexer() {
    let index = 1;

    while (true) {
        yield index++;
    }
}

// @TODO max this static
let automaticButton = indexer();

export const mapping = {
	system: {
		selfDestruct: automaticButton.next().value,
		eject: automaticButton.next().value,
		doors: {
			open: automaticButton.next().value,
			close: automaticButton.next().value,
			lock: automaticButton.next().value,
			unlock: automaticButton.next().value,
		},
		vtol: {
			on: automaticButton.next().value,
			off: automaticButton.next().value,
			toggle: automaticButton.next().value,
		},
		landingGears: {
			on: automaticButton.next().value,
			off: automaticButton.next().value,
			toggle: automaticButton.next().value,
		},
		gsafe: {
			on: automaticButton.next().value,
			off: automaticButton.next().value,
			toggle: automaticButton.next().value,
		},
		esp: {
			on: automaticButton.next().value,
			off: automaticButton.next().value,
			toggle: automaticButton.next().value,
		},
		proximityAssist: {
			on: automaticButton.next().value,
			off: automaticButton.next().value,
			toggle: automaticButton.next().value,
		},
		cruiseControl: {
			on: automaticButton.next().value,
			off: automaticButton.next().value,
			toggle: automaticButton.next().value,
		},
	},
	docking: {
		mode: automaticButton.next().value,
		camera: automaticButton.next().value,
		request: automaticButton.next().value,
	},
	scanner: {
		mode: automaticButton.next().value,
		ping: automaticButton.next().value,
		angle: {
			increase: automaticButton.next().value,
			decrease: automaticButton.next().value,
		},
	},
	combat: {
		pip: {
			rotate: automaticButton.next().value,
			lead: automaticButton.next().value,
			lag: automaticButton.next().value,
		},
		pin: [
			{
				pin: automaticButton.next().value,
				lock: automaticButton.next().value,
				release: automaticButton.next().value,
			},
			{
				pin: automaticButton.next().value,
				lock: automaticButton.next().value,
				release: automaticButton.next().value,
			},
			{
				pin: automaticButton.next().value,
				lock: automaticButton.next().value,
				release: automaticButton.next().value,
			},
		],
		missile: {
			mode: automaticButton.next().value,
			fire: automaticButton.next().value,
			type: {
				previous: automaticButton.next().value,
				next: automaticButton.next().value,
			},
			armed: {
				increase: automaticButton.next().value,
				decrease: automaticButton.next().value,
			}
		},
		turret: {
			staggering: automaticButton.next().value,
			gyro: automaticButton.next().value,
		}
	},
	quantum: {
		mode: automaticButton.next().value,
		travel: automaticButton.next().value,
	},
	communications: {
		hail: automaticButton.next().value,
		notification: {
			accept: automaticButton.next().value,
			decline: automaticButton.next().value,
			dismiss: automaticButton.next().value,
		}
	},
	power: {
		flightReady: automaticButton.next().value,
		lights: automaticButton.next().value,
		switch: {
			all: {
				on: automaticButton.next().value,
				off: automaticButton.next().value,
			},
			shields: {
				on: automaticButton.next().value,
				off: automaticButton.next().value,
			},
			thrusters: {
				on: automaticButton.next().value,
				off: automaticButton.next().value,
			},
			weapons: {
				on: automaticButton.next().value,
				off: automaticButton.next().value,
			},
		},
		triangle: {
			reset: automaticButton.next().value,
			shields: {
				increase: automaticButton.next().value,
				decrease: automaticButton.next().value,
				max: automaticButton.next().value,
			},
			thrusters: {
				increase: automaticButton.next().value,
				decrease: automaticButton.next().value,
				max: automaticButton.next().value,
			},
			weapons: {
				increase: automaticButton.next().value,
				decrease: automaticButton.next().value,
				max: automaticButton.next().value,
			},
		}
	}
} 