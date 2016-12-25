//dininghall class written with prototype syntax
var standard_meals=['Breakfast','Cold Breakfast','Lunch or Brunch','Dinner',]
var cen_hours=[[-1,-1,540,570,570,840,-1,-1,990,1140,1140,1440],[420,600,600,660,660,870,930,990,990,1140,1140,1440],-1,-1,-1,[420,600,600,660,660,870,930,990,990,1140,-1,-1],[-1,-1,540,630,630,840,-1,-1,990,1140,-1,-1]];var cen_meals=['Breakfast','Cold Breakfast','Lunch or Brunch','Soup & Sandwhich','Dinner','Late Night'];var com_hours=[[-1,-1,-1,-1,660,810,-1,-1,990,1200],[420,600,600,660,660,810,810,930,990,1200],-1,-1,-1,[420,600,600,660,660,810,810,930,990,1140],[-1,-1,-1,-1,660,810,-1,-1,990,1140]];var com_meals=['Breakfast','Cold Breakfast','Lunch or Brunch','Soup & Sandwhich','Dinner',];var fre_hours=[[-1,-1,-1,-1,540,810,990,1200],[420,600,600,660,660,840,990,1200],-1,-1,-1,[420,600,600,660,660,810,990,1140],[-1,-1,-1,-1,660,810,990,1140]];var pio_hours=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[420,570,570,660,660,810,810,930,990,1140],-1,-1,-1,[420,570,570,660,660,810,810,930,990,1140],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]];var pio_meals=['Breakfast','Cold Breakfast','Lunch or Brunch','Grill, Soup & Salad','Dinner',];var san_hours=[[-1,-1,-1,-1,660,810,990,1140],[420,600,600,660,660,840,990,1200],-1,-1,-1,[420,600,600,660,660,810,990,1140],[-1,-1,-1,-1,660,810,990,1140]];var mid_hours=[[-1,-1,540,570,570,840,990,1200],[420,600,600,660,660,840,990,1200],-1,-1,-1,[420,600,600,660,660,840,990,1140],[-1,-1,540,630,630,840,990,1140]];var bai_hours=[[-1,-1,540,600,600,810,990,1200],[420,540,-1,-1,660,810,990,1200],-1,-1,-1,[420,540,-1,-1,660,810,990,1140],[-1,-1,540,660,660,810,990,1140]]
//utility functions
function minutesToHours(min){
	var hour = Math.floor(min / 60);
	var m = 'am';
	if (hour > 12){
		hour -= 12;
		m = 'pm';
	}
	var minutes = min % 60;
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	return hour + ':' + minutes + ' ' + m;
}
function getNow() {
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	//var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	var now = new Date();
	//var monthn = months[now.getMonth()];
	var day = now.getDay();
	var dayn = days[day];
	return dayn + ' ' + minutesToHours((now.getHours()*60)+now.getMinutes());
}
//dining hall object class
var DiningHall = function(name, location, hours, meals){
	this.name = name;
	this.location = location;
	this.hours = hours;
	this.meals = meals;

	this.isopen = false;
	this.meal = '';
	this.endtime = '';

	this.day = 0; //current day
	this.time = 0; //current time in minutes
}
DiningHall.prototype.setNow = function() {
	var now = new Date();
	this.day = now.getDay();
	if (this.day > 0 && this.day < 5) { //mon-thurs have same dining hours
		this.day = 1;
	}
	this.time = (now.getHours()*60)+now.getMinutes();
}
DiningHall.prototype.getEndTime = function(){
	if (this.endtime != ''){
		return minutesToHours(this.endtime);
	}
	return 'Closed';
}
DiningHall.prototype.getOpenTime = function() {
	if (!this.isopen){
		if (this.time < this.hours[this.day][this.hours[this.day].length-1]){
			for (var i = 0; i < this.hours[this.day].length; i+=2){
				var opentime = this.hours[this.day][i];
				if (opentime > 0 && this.time < opentime){
					return minutesToHours(opentime);
				}
			}
		} //if current time is less than the closing time of the last meal
		else {
			return 'tommorrow'; //closed until tomorrow
		}
	}
}
DiningHall.prototype.checkOpen = function(){
	for(var i = 0; i < this.hours.length; i++) {
		if (this.hours[i] != 0 && this.day == i) { //if day is today
			for (var k = 0; k < this.hours[i].length; k+=2){
				if ((this.hours[i][k] > 0) && (this.time > this.hours[i][k]) && (this.time < this.hours[i][k+1])) { //if is within time bounds
					this.isopen = true;
					this.meal = this.meals[k/2];
					this.endtime = this.hours[i][k+1];
				}
			}
		}
	}
}
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
		hall.setNow();
		hall.checkOpen();
		if (hall.isopen) {
			var btn = document.getElementById(name + '_status');
			btn.className ='';
			btn.className = 'btn btn-sucess disabled';
			btn.className += ' btn-success';
			btn.innerHTML='Open';
			document.getElementById(name + '_desc').innerHTML = hall.meal + ' until ' + hall.getEndTime();
		}
		else {
			document.getElementById(name + '_desc').innerHTML = 'Closed until ' + hall.getOpenTime() + '.';
		}
	}
	document.getElementById('ctime').innerHTML = getNow();
}
//repeat every minute
main();
setInterval(function(){ main() }, 60000);
