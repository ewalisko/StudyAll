/**
 * @author David Kegley
 * 
 * This is the Iterator class for navigating collections in the StudyAll Application.
 * 
 * This work complies with the JMU Honor Code.
 */


/**
 * the iterator constructor
 * 
 * array - the array to iterate in
 */
function Iterator(array) {
    "use strict";
    
    this.i = 0;
    this.array = array;
    this.currentItem = this.array[this.i];
    this.nextItem = this.array[this.i+1];
}

/**
 * true if the array has another item after the current index
 */
Iterator.prototype.hasNext = function() {
    "use strict";
    
    if ( this.nextItem !== null) {
        return true;
    }
    else {
        return false;
    }
};

/**
 * move to the next item in the array
 */
Iterator.prototype.next = function() {
    "use strict";
    
    this.i += 1;
    this.currentItem = this.array[this.i];
    this.nextItem = this.array[this.i+1];
};

/**
 * Go to the beginning of the array 
 */
Iterator.prototype.reset = function() {
    "use strict";
    
    this.i = 0;
    this.currentItem = this.array[this.i];
    this.nextItem = this.array[this.i+1];
};




//Test 
function runTest() {
    "use strict";
    
	var array = ["butt", "poo", "foo", "bar"], iterator = new Iterator(array);
	
	while ( iterator.currentItem !== null ) {
		alert(iterator.currentItem);
		iterator.next();
	}
	
	if (!iterator.hasNext() ) {
		alert("Reached last element");
	}
		
}

