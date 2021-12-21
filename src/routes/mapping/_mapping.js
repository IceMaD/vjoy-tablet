export const mapping = {
	system: {
		selfDestruct: 1,
		eject: 2,
		doors: {
			open: 3,
			close: 4,
			lock: 5,
			unlock: 6
		},
		vtol: {
			on: 7,
			off: 8,
			toggle: 9
		},
		coupled: {
			on: 10,
			off: 11,
			toggle: 12
		},
		landingGears: {
			on: 13,
			off: 14,
			toggle: 15
		},
		gsafe: {
			on: 16,
			off: 17,
			toggle: 18
		},
		esp: {
			on: 19,
			off: 20,
			toggle: 21
		},
		proximityAssist: {
			on: 22,
			off: 23,
			toggle: 24
		},
		cruiseControl: {
			on: 25,
			off: 26,
			toggle: 27
		}
	},
	docking: {
		mode: 28,
		camera: 29,
		request: 30
	},
	scanner: {
		mode: 31,
		ping: 32,
		angle: {
			increase: 33,
			decrease: 34
		}
	},
	combat: {
		shieldFocus: {
			left: 35,
			right: 36,
			up: 37,
			down: 38,
			front: 39,
			back: 40,
			reset: 41
		},
		countermeasures: {
			decoy: {
				increase: 42,
				decrease: 43,
				launch: 44
			},
			noise: {
				launch: 45
			}
		},
		pip: {
			rotate: 46,
			lead: 47,
			lag: 48
		},
		pin: [
			{
				pin: 49,
				lock: 50,
				release: 51
			},
			{
				pin: 52,
				lock: 53,
				release: 54
			},
			{
				pin: 55,
				lock: 56,
				release: 57
			}
		],
		missile: {
			mode: 58,
			fire: 59,
			type: {
				previous: 60,
				next: 61
			},
			armed: {
				increase: 62,
				decrease: 63
			}
		},
		turret: {
			staggering: 64,
			gyro: 65
		}
	},
	quantum: {
		mode: 66,
		travel: 67
	},
	communications: {
		hail: 68,
		notification: {
			accept: 69,
			decline: 70,
			dismiss: 71
		}
	},
	power: {
		flightReady: 72,
		lights: 73,
		switch: {
			all: {
				on: 74,
				off: 75
			},
			shields: {
				on: 76,
				off: 77
			},
			thrusters: {
				on: 78,
				off: 79
			},
			weapons: {
				on: 80,
				off: 81
			}
		},
		triangle: {
			reset: 82,
			shields: {
				increase: 83,
				decrease: 84,
				max: 85
			},
			thrusters: {
				increase: 86,
				decrease: 87,
				max: 88
			},
			weapons: {
				increase: 89,
				decrease: 90,
				max: 91
			}
		}
	}
}