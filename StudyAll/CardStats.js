/**
 * @author David Kegley
 * 
 * Implementation of the CardStats class for studyAll. Each cardStats object contains the statistics for a card
 * of a studyguide. Every CardStats object in a field of a Card object.
 * 
 * This work complies with the JMU Honor Code.
 */

/**
 * The CardStats object for holding statistics for that card of a study guide
 * 
 * Setters and Getters
 */
function CardStats() {
    "use strict";
    
    this.time = 0;
    this.numResponses = 0;
    this.correct = 0;
    this.numHints = 0;
    this.difficulty = null;
    this.category = null;
}

CardStats.prototype.setTime = function(time) {
    "use strict";
    
    this.time = time;
};

CardStats.prototype.incResponses = function() {
    "use strict";
    
    this.numResponses += 1;
};

CardStats.prototype.incCorrect = function() {
    "use strict";
    
    this.correct += 1;
};

CardStats.prototype.incNumHints = function() {
    "use strict";
    
    this.numHints += 1;
};

CardStats.prototype.getTime = function() {
    "use strict";
    
    return this.time;
};

CardStats.prototype.getNumResponses = function() {
    "use strict";
    
    return this.numResponses;
};

CardStats.prototype.getNumHints = function() {
    "use strict";
    
    return this.numHints;
};


