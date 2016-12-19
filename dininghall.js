class DiningHall {
	constructor(name, location, hours, meals) {
		this.name = name;
		this.location = location;
		this.hours = hours;
		this.meals = meals;

		this.isopen = false;
		this.meal = '';
		this.endtime = '';
	}
	getEndTime(){
		if (this.endtime != ''){
			var hour = Math.floor(this.endtime / 60);
			var m = 'am';
			if (hour > 12){
				hour -= 12;
				m = 'pm';
			}
			var minutes = this.endtime % 60;
			if (minutes < 10) {
				minutes = '0' + minutes;
			}
			return hour + ':' + minutes + ' ' + m;
		}
		return 'Closed';
	}
	getOpenTime() {
		if (!this.isopen){
			var now = new Date();
			var day = now.getDay();
			var time = (now.getHours()*12)+minutes; //time in minutes
			if (time < this.hours[day][this.hours[day].length-1]){
					time = Math.floor(time/100)*100; //rounds down to neast 100 minutes
					
			} //if current time is less than the closing time of the last meal
			else {
				return 'tommorrow'; //closed until tomorrow
			}
		}
	}
	static getNow() {
		var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		//var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

		var now = new Date();
		//var monthn = months[now.getMonth()];
		var day = now.getDay();
		var dayn = days[day];
		var hours = now.getHours();
		var m = 'am'
		if (hours > 12) {
			hours -= 12;
			m = 'pm'
		}
		var minutes = now.getMinutes();
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		return dayn + ' ' + hours + ':' + minutes + ' ' + m;
	}
	checkOpen(){
		var now = new Date();
		var day = now.getDay();
		var hour = now.getHours();
		var minute = now.getMinutes();
		var time = (hour*60)+minute;
		for(var i = 0; i < this.hours.length; i++) {
			if (this.hours[i] != 0 && day == i) { //if day is today
				for (var k = 0; k < this.hours[i].length; k+=2){
					if ((this.hours[i][k] > 0) && (time > this.hours[i][k]) && (time < this.hours[i][k+1])) { //if is within time bounds
						this.isopen = true;
						this.meal = this.meals[k/2];
						this.endtime = this.hours[i][k+1];
					}
				}
			}
		}
	}
}
//DATA
//end and start hours in minutes for each hall
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
			//main
			function main(){
				cen = new DiningHall('Centennial','East Bank Super Block',cen_hours, cen_meals);
				com = new DiningHall('Comstock','East Bank',com_hours,com_meals);
				fre = new DiningHall('Fresh Food Co. (17th)','17th Ave. Residence Hall', fre_hours, standard_meals);
				pio = new DiningHall('Pioneer','East Bank Super Block', pio_hours, pio_meals);
				san = new DiningHall('Sanford','East Bank Campus',san_hours, standard_meals);
				mid = new DiningHall('Middlebrook','West Bank Campus', mid_hours, standard_meals);
				bai = new DiningHall('Bailey', 'St. Paul Campus', bai_hours, standard_meals);

				var dininghalls = [cen, com, fre, pio, san, mid, bai];
				for (i=0; i < dininghalls.length; i++){
					var hall = dininghalls[i];
					var name = hall.name.substr(0,3).toLowerCase();
					hall.checkOpen();
					if (hall.isopen) {
						var btn = document.getElementById(name + '_status');
						btn.className ='';
						btn.className = 'btn btn-sucess disabled';
						btn.className += ' btn-success';
						btn.innerHTML='Open';
						document.getElementById(name + '_desc').innerHTML = hall.meal + ' until ' + hall.getEndTime();
					}
				}
				document.getElementById('ctime').innerHTML = DiningHall.getNow();
			}
			//repeat every minute
			main();
			setInterval(function(){ main() }, 60000);
