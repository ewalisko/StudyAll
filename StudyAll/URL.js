/**
 * @author ewalisko
 */

function URL() {
	
	this.urlString = document.URL; //retrieves current URL
	
	//used for testing
	//this.urlString = "https://www.studyall.com/Guides/?CSStudyGuide";
}

//used for testing
//function test(){
//	var foo = new URL();
//	foo.getQueryString();
//}

//parses out a string containing the current URLs protocol
URL.prototype.getProtocol = function(){ 
	
	var index;
	var protocol;
	
	index = this.urlString.indexOf("://");
	protocol = this.urlString.slice(0, index) + "://";
	
	//alert(protocol);
	return protocol;
};

//parses out a string containing the current URLs host name
URL.prototype.getHost = function() {

	var index;
	var protocol;
	var host;
	
	index = this.urlString.indexOf("://");
	protocol = this.urlString.slice(index + 3, this.urlString.length);
	host = protocol.slice(0, protocol.indexOf("/"));
	
	//alert(host);
	return host;
};

//parses out a string containing the current URLs path
URL.prototype.getPath = function() {

	var index;
	var protocol;
	var host;
	var path;
	var pathEnd;
	
	index = this.urlString.indexOf("://");
	protocol = this.urlString.slice(index + 3, this.urlString.length);
	host = protocol.lastIndexOf("/");
	path = protocol.slice(host, pathEnd);
	
	//alert(path);
	return path;
};

//parses out a string containing the current URLs information following a "?"
URL.prototype.getQueryString = function() {

	var index;
	var queryString;
	
	index = this.urlString.indexOf("?");
	queryString = "";
	
	if (index != -1) {
		queryString = this.urlString.slice(index+1, this.urlString.length);
	}
	
	//alert(queryString);
	return queryString;
};

//parses out a string containing the current URLs infromation following an "&"
URL.prototype.getValue = function(name) {
	
	var index;
	var slice;
	var start;
	var end;
	var value;
	var match;
	
	match = this.urlString.match(/name/);
	
	if(match == name){
		index = this.urlString.indexOf("value");
		slice = this.urlString.slice(index, this.urlString.length);
		start = slice.indexOf("=");
		stop = slice.indexOf("&");
		
		value = slice.slice(start+1, stop);	
	}
	
	//alert(value);
	return value;
};