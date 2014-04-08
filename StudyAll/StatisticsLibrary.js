/**
 * @author Ross Ellingworth
 *
 * This code complies with the JMU Honor Code Policy
 */

/**
 * This is a funciton that accepts an array of numbers and will calculate and a mean from that array.
 * After calculating the mean it will be returned to be used however the user wishes.
 *
 * @param arrayDataSet - is an array of numbers that will be prossessed.
 * @return Mean - is the final calculated mean of the array of numbers.
 */

function mean(arrayDataSet) {

	//Declarations
	var mean = 0;
	var sum = 0;
	var count = 0;

	//Check if its an Array
	if (Array.isArray(arrayDataSet) && arrayDataSet.length > 0) {

		//Loop to calculate Sum of Array
		for (var i = 0; i <= (arrayDataSet.length - 1); i++) {
			
			if(arrayDataSet[i] != null){
			sum = arrayDataSet[i] + sum;
			count++;
			
			}
		}

	}

	//Calculate Mean
	
	if (count > 0) {
	mean = sum / count;
}
	//Returns the calculated mean
	return mean;
}

/**
 * A function that calculates the standard deviation of a given population when it has been given an array of numbers.
 * After calculating the standard deviation it will return the calculated value.
 *
 * @param arrayDataSet - is an array of numbers that will be prossessed.
 * @return sd - is the final calculated standard deviation of the array of numbers.
 */
function sd(arrayDataSet) {

	//Declarations
	var stDev = 0;
	var xBar = 0;
	var variance = 0;
	var count = 0;

	//Check if passed an array
	if (Array.isArray(arrayDataSet) && arrayDataSet.length > 0) {

		//Calculate Mean
		xBar = mean(arrayDataSet);

		//Calculate Variance
		for (var i = 0; i <= (arrayDataSet.length - 1); i++) {
			if(arrayDataSet[i] != null){
			variance = variance + (Math.pow((arrayDataSet[i] - xBar), 2));
			count++;
}
		}

		variance = (variance / count);

		//Calculate Standard Deviation
		stDev = Math.sqrt(variance);

	}

	//Returns Standard Deviation
	return stDev;
}

/**
 * A function that finds the median of a given data set, when it has been given an array of numbers.
 * After finding the median it will return this value.
 *
 * @param arrayDataSet - is an array of numbers to be processed.
 * @return median - is the return median of the data set.
 */
function median(arrayDataSet) {

	//Declarations
	var median = 0;
	var halfIndex = 0;
	var count = 0;
	var newDataSet = new Array;

	//Check if its an array
	if (Array.isArray(arrayDataSet) && arrayDataSet.length > 0) {

		for(var i = 0; i < arrayDataSet.length; i++){
			
			if(arrayDataSet[i] != null){
			newDataSet[count] = arrayDataSet[i];
			count++;
			}
		}

		//Sort Array
		newDataSet = newDataSet.sort(function(a, b) {
			return a - b;
		});

		//Check for even or odd number
		if ((newDataSet.length % 2) == 0) {
			//Path for even numbered amount

			//Find Median

			halfIndex = (newDataSet.length / 2) -1;

			median = ((newDataSet[halfIndex] + newDataSet[halfIndex + 1]) / 2);
			
		}
			
			 else {
			//Path for odd numbered amount

			//Find Median

			halfIndex = ((newDataSet.length - 1) / 2);

			median = (newDataSet[halfIndex]);

		}

	}

	//Retun Median
	return median;
}

/**
 * A function that converts the numerical numbers into strings.
 * 
 * @param arrayDataSet - accepts an array of numbers
 * @return returns a string of values that have been converted into one long string.
 */
function toString (arrayDataSet){
	
	return "Mean: " + mean(arrayDataSet).toFixed(2) + " sd " + sd(arrayDataSet).toFixed(2) + " Median: " + median(arrayDataSet).toFixed(2);
	
}
