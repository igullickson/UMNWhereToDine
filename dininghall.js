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
						this.endtime = this.hours[i][k+2];
					}
				}
			}
		}
	}

}
//DATA
var centen_hours = [
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
				var centen_meals = [
					'Breakfast',
					'Cold Breakfast',
					'Lunch or Brunch',
					'Soup & Sandwhich',
					'Dinner',
					'Late Night'
				];
				var com_hours = [


				];
				//main
				function main(){
					centen = new DiningHall('Cenntennial','East Bank Super Block',centen_hours, centen_meals);
					centen.checkOpen();
					if (centen.isopen) {
						var btn = document.getElementById('centen_status');
						btn.className ='';
						btn.className = 'btn btn-sucess disabled';
						btn.className += ' btn-success';
						btn.innerHTML='Open';
						document.getElementById('centen_desc').innerHTML = centen.meal + ' until ' + centen.getEndTime();
					}
					document.getElementById('ctime').innerHTML = DiningHall.getNow();
				}

				//repeat every minutes
				main();
				setInterval(function(){ main() }, 60000);

				// document.write(DiningHall.getNow());
				// c = new DiningHall('Centennial','East Bank Superblock', centen_hours, centen_meals);
				// document.write('<br>');
				// document.write(c.name);
				// document.write('<br>');
				// c.checkOpen();
				// document.write(c.isopen+c.meal);
