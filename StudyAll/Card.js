/**
 * @author David Kegley
 * Implementation of the card object for StudyAll. Every Card object contains a cardStats object and information for each
 * card in the studyguide.
 * 
 * This work complies with the JMU Honor Code.
 */


/**
 * The Card object that make up studyguides and a CardStats object
 */
function Card() {
    "use strict";
    
    this.currentSide = true;
    this.question = null;
    this.answer = null;
    this.hint = null;
    this.difficulty = null;
    this.catergory = null;
    this.cardStats = new CardStats();
    this.answered = false;
}

/**
 * Get is answered
 */
Card.prototype.getAnswered = function() {
    "use strict";
    
    return this.answered;
};

/**
 * set answered
 */
Card.prototype.setAnswered = function(answered) {
    "use strict";
    
    this.answered = answered;
};

/**
 * Get the question
 */
Card.prototype.getQuestion = function() {
    "use strict";
    
    return this.question;
};

/**
 * set the question field
 */
Card.prototype.setQuestion = function(question) {
    "use strict";
    
    this.question = question;
};

/**
 * Get the Answer
 */
Card.prototype.getAnswer = function() {
    "use strict";
    
    return this.answer;
};

/**
 * set the answer field
 */
Card.prototype.setAnswer = function(answer) {
    "use strict";
    
    this.answer = answer;
};

/**
 * get the hint field
 * 
 */
Card.prototype.getHint = function() {
    "use strict";
    
    if (this.hint == null) {
        this.hint = "No hint available";
    }
    
    return this.hint;
};

/**
 * set the hint field
 */
Card.prototype.setHint = function(hint) {
    "use strict";
    
    this.hint = hint;
};

/**
 * get the card difficulty
 */
Card.prototype.getDifficulty = function() {
    "use strict";
    
    return this.difficulty;
};

/**
 * set card difficulty
 */
Card.prototype.setDifficulty = function(difficulty) {
    "use strict";
    
    this.difficulty = difficulty;
    this.cardStats.difficulty = difficulty;
};

/**
 * get the category
 */
Card.prototype.getCategory = function() {
    "use strict";
    
    return this.category;
};

/**
 * set the category field
 */
Card.prototype.setCategory = function(category) {
    "use strict";
    
    this.category = category;
    this.cardStats.category = category;
};