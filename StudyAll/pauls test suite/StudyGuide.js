/**
 * @author Paul Henninger
 * Implementation of a studyguide
 */

/**
 * Represents a Studyguide
 * @constructor
 * @param {string} file - name of xml file that hods studyguide information
 * @param {string} description - description of the studyguide
 * @param {elementID} elementID - the element in the html that holds the studyguide
 */
function StudyGuide(file, description, elementID)
{
   "use strict";
   var  http, i, k, response, nodes, subnodes;   
   
   // Load the cards
   http = new XMLHttpRequest();
   http.open("GET",file, false);
   http.send();
   response = http.responseXML;
   nodes    = response.getElementsByTagName("card");
   
   this.cards  = [nodes.length];
   for (i=0; i<nodes.length; i++)
   {
   	  this.cards[i] = new Card();
      subnodes = nodes[i].childNodes;
      for(k=0; k<subnodes.length; k++)
      {
      	if(subnodes[k].tagName == "question"){
      		this.cards[i].setQuestion(subnodes[k].textContent);
      	}
      	else if(subnodes[k].tagName == "answer"){
      		this.cards[i].setAnswer(subnodes[k].textContent);
      	}
      	else if(subnodes[k].tagName == "hint"){
      		this.cards[i].setHint(subnodes[k].textContent);
      	}
      }  
      this.cards[i].setDifficulty(nodes[i].getAttribute('difficulty'));
      this.cards[i].setCategory(nodes[i].getAttribute('category'));
		
   }
   this.container = document.getElementById(elementID);
   
   this.description = description;
   this.current = 0;
   this.displayHint = false;
   this.displayAnswer = false;
}

/**
 * go to the next question in the studyguide
 */
StudyGuide.prototype.next = function()
{
  if (this.current < this.cards.length-1)
  {
    this.current++;
    this.displayHint = false;
    this.displayAnswer = false;
    this.display();
  }
};
   
/**
 * go to the previous question in the studyguide
 */    
StudyGuide.prototype.previous = function()
{
  if (this.current > 0)
  {
    this.current--;
    this.displayHint = false;
    this.displayAnswer = false;
    this.display();
  }
};

/**
 * display the studyguide
 */
StudyGuide.prototype.display = function()
{
	var display = (this.description + " - Question " + (this.current+1)).bold() + ": " +
					" (difficulty: " + this.cards[this.current].getDifficulty() 
					+ " category: " + this.cards[this.current].getCategory() + ")" +
				   this.cards[this.current].getQuestion();
	if(this.displayHint)
		display += ("\nHint").bold() + ": " + this.cards[this.current].getHint();
    if(this.displayAnswer)
    	display += ("\nAnswer").bold() + ": " + this.cards[this.current].getAnswer();
   this.container.innerHTML = display;
};

/**
 * toggle the hint on and off
 */
StudyGuide.prototype.setDisplayHint = function(displayHint)
{
	this.displayHint = displayHint;
	this.display();
};

/**
 * toggle the answer on and off
 */
StudyGuide.prototype.setDisplayAnswer = function(displayAnswer)
{
	this.displayAnswer = displayAnswer;
	this.display();
};



