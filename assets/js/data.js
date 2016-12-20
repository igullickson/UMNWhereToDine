//separate file just for the arrays of dining hall meals and open/close hours (in minutes)
var standard_meals = [
	'Breakfast',
	'Cold Breakfast',
	'Lunch or Brunch',
	'Dinner',
]
var cen_hours = [
	[ //Sunday
		-1, -1,
		540, 570,
		570, 840,
		-1, -1,
		990, 1140,
		1140, 1440],
		[//Monday-Thursday
			420, 600,
			600, 660,
			660, 870,
			930, 990,
			990, 1140,
			1140, 1440],
			-1,-1,-1,
			[//Friday
				420, 600,
				600, 660,
				660, 870,
				930, 990,
				990, 1140,
				-1, -1],
				[//Saturday
					-1,-1,
					540, 630,
					630, 840,
					-1, -1,
					990, 1140,
					-1, -1]
				];
				var cen_meals = [
					'Breakfast',
					'Cold Breakfast',
					'Lunch or Brunch',
					'Soup & Sandwhich',
					'Dinner',
					'Late Night'
				];
				var com_hours = [
					[//Sunday
						-1, -1,
						-1, -1,
						660, 810,
						-1, -1,
						990, 1200
					],
					[//Mon-Thurs
						420, 600,
						600, 660,
						660, 810,
						810, 930,
						990, 1200
					],
					-1,-1,-1,
					[//Friday
						420, 600,
						600, 660,
						660, 810,
						810, 930,
						990, 1140
					],
					[//Saturday
						-1,-1,
						-1,-1,
						660, 810,
						-1,-1,
						990, 1140
					]
				];
				var com_meals = [ //centen_meals[0:centen_meals-2]
				'Breakfast',
				'Cold Breakfast',
				'Lunch or Brunch',
				'Soup & Sandwhich',
				'Dinner',
			];
			var fre_hours = [
				[//Sunday
					-1, -1,
					-1, -1,
					540, 810,
					990, 1200
				],
				[//Mon-Thurs
					420, 600,
					600, 660,
					660, 840,
					990, 1200
				],
				-1,-1,-1,
				[//Friday
					420, 600,
					600, 660,
					660, 810,
					990, 1140
				],
				[//Saturday
					-1,-1,
					-1,-1,
					660, 810,
					990, 1140
				]
			];
			var pio_hours = [
				[//Sunday
					-1, -1,
					-1, -1,
					-1, -1,
					-1, -1,
					-1, -1
				],
				[//Mon-Thurs
					420, 570,
					570, 660,
					660, 810,
					810, 930,
					990, 1140
				],
				-1,-1,-1,
				[//Friday
					420, 570,
					570, 660,
					660, 810,
					810, 930,
					990, 1140
				],
				[//Saturday
					-1, -1,
					-1, -1,
					-1, -1,
					-1, -1,
					-1, -1
				]
			];
			var pio_meals = [
				'Breakfast',
				'Cold Breakfast',
				'Lunch or Brunch',
				'Grill, Soup & Salad',
				'Dinner',
			];
			var san_hours = [
				[//Sunday
					-1, -1,
					-1, -1,
					-1, -1,
					-1, -1
				],
				[//Mon-Thurs
					420, 600,
					600, 660,
					660, 840,
					990, 1200
				],
				-1,-1,-1,
				[//Friday
					420, 600,
					600, 660,
					660, 810,
					990, 1140
				],
				[//Saturday
					-1, -1,
					-1, -1,
					660, 810,
					990, 1140
				]
			];
			var mid_hours = [
				[//Sunday
					-1, -1,
					540, 570,
					570, 840,
					990, 1200
				],
				[//Mon-Thurs
					420, 600,
					600, 660,
					660, 840,
					990, 1200
				],
				-1,-1,-1,
				[//Friday
					420, 600,
					600, 660,
					660, 840,
					990, 1140
				],
				[//Saturday
					-1,-1,
					540, 630,
					630, 840,
					990, 1140
				]
			];
			var bai_hours = [
				[//Sunday
					-1, -1,
					540, 600,
					600, 810,
					990, 1200
				],
				[//Mon-Thurs
					420, 540,
					-1, -1,
					660, 810,
					990, 1200
				],
				-1,-1,-1,
				[//Friday
					420, 540,
					-1, -1,
					660, 810,
					990, 1140
				],
				[//Saturday
					-1,-1,
					540, 660,
					660, 810,
					990, 1140
				]
			];
