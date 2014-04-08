/**
 *@author Ross Ellingworth
 * 
 * This code complies with the JMU Honor Code Policy 
 */

//Test for the mean
var emptyArray=[];
var toStringOutputTest = "Mean: " + "675.60" + " sd " + "1193.09" + " Median: " + "6.00";
var toStringOutputTest2 = "Mean: " + "0.00" + " sd " + "0.00" + " Median: " + "0.00";

module("Mean Tests");
test("Mean", function() {
	  equal(3.5, mean([1,1,2,10]).toFixed(1));
});

test("Mean", function() {
	 equal(1, mean([1]));
});

test("Mean", function() {
	 equal(2, mean([2,2,2,2,2,2,2,2,2,2,2,2]));
});

test("Mean", function() {
	 equal(0, mean(emptyArray));
});

test("Mean", function() {
	 equal(22.5, mean([null, 30, 15, null]).toFixed(1));
});

//Test for the sd
module("Standard Deviation Tests");
test("sd", function() {
	 equal(11.18, sd([10,20,30,40]).toFixed(2));
});

test("sd", function() {
	 equal(0, sd(emptyArray).toFixed(0));
});

test("sd", function() {
	 equal(0.5, sd([1,2]).toFixed(1));
});

test("sd", function() {
	 equal(0.5, sd([1,2]).toFixed(1));
});

test("sd", function() {
	 equal(0.5, sd([null, null, 1, 2,null]).toFixed(1));
});


//Test for the Median
module("Median Test");
test("Median", function() {
	 equal(4.5, median([1,2,4,5,6,3,8,7]).toFixed(1));
});

test("Median", function() {
	 equal(0, median(emptyArray).toFixed(0));
});

test("Median", function() {
	 equal(6, median([3049,321,6,1,1]).toFixed(1));
});

test("Median", function() {
	 equal(6, median([null,null,3049,321,6,1,1,null]).toFixed(1));
});

//Test for the toString
module("toString Test");
test("toString", function(){
	 equal(toStringOutputTest, toString([3049,321,6,1,1]));
});

test("toString", function(){
	 equal(toStringOutputTest2, toString(emptyArray));
});

