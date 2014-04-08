/**
 * ElapsedTime.js is a pausable timer.
 * @author Devin Castillo
 */

/**
 * ElapsedTime is the default constructor that 
 * sets initial values for the object.
 * @param number of milliseconds
 */
function ElapsedTime(millis,timeAllowed) {
	this.millis = millis;
	this.timeAllowed = timeAllowed;
	this.paused = false;
	this.holder = document.getElementById("time_holder");
}

/**
 * incease takes in an integer and adds it to this.milli
 * in the default constructor.
 * @return updated milliseconds
 */
ElapsedTime.prototype.increase = function(timeInMillis) {
	this.millis += timeInMillis;
	this.holder.textContent = this.toString(true);
	if((this.millis >= this.timeAllowed) && this.timeAllowed > 0){
		timeExpired();
	}
	return this.millis;
};

/**
 * toString returns the total milliseconds, if the parameter
 * is true then it returns milliseconds in the form hh:mm:ss.ssss.
 * @param an optional boolean value
 * @return formatted milliseconds string
 * @return millseconds as an integer 
 */
ElapsedTime.prototype.toString = function(someBool) {"use strict";
	if (someBool == true) {
		var hours = (this.millis / (3600000));
		var minutes = ((this.millis % 3600000)/60000);
		var seconds = (((this.millis % 3600000) % 60000) / 1000);
		var milliseconds = (this.millis % 1000);
		var format = padNum(2,hours) + ":" + padNum(2,minutes) + ":" + padNum(2,seconds) + "." + padNum(4,milliseconds);
		return format;
	} else {
		return this.millis;
	}
};

/**
 * pause toggles the boolean value of this.paused in the
 * default constructer.
 * @return toggled this.paused
 */
ElapsedTime.prototype.pause = function(){"use strict";
	if(this.paused){
		this.paused = false;
	}
	else{
		this.paused = true;
	}
	return this.paused;
};

/**
 * padNum formats a number with leading zeroes.
 * 
 * @param the length of the string
 * @param the number to be formatted
 * @return the number as a string with leading zeroes
 */
function padNum(length,number){
	var stringNum = "" + Math.floor(number);
	while(stringNum.length < length)
	stringNum = "0" + stringNum;
	return stringNum;
}