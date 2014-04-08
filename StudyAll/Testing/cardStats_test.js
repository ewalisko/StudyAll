/**
 * @Author David Kegley
 * 
 * CardStats.js Test suite
 */

//Build a global card object
var cardStats_object;

module( "initial values", {
  setup: function() {
    cardStats_object = new CardStats();
  },
  teardown: function() {
      //do nothing 
  }
});
test("initial values", function() {
    equal(0, cardStats_object.time); 
});
test("initial values", function() {
    equal(0, cardStats_object.numResponses); 
});
test("initial values", function() {
    equal(0, cardStats_object.correct); 
});
test("initial values", function() {
    equal(0, cardStats_object.numHints); 
});
test("initial values", function() {
    equal(null, cardStats_object.difficulty); 
});
test("initial values", function() {
    equal(null, cardStats_object.category); 
});

module( "testing getters and setters", {
  setup: function() {
    cardStats_object = new CardStats();
    cardStats_object.setTime(25);
    cardStats_object.incResponses();
    cardStats_object.incCorrect();
    cardStats_object.incNumHints();
    
  },
  teardown: function() {
      //do nothing 
  }
});
test("updated values", function() {
    equal(25, cardStats_object.getTime());
});
test("updated values", function() {
    equal(1, cardStats_object.getNumResponses());
});
test("updated values", function() {
    equal(1, cardStats_object.getNumHints());
});
