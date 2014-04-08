/**
 *@author Ross Ellingworth
 * 
 * This code complies with the JMU Honor Code Policy 
 */

//Test for calculateTotalCorrectDifficulty
module("calculateTotalCorrectDifficulty");
test("CorrectDifficulty", function() {
	  equal (4, calculateTotalCorrectDifficulty([1,1],[1,1],[1,1],[1,1]));
});

test("CorrectDifficulty", function() {
	  equal (4, calculateTotalCorrectDifficulty([1,1,1],[1,1,1],[1,1,1],[1,1,1]));
});

test("CorrectDifficulty", function() {
	  equal (103, calculateTotalCorrectDifficulty([100,100],[1,1],[1,1],[1,1]));
});

test("CorrectDifficulty", function() {
	  equal (0, calculateTotalCorrectDifficulty([100,100],[1,1],[1,1]));
});

//Correct Category
module("calculateTotalCorrectCategory");
test("CorrectCategory", function () {
	  equal (0, calculateTotalCorrectCategory([100,100],[1,1],[1,1],[1,1],[3,3]));
});

test("CorrectCategory", function () {
	  equal (6, calculateTotalCorrectCategory([1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]));
});

test("correctCategory", function (){
	equal (6, calculateTotalCorrectCategory([1,8],[1,4],[1,3],[1,2],[1,2],[1,2]));
});

//Incorrect Difficulty
module("calculateTotalIncorrectDifficulty");
test("InCorrectDifficulty", function() {
	  equal (4, calculateTotalIncorrectDifficulty([1,1],[1,1],[1,1],[1,1]));
});

test("InCorrectDifficulty", function() {
	  equal (4, calculateTotalIncorrectDifficulty([1,1,1],[1,1,1],[1,1,1],[1,1,1]));
});

test("InCorrectDifficulty", function() {
	  equal (103, calculateTotalIncorrectDifficulty([100,100],[1,1],[1,1],[1,1]));
});

test("InCorrectDifficulty", function() {
	  equal (0, calculateTotalIncorrectDifficulty([100,100],[1,1],[1,1]));
});

//Incorrect Category
module("calculateTotalIncorrectCategory");
test("IncorrectCategory", function () {
	  equal (0, calculateTotalIncorrectCategory([100,100],[1,1],[1,1],[1,1],[3,3]));
});

test("IncorrectCategory", function () {
	  equal (6, calculateTotalIncorrectCategory([1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]));
});

test("IncorrectCategory", function (){
	equal (21, calculateTotalIncorrectCategory([1,8],[1,4],[1,3],[1,2],[1,2],[1,2]));
});

//Percentage Calculator
module("Percentage Calculator");
test("Percentage Calculator", function (){
	equal ("50.00%", percentageCalculator(2,2));
});

test("Percentage Calculator", function (){
	equal ("100.00%", percentageCalculator(2,0));
});

test("Percentage Calculator", function (){
	equal ("0.00%", percentageCalculator(0,0));
});


