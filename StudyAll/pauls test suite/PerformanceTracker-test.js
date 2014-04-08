var categories = ["knowledge", "comprehension", "analysis", "synthesis", "evaluation"];
var difficulties = ["A", "B", "C", "D"];
var pt = new PerformanceTracker(difficulties, categories);
pt.add("A", "knowledge", 0, true);
pt.add("B", "knowledge", 0, true);
pt.add("B", "comprehension", 0, false);
pt.add("C", "comprehension", 0, false);
pt.add("D", "analysis", 0, false);
pt.add("D", "synthesis", 0, false);
pt.add("D", "evaluation", 0, false);
pt.add("D", "evaluation", 0, true);


var results = pt.getResultsForDifficulty("A");
var expectedResults = [1, 0];

module("Difficulty Tests");
test("A", function() {
      deepEqual(results, expectedResults);      
});

results = pt.getResultsForDifficulty("B");
expectedResults = [1, 1];
test("B", function() {
      deepEqual(results, expectedResults);      
});

results = pt.getResultsForDifficulty("C");
expectedResults = [0, 1];
test("C", function() {
      deepEqual(results, expectedResults);      
});

results = pt.getResultsForDifficulty("D");
expectedResults = [1, 3];
test("D", function() {
      deepEqual(results, expectedResults);      
});

module("Category Tests");
results = pt.getResultsForCategory("knowledge");
expectedResults = [2, 0];
test("knowledge", function() {
      deepEqual(results, expectedResults);      
});

results = pt.getResultsForCategory("comprehension");
expectedResults = [0, 2];
test("comprehension", function() {
      deepEqual(results, expectedResults);      
});

results = pt.getResultsForCategory("analysis");
expectedResults = [0, 2];
test("analysis", function() {
      deepEqual(results, expectedResults);      
});

results = pt.getResultsForCategory("synthesis");
expectedResults = [0, 1];
test("synthesis", function() {
      deepEqual(results, expectedResults);      
});

results = pt.getResultsForCategory("evaluation");
expectedResults = [1, 1];
test("evaluation", function() {
      deepEqual(results, expectedResults);      
});

