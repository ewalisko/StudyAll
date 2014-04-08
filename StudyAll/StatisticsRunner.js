/**
 * @author Ross Ellingworth
 *
 * This code complies with the JMU Honor Code Policy
 */


/**
 *This is a class that interacts with the main method and the statistics
 *library functions to build the meaningful statistics for the end user
 */

/**
 *This is a function that caluclates the total correct answers for
 *the various difficulty levels
 *
 * @param difficultyA is an array of the results for the A difficulty level
 * @param difficultyB is an array of the result for the B difficulty level
 * @param difficultyC is an array of the result for the C difficulty level
 * @param difficultyD is an array of the result for the D difficulty level
 */

function calculateTotalCorrectDifficulty(difficultyA, difficultyB, difficultyC, difficultyD) {

	var correct = 0;

	//Check if its an array
	if (Array.isArray(difficultyA) & Array.isArray(difficultyB) & 
		Array.isArray(difficultyC) & Array.isArray(difficultyD)) {

		//catches in case the array didn't initialize properly

		//calculate correct values (0 index of array)

		correct = difficultyA[0] + difficultyB[0] + difficultyC[0] + difficultyD[0];

	}

	return correct;

}

/**
 *This is a function that calculates the total correct answers for
 *the various categories
 *
 * @param categoryKnowledge - returns an array of values for the knowledge category
 * @param categoryComprehension - returns an array of values for the comprehension category
 * @param categoryApplication - returns an array of values for the application category
 * @param categoryAnalysis - returns an array of values for the analysis category
 * @param categorySynthesis - returns an array of values for the synthesis category
 * @param categoryEvauluation - returns an array of values for the evauluation category
 */

function calculateTotalCorrectCategory(categoryKnowledge, categoryComprehension,
									   categoryApplication, categoryAnalysis, 
									   categorySynthesis, categoryEvauluation) {

	var correct = 0;

	//Checks if all the inputs are arrays
	if (Array.isArray(categoryKnowledge) & Array.isArray(categoryComprehension) & 
		Array.isArray(categoryApplication) & Array.isArray(categoryAnalysis) & 
		Array.isArray(categorySynthesis) & Array.isArray(categoryEvauluation)) {

		//calcuates the amount of correct values (zero index)

		correct = (categoryKnowledge[0] + categoryComprehension[0] + 
				   categoryApplication[0] + categoryAnalysis[0] + 
				   categorySynthesis[0] + categoryEvauluation[0]);

	}

	return correct;

}

/**
 *This is a function that calculates the total incorrect answers for the difficulty values
 *
 * @param difficultyA is an array of the results for the A difficulty level
 * @param difficultyB is an array of the result for the B difficulty level
 * @param difficultyC is an array of the result for the C difficulty level
 * @param difficultyD is an array of the result for the D difficulty level
 */

function calculateTotalIncorrectDifficulty(difficultyA, difficultyB, difficultyC, difficultyD) {

	var incorrect = 0;

	//Check if its an array
	if (Array.isArray(difficultyA) & Array.isArray(difficultyB) & 
		Array.isArray(difficultyC) & Array.isArray(difficultyD)) {

		//calculate incorrect values (1 index of array)

		incorrect = difficultyA[1] + difficultyB[1] + difficultyC[1] + difficultyD[1];

	}

	return incorrect;

}

/**
 *This is a function that calculates the total incorrect answers for
 *the various categories
 *
 * @param categoryKnowledge - returns an array of values for the knowledge category
 * @param categoryComprehension - returns an array of values for the comprehension category
 * @param categoryApplication - returns an array of values for the application category
 * @param categoryAnalysis - returns an array of values for the analysis category
 * @param categorySynthesis - returns an array of values for the synthesis category
 * @param categoryEvauluation - returns an array of values for the evauluation category
 */

function calculateTotalIncorrectCategory(categoryKnowledge, categoryComprehension,
										 categoryApplication, categoryAnalysis, 
										 categorySynthesis, categoryEvauluation) {

	var incorrect = 0;

	//Checks if all the inputs are arrays
	if (Array.isArray(categoryKnowledge) & 
		Array.isArray(categoryComprehension) & 
		Array.isArray(categoryApplication) & 
		Array.isArray(categoryAnalysis) & 
		Array.isArray(categorySynthesis) & 
		Array.isArray(categoryEvauluation)) {

		//calcuates the amount of incorrect values

		incorrect = (categoryKnowledge[1] + 
					 categoryComprehension[1] + 
					 categoryApplication[1] + 
					 categoryAnalysis[1] + 
					 categorySynthesis[1] + 
					 categoryEvauluation[1]);

	}

	return incorrect;

}

/**
 * A function that calculates the percentage of an incoming array of numbers.
 *
 * @param correct - a numerical value of the correct answers
 * @param incorrect - a numerical value of the incorrect answers
 * @return percentage - returns the calculated value from the array as a percentage with the appropriate formatting as a string
 */

function percentageCalculator(correct, incorrect) {
	var percentage = 0;

	//Checks to avoid dividing by zero
	if (incorrect + correct != 0) {

		percentage = (correct / (correct + incorrect)) * 100;

	}

	return percentage.toFixed(2) + "%";
}

/**
 * loads up an array of the times
 * 
 * @return time - is an array of the total number of times.
 */
function timeLoader(){
	
	var time = new Array;
	//loads up a time array
	for(var i = 0; i < studyGuide.cards.length; i++){
		
		time[i] = studyGuide.cards[i].cardStats.getTime();
		
		if(time[i] == 0){
			
			time[i] = null;
		}
				
	}
	
	return time;
}

/**
 *This is a function that gets the total hints from the cards
 * 
 * @return hints - gets the total number of hints. 
 */

function getHint(){
	"use strict";
	
	var hints = 0;
	//for loop to calculate all the hints from the cards
	for(var i = 0; i < studyGuide.cards.length; i++){
		
		hints = hints + studyGuide.cards[i].cardStats.getNumHints();
		
	}
	
	return hints;
}

/**
 * A function that will run the sort from the checkboxes and display
 * the correct info to the document
 *
 * @param checkboxValue - The value returned from a clicked checkbox
 * @param checkStatus - Takes in the status of checkage from the desired checkbox
 */

function runningMan(checkboxValue, checkStatus) {

	var totalCorrect = 0;
	var totalIncorrect = 0;
	var totalPercentage = 0;
	var listHolderID = 0;
	var headerID = 0;
	var listID = 0;

	// Aggregate the stats
	totalCorrect = calculateTotalCorrectDifficulty(performanceTracker.getResultsForDifficulty("A"),
												   performanceTracker.getResultsForDifficulty("B"), 
												   performanceTracker.getResultsForDifficulty("C"), 
												   performanceTracker.getResultsForDifficulty("D"));

	totalIncorrect = calculateTotalIncorrectDifficulty(performanceTracker.getResultsForDifficulty("A"), 
													   performanceTracker.getResultsForDifficulty("B"), 
													   performanceTracker.getResultsForDifficulty("C"), 
													   performanceTracker.getResultsForDifficulty("D"));

	totalPercentage = percentageCalculator(totalCorrect, totalIncorrect);

	//check for which button was clicked
	if (checkboxValue == "aggregated") {
		//Check whether its checked or not
		if (checkStatus == true) {

			//Displays the Calculated Values
			listHolderID = document.getElementById("list_holder_total");
			headerID = document.getElementById("total_header");
			headerID.textContent = "Aggregated Results";

			for (var i = 1; i <= 6; i++) {

				listID = document.createElement("li");
				listID.setAttribute("id", ("totalListLine" + i));
				if (i == 1) {
					listID.textContent = "Total Correct Answers: " + totalCorrect;
				} 
				
				else if (i == 2) {
					listID.textContent = "Total Incorrect Answers: " + totalIncorrect;
				} 
				
				else if (i == 3){
					listID.textContent = "Percentage Correct: " + totalPercentage;
				}
				
				else if (i == 4){
					listID.textContent = "Mean Time per Card: " + formatTime(mean(timeLoader()));
					
				}
				
				else if (i == 5){
					listID.textContent = "Median Time per Card: " + formatTime(median(timeLoader()));
					
				}
				
				else if (i == 6){
					listID.textContent = "Standard Deviation of Time: " + formatTime(sd(timeLoader()));
					
				}
				
				else if (i == 6){
					listID.textContent = "Total Number of Hints: " + getHint();
					
				}

				listHolderID.appendChild(listID);
			}
		} 
		
		else if (checkStatus == false) {
			// Clears out the various aggregate fields
			listHolderID = document.getElementById("list_holder_total");
			headerID = document.getElementById("total_header");
			headerID.textContent = "";

			while (listHolderID.firstChild) {

				listHolderID.removeChild(listHolderID.firstChild);
			}

		}
	} 
	
	else if (checkboxValue == "difficulty") {
		//checking for whether it was checked or not
		if (checkStatus == true) {

			//Displays the Calculated Values
			listHolderID = document.getElementById("list_holder_difficulty");
			headerID = document.getElementById("difficulty_header");
			headerID.textContent = "Results Per Difficulty";

			for (var i = 1; i <= 8; i++) {

				listID = document.createElement("li");
				listID.setAttribute("id", ("difficultyListLine" + i));
				if (i == 1) {
					listID.textContent = "Difficulty A Correct Answers: "
										 + performanceTracker.getResultsForDifficulty("A")[0];
				} 
				
				else if (i == 2) {
					listID.textContent = "Difficulty B Correct Answers: "
										 + performanceTracker.getResultsForDifficulty("B")[0];
					
				} 
				
				else if (i == 3){
					listID.textContent = "Difficulty C Correct Answers: "
										 + performanceTracker.getResultsForDifficulty("C")[0];
				}
				
				else if (i == 4){
					listID.textContent = "Difficulty D Correct Answers: "
										 + performanceTracker.getResultsForDifficulty("D")[0];
				}
				
				else if (i == 5){
					listID.textContent = "Incorrect Difficulty A: " +
										 	performanceTracker.getResultsForDifficulty('A')[1];
					
				}
				
				else if (i == 6){
					listID.textContent = "Incorrect Difficulty B: " +
					 					  	performanceTracker.getResultsForDifficulty('B')[1];
					
				}
				
				else if (i == 7){
					listID.textContent = "Incorrect Difficulty C: " +
										 	performanceTracker.getResultsForDifficulty('C')[1];
					
				}
				
				else {
					listID.textContent = "Total Incorrect Difficulty D: " +
										   performanceTracker.getResultsForDifficulty('D')[1];
				}

				listHolderID.appendChild(listID);
			}

		} 
		
		else if (checkStatus == false) {
			// Clears out the various aggregate fields
			listHolderID = document.getElementById("list_holder_difficulty");
			headerID = document.getElementById("difficulty_header");
			headerID.textContent = "";

			while (listHolderID.firstChild) {

				listHolderID.removeChild(listHolderID.firstChild);

		}

	}
	} 
	
	else if (checkboxValue == "category") {
		//Checking if checked or not
		if (checkStatus == true) {
			
			//Displays the Calculated Values
			listHolderID = document.getElementById("list_holder_category");
			headerID = document.getElementById("category_header");
			headerID.textContent = "Results Per Category";

			
			for (var i = 1; i <= 12; i++) {

				listID = document.createElement("li");
				listID.setAttribute("id", ("categoryListLine" + i));
				if (i == 1) {
					listID.textContent = "Category Knowledge Correct Answers: " + 
										  performanceTracker.getResultsForCategory("knowledge")[0];
				} 
				
				else if (i == 2) {
					listID.textContent = "Category Comprehension Correct Answers: " + 
										  performanceTracker.getResultsForCategory("comprehension")[0];
					
				} 
				
				else if (i == 3){
					listID.textContent = "Category Application Correct Answers: " + 
										  performanceTracker.getResultsForCategory("application")[0];
				}
				
				else if (i == 4){
					listID.textContent = "Category Analysis Correct Answers: " + 
										  performanceTracker.getResultsForCategory("analysis")[0];
					
				}
				
				else if (i == 5){
					listID.textContent = "Category Synthesis Correct Answers: " + 
										  performanceTracker.getResultsForCategory("synthesis")[0];
					
				}
				
				else if (i == 6){
					listID.textContent = "Category Evauluation Correct Answers: " + 
										  performanceTracker.getResultsForCategory("evauluation")[0];
					
				}
				
				else if (i == 7){
					listID.textContent = "Incorrect for the Knoweldge Category: " + 
										  performanceTracker.getResultsForCategory("knowledge")[1];
					
				}
				
				else if (i == 8){
					listID.textContent = "Incorrect for the Comprehension Category: " +
										  performanceTracker.getResultsForCategory("comprehension")[1];
					
				}
				
				else if (i == 9){
					listID.textContent = "Incorrect for the Application Category: " + 
										  performanceTracker.getResultsForCategory("application")[1];
					
				}
				
				else if (i == 10){
					listID.textContent = "Incorrect for the Anaylsis Category: " +  
										  performanceTracker.getResultsForCategory("analysis")[1];
					
				}
				
				else if (i == 11){
					listID.textContent = "Incorrect for the Synthesis Category: " +
										  					   performanceTracker.getResultsForCategory("synthesis")[1];
					
				}
				
				else {
					listID.textContent = "Incorrrect for the Evaluation Category: " +  
										  					   performanceTracker.getResultsForCategory("evauluation")[1];
					
				}
				
				listHolderID.appendChild(listID);
				
			}
		

		} 
		
		else if (checkStatus == false) {
			// Clears out the various cateogry fields
			listHolderID = document.getElementById("list_holder_category");
			headerID = document.getElementById("category_header");
			headerID.textContent = "";

			while (listHolderID.firstChild) {

				listHolderID.removeChild(listHolderID.firstChild);

		}


		}
	}


}

/**
 *This is a function that formats the time.
 *  
 * @param {Object} time - is the time to be formatted
 * @return time - formatted time
 */

function formatTime(time){
	"use strict";
	var hours = (time / (3600000));
	var minutes = ((time % 3600000)/60000);
	var seconds = (((time % 3600000) % 60000) / 1000);
	var milliseconds = (time % 1000);
	var format = padNum(2,hours) + ":" + padNum(2,minutes) + ":" + padNum(2,seconds) + "." + padNum(4,milliseconds);
	return format;
}
/**
 *This is a function adds leading zeros 
 * 
 * @param {Object} length - length of needed zeroes
 * @param {Object} number - an integer being formatted
 * @return stringNum - a formatted string
 */
function padNum(length,number){
	var stringNum = "" + Math.floor(number);
	while(stringNum.length < length)
	stringNum = "0" + stringNum;
	return stringNum;
}
