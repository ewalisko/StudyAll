/**
 * @author Paul Henninger
 */

/**
 * Represents a Guide Directory
 * @constructor
 * @param {string} directory - The URL of the XML file that contains the
 * 							   directory information
 */
function GuideDirectory(directory){
	this.directory = directory;
}

/**
 * Get an array of descriptions for a directory
 * @return {string[]} an array of descriptions
 */
GuideDirectory.prototype.getDescriptions = function(){
   var  http, response, nodes, i, studyGuideDescription = [];
   http = new XMLHttpRequest();
   http.open("GET",this.directory, false);
   http.send();
   response = http.responseXML;
   nodes = response.getElementsByTagName("entry");
   
   for (i=0; i<nodes.length; i++)
   {
   	  studyGuideDescription[i] = nodes[i].getAttribute('description');
   }
   return studyGuideDescription;
};


/**
 * Get the xml file corresponding to the given description
 * @param {string} description - Difficulty of card.
 * @return {string} the xml file for the given description
 */
GuideDirectory.prototype.getStudyGuide = function(description){
   var  http, response, nodes, i;
   http = new XMLHttpRequest();
   http.open("GET",this.directory, false);
   http.send();
   response = http.responseXML;
   nodes = response.getElementsByTagName("entry");
   
   for (i=0; i<nodes.length; i++)
   {
   	  if(description == nodes[i].getAttribute('description'))
   	  	  return nodes[i].getAttribute('file'); 	  
   }
};
