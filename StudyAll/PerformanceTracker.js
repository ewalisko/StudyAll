/**
 * @author Paul Henninger
 */

/**
 * Represents a Studyguide Performance Tracker
 * @constructor
 * @param {array} difficulty - An array of difficulties.
 * @param {array} category - An array of categories.
 */
function PerformanceTracker(difficulty, category){
	"use strict";
	this.difficulty = difficulty;
	this.category = category;
	this.correct = new Array(2);
	this.incorrect = new Array(2);
	this.timeToAnswer = new Array(2);
	
    this.correct[0] = [difficulty.length];
	this.incorrect[0] = [difficulty.length];
	this.timeToAnswer[0] = [difficulty.length];
	this.correct[1] = [category.length];
	this.incorrect[1] = [category.length];
	this.timeToAnswer[1] = [category.length];
	
	for(var i = 0; i < difficulty.length; i++){ 
		this.correct[0][i] = 0;
		this.incorrect[0][i] = 0;
		this.timeToAnswer[0][i] = 0;
	}
	for(var i = 0; i < category.length; i++){ 
		this.correct[1][i] = 0;
		this.incorrect[1][i] = 0;
		this.timeToAnswer[1][i] = 0;
	}
}

/**
 * Add statistics for a given card.
 * @param {string} difficulty - Difficulty of card.
 * @param {string} category - Categroy of card.
 * @param {integer} timeToAnswer - Time taken to answer card.
 * @param {boolean} correctness - Correctness of answer 
 */
PerformanceTracker.prototype.add = function(difficulty, category,
	                                        timeToAnswer, correctness){
	"use strict";
	for(var i = 0; i < this.difficulty.length; i++){
		if(this.difficulty[i] == difficulty){
			if(correctness)
				this.correct[0][i]++;
			else if(!correctness)
				this.incorrect[0][i]++;
			this.timeToAnswer[0][i] += timeToAnswer;	
			i = this.difficulty.length;		
		}
		else if(i == this.difficulty.length-1)
		{
			this.difficulty.push(difficulty);
			this.correct[0][i+1] = 0;
			this.incorrect[0][i+1] = 0;
			this.timeToAnswer[0][i+1] = 0;
			
			if(correctness)
				this.correct[0][i+1]++;
			else if(!correctness)
				this.incorrect[0][i+1]++;
			this.timeToAnswer[0][i+1] += timeToAnswer;	
			i = this.difficulty.length;		
		}
	}
	for(var i = 0; i < this.category.length; i++){
		if(this.category[i] == category){
			if(correctness)
				this.correct[1][i]++;
			else if(!correctness)
				this.incorrect[1][i]++;
			this.timeToAnswer[1][i] += timeToAnswer;	
			i = this.category.length;		
		}
		else if(i == this.category.length-1)
		{
			this.category.push(category);
			this.correct[1][i+1] = 0;
			this.incorrect[1][i+1] = 0;
			this.timeToAnswer[1][i+1] = 0;
			
			if(correctness)
				this.correct[1][i+1]++;
			else if(!correctness)
				this.incorrect[1][i+1]++;
			this.timeToAnswer[1][i+1] += timeToAnswer;
			i = this.category.length;		
		}
	}
	
	if(this.difficulty.length == 0){ 
		this.difficulty[0] = difficulty;
		this.correct[0][0] = 0;
		this.incorrect[0][0] = 0;
		this.timeToAnswer[0][0] = 0;
		
		if(correctness)
			this.correct[0][0]++;
		else if(!correctness)
			this.incorrect[0][0]++;
		this.timeToAnswer[0][0] += timeToAnswer;	
	}
	if(this.category.length == 0){ 
		this.category[0] = category;
		this.correct[1][0] = 0;
		this.incorrect[1][0] = 0;
		this.timeToAnswer[1][0] = 0;
		
		if(correctness)
			this.correct[1][0]++;
		else if(!correctness)
			this.incorrect[1][0]++;
		this.timeToAnswer[1][0] += timeToAnswer;	
	}
};

/**
 * Returns an array of correct and incorrect answers for a given difficulty
 * @param {string} difficulty - Difficulty of card.
 * @return {array} array - Array containing correct and incorrect answers
 * 						   for a given difficulty
 */
PerformanceTracker.prototype.getResultsForDifficulty = function(difficulty){
	"use strict";
	var array = [0, 0];
	for(var i = 0; i < this.difficulty.length; i++){
		if(this.difficulty[i] == difficulty){ 
			array[0] = this.correct[0][i];
			array[1] = this.incorrect[0][i];
		}
	}
	return array;
};

/**
 * Returns an array of correct and incorrect answers for a given category
 * @param {string} category - Category of card.
 * @return {array} array - Array containing correct and incorrect answers
 * 						   for a given category
 */
PerformanceTracker.prototype.getResultsForCategory = function(category){
	"use strict";
	var array = [0, 0];
	for(var i = 0; i < this.category.length; i++){
		if(this.category[i] == category){ 
			array[0] = this.correct[1][i];
			array[1] = this.incorrect[1][i];
		}
	}
	return array;
};
