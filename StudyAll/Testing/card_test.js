/**
 * @Author David Kegley
 * 
 * Card.js Test suite
 */

//Build a global card object
var card_object;

module( "initial values", {
  setup: function() {
    card_object = new Card();
  },
  teardown: function() {
      //do nothing 
  }
});
test("initial", function() {
    equal(true, card_object.currentSide);   
});
test("initial", function() {
    equal(null, card_object.question);   
});
test("initial", function() {
    equal(null, card_object.answer);   
});
test("initial", function() {
    equal(null, card_object.hint);   
});
test("initial", function() {
    equal(null, card_object.difficulty);   
});
test("initial", function() {
    equal(null, card_object.category);   
});
test("initial", function() {
    equal(false, card_object.answered);   
});
test("initial", function() {
    propEqual(new CardStats(), card_object.cardStats);   
});



module( "initial values", {
  setup: function() {
    card_object = new Card();
    card_object.setQuestion("this is a question?");
    card_object.setAnswer("this is an answer.");
    card_object.setHint("this is a hint.");
    card_object.setDifficulty("A");
    card_object.setCategory("knowledge");
    card_object.setAnswered(true);
  },
  teardown: function() {
      //do nothing
  }
});
test("Added Properties", function() {
    equal("this is a question?", card_object.getQuestion());
});
test("Added Properties", function() {
    equal("this is an answer.", card_object.getAnswer());
});
test("Added Properties", function() {
    equal("this is a hint.", card_object.getHint());
});
test("Added Properties", function() {
    equal("A", card_object.getDifficulty());
});
test("Added Properties", function() {
    equal("knowledge", card_object.getCategory());
});
test("Added Properties", function() {
    equal(true, card_object.answered);
});

