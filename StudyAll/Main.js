/**
 * @author Paul Henninger
 * 
 * Edits by: David Kegley
 * Ross Ellingworth
 */

var studyGuide;
var performanceTracker;
var studyGuideDescription = [];
var studyGuideFile = [];
var guideDirectory;
var container;
var current = 0;
var url;

/**
 * timer setup 
 */
var timer;
var interval;
var lastTime = 0;



/**
 * Initial setup of program
 */

function init()
{
   "use strict";
   var i, file;
   guideDirectory = new GuideDirectory("ComputerScienceJMU.xml");
   url = new URL();
   timer = new ElapsedTime(0, 0);
   
   studyGuideDescription = guideDirectory.getDescriptions();
   for (i=0; i<studyGuideDescription.length; i++)
   {
      var selectGuideMenu = document.getElementById("selectGuide");
      var optionElement = document.createElement("option");
      
      studyGuideFile[i] = guideDirectory.getStudyGuide(studyGuideDescription[i]);
      
      optionElement.value = i;
      optionElement.text = studyGuideDescription[i];
      selectGuideMenu.appendChild(optionElement);
   }
   
   //container = document.getElementById('listHolder');
   
   registerHandlers();
   
   file = url.getQueryString();
   
   for (i=0; i<studyGuideFile.length; i++)
   {
        if(file == studyGuideFile[i])
        {
             visible('sidebar_iteration', 'sidebar_home'); 
             visible('pageViewStudyguide', 'pageHome');
             visible('answer_button', null);
             visible('hint_button', null);
             loadGuide(i);
        }
   }
}

/**
 * display the selected studyguide
 */
function display()
{
	studyGuide.display();
}

/**
 * go to the next card in a studyguide
 */
function nextCard()
{
	studyGuide.next();
}

/**
 * go to the previous card in a studyguide
 */
function previousCard()
{
	studyGuide.previous();
}

/**
 * toggle view hint on and off
 */
function hint(hint)
{
	studyGuide.setDisplayHint(hint);
}

/**
 * toggle view answer on and off
 */
function answer(answer)
{
	studyGuide.setDisplayAnswer(answer);
}

/**
 * set the current studyguide to be viewed
 * @param {integer} newCurrent - set which studyguide is to be viewed
 */


/**
 * get the current selected guide
 * @return {integer} studyGuideNum - index to identify studyguide
 */
function getCurrentGuide()
{
	var option = document.getElementById("selectGuide").value;
	var num = parseFloat(option);
	return num;
}

/**
 * A function that runs all the freaking javascript events
 *  
 */

function registerHandlers() {
    "use strict";
    
    /**
     * sidebar buttons - HOME
     */
    var start_studying_home_button;
    start_studying_home_button = document.getElementById("startStudying_home");
    start_studying_home_button.addEventListener("click", function(){ 
		 visible('sidebar_iteration', 'sidebar_home');                                               
	     visible('pageViewStudyguide', 'pageHome');
	     visible('answer_button', null);
	     visible('hint_button', null);                                                                    
	     visible('nextCard_button', null);
		 visible('previousCard_button', null);
		 visible(null, 'correct_button');	
		 visible(null, 'incorrect_button');		
			
	     loadGuide(getCurrentGuide()); }, true);
    
    var options_home_button;
    options_home_button = document.getElementById("options_home");
    options_home_button.addEventListener("click", function(){ 
		 visible('sidebar_options', 'sidebar_home');
         visible('pageViewOptions', 'pageHome');}, true);
    var exit_home_button;
    exit_home_button = document.getElementById("exit_home");
    exit_home_button.addEventListener("click", function() { 
		 exitStudyall();}, true);
    
                                                            

    /**
     * sidebar buttons - ITERATION
     */
    var home_iteration_button;
    home_iteration_button = document.getElementById("home_iteration_button");
    home_iteration_button.addEventListener("click", function() { 
    	visible('sidebar_home', 'sidebar_iteration');
	    visible('pageHome', 'pageViewStudyguide');
	    visible(null, 'page_result_screen');}, true);
    
    var pause_iteration_button;
    pause_iteration_button = document.getElementById("pause_iteration_button");
    pause_iteration_button.addEventListener("click", function() {   
		timer.pause(); 
		if(timer.paused){
			clearInterval(interval);
			visible(null, 'nextCard_button');
			visible(null, 'previousCard_button');
			visible(null, 'correct_button');	
			visible(null, 'incorrect_button');
			visible(null, 'hint_button');
			visible(null, 'answer_button');																
		}
		else{
			interval = setInterval(function() {
				timer.increase(51); }, 51);
			if(studyGuide.displayAnswer && 
				!studyGuide.cards[studyGuide.current].answered){
				visible('correct_button', null);	
				visible('incorrect_button', null);
			}
			else if(studyGuide.displayAnswer && 
				studyGuide.cards[studyGuide.current].answered){
				
				visible('nextCard_button', null);
				visible('previousCard_button', null);
			}
			else if(!studyGuide.displayAnswer){
			
				visible('hint_button', null);
				visible('answer_button', null);
				visible('nextCard_button', null);
				visible('previousCard_button', null);
			}

		}
    }, true);
    
//    var stop_iteration_button;
//    var exit_iteration_button;

    /**
     * sidebar buttons - OPTIONS
     */
    var home_options_button;
    home_options_button = document.getElementById("home_options_button");
    home_options_button.addEventListener("click", function() { 
    	visible('sidebar_home', 'sidebar_options');
        visible('pageHome', 'pageViewOptions');}, true);
//    var exit_options_button;

    /**
     * pageViewStudyguide - buttons
     */
    
    
    //Hint Button
    var hint_viewGuide_button; 																
    hint_viewGuide_button = document.getElementById("hint_button");
    hint_viewGuide_button.addEventListener("click", function() { 
		if(studyGuide.displayHint){
		 	hint(false);
		 }
		 else{
		 	hint(true);
		 	studyGuide.cards[studyGuide.current].cardStats.
		 										incNumHints();
		 }}, true);
  //Answer Button
    var answer_viewGuide_button;
    answer_viewGuide_button = document.getElementById("answer_button");
    answer_viewGuide_button.addEventListener("click", function() { 
	   visible('correct_button', 'answer_button');
       visible('incorrect_button', 'hint_button');
       visible(null, 'nextCard_button');
       visible(null, 'previousCard_button');
       answer(true); 
       cardTime();
       hint(false); }, true);
   
   //Previous Card Button
    var previous_viewGuide_button;
    previous_viewGuide_button = document.getElementById("previousCard_button");
    previous_viewGuide_button.addEventListener("click", function() { 
		 previousCard();
	     if(studyGuide.cards[studyGuide.current].getAnswered() == false){
	     	visible('answer_button', null);
	     	visible('hint_button', null);
	     	hint(false);
	     	answer(false);
	     }
	     else{                                                 
	 		visible(null, 'answer_button');
	 		visible(null, 'hint_button');
	 		answer(true);
	 		hint(false);
	 	 }}, true);
                                                              
    
    //Next Card Button
    var next_viewGuide_button;
    next_viewGuide_button = document.getElementById("nextCard_button"); 
    next_viewGuide_button.addEventListener("click", function() { nextCard();
	  if(
	  	studyGuide.cards[studyGuide.current].getAnswered() == false){
         	visible('answer_button', null);
         	visible('hint_button', null);
         	hint(false);
         	answer(false);
         }
         else{                                                              
     		visible(null, 'answer_button');
     		visible(null, 'hint_button');
     		answer(true);
     		hint(false);
     	 }}, true);
    
   //Correct Button                                                              
   var correct_viewGuide_button;
   correct_viewGuide_button = document.getElementById("correct_button"); 
   correct_viewGuide_button.addEventListener("click", function() {
       visible('nextCard_button', 'correct_button');
       visible('previousCard_button', 'incorrect_button');
       answerQuestion(true, 0);}, true);                                                              

   //Incorrect Button
   var incorrect_viewGuide_button;
   incorrect_viewGuide_button = document.getElementById("incorrect_button"); 
   incorrect_viewGuide_button.addEventListener("click", function() {
        visible('nextCard_button', 'correct_button');
        visible('previousCard_button', 'incorrect_button');
        answerQuestion(false, 0);}, true); 
   
   //Done Button                                                             
   var done_viewGuide_button;
   done_viewGuide_button = document.getElementById("done_button");
   done_viewGuide_button.addEventListener("click", function() {
        visible('page_result_screen', 'pageViewStudyguide');
        clearInterval(interval);	
        }, true);
                                                                
   //Checkbox Total Results
   var total_correct_checkbox;
   total_correct_checkbox = document.getElementById("Total_Correct_Checkbox");
   total_correct_checkbox.addEventListener("change", function() {
	  runningMan(total_correct_checkbox.value,
				total_correct_checkbox.checked);}, true); 
   
   //Checkbox Sort Difficulty
   var sort_difficulty;
   sort_difficulty = document.getElementById("Sort_Difficulty_Checkbox");
   sort_difficulty.addEventListener("change", function() {
	  runningMan(sort_difficulty.value,
				 sort_difficulty.checked);}, true);
   
   //Checkbox Sort Category
   var sort_category;
   sort_category = document.getElementById("Sort_Category_Checkbox");
   sort_category.addEventListener("change", function() {
	  runningMan(sort_category.value,
	  			sort_category.checked);}, true);
   
     
     /**
      * Options menu listeners 
      */   
   var category_option;
   category_option = document.getElementById("category_option");
   category_option.addEventListener("click", function() {
     	disableEnableOption("selected");}, true);
                                                     
   var default_option;
   category_option = document.getElementById("default_option");
   category_option.addEventListener("click", function() {
 		disableEnableOption(null);}, true);                                            

   var random_option;
   category_option = document.getElementById("random_option");
   category_option.addEventListener("click", function() {
     	disableEnableOption(null);}, true);
   
   var dif_inc_option;
   category_option = document.getElementById("dif_inc_option");
   category_option.addEventListener("click", function() {
         disableEnableOption(null);}, true);
                                                     
   var dif_dec_option;
   category_option = document.getElementById("dif_dec_option");
   category_option.addEventListener("click", function() {
     	 disableEnableOption(null);}, true);                                                   

}

/**
 * This is a function that loads the study guides and intializes the performance tracker
 *
 */

function loadGuide(i) {
        studyGuide = new StudyGuide(studyGuideFile[i], 
        				 studyGuideDescription[i], "holder");
        var categories = ["knowledge", "comprehension", "analysis", 
        				  "synthesis", "evaluation"];
        var difficulties = ["A", "B", "C", "D"];
        
    	lastTime = 0;
        applyOptions();
        display();
        performanceTracker = new PerformanceTracker(difficulties, categories); 
}


/**
 *Options implementation 
 * 
 * @author kegleydb
 */
function applyOptions() {
    applyCategoryOptions();
    applyDifficultyOptions();
    applyOrderOptions();
    applyTimerOptions();
}

function applyTimerOptions() {
    var timeAllowed = document.getElementById("timer_input").value;
    timeAllowed = timeAllowed * 60000;
    
    timer = new ElapsedTime(0, timeAllowed);
    clearInterval(interval);
    interval = setInterval(function() {timer.increase(51); }, 51);
}

function timeExpired() {
    clearInterval(interval);
	visible(null, 'nextCard_button');
	visible(null, 'previousCard_button');
	visible(null, 'correct_button');	
	visible(null, 'incorrect_button');
	visible(null, 'hint_button');
	visible(null, 'answer_button');		
}

function applyDifficultyOptions() {
    var a_radiobutton = document.getElementById("a_radio");
    var b_radiobutton = document.getElementById("b_radio");
    var c_radiobutton = document.getElementById("c_radio");
    var d_radiobutton = document.getElementById("d_radio");
    var default_radiobutton = document.getElementById("def_radio");
    
    if(default_radiobutton.checked == true) {
        return;
    }
    
    var adiffArray = [];
    var bdiffArray = [];
    var cdiffArray = [];
    var ddiffArray = [];
    
    for (i = 0; i<studyGuide.cards.length; i++ ) {
        if(studyGuide.cards[i].difficulty == "A") {
            adiffArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].difficulty == "B") {
            bdiffArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].difficulty == "C") {
            cdiffArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].difficulty == "D") {
            ddiffArray.push(studyGuide.cards[i]);
        }
    }
    
    if(a_radiobutton.checked == true) {
        studyGuide.cards = adiffArray;
        return;
    }
    if(b_radiobutton.checked == true) {
        studyGuide.cards = bdiffArray;
        return;
    }
    if(c_radiobutton.checked == true) {
        studyGuide.cards = cdiffArray;
        return;
    }
    if(d_radiobutton.checked == true) {
        studyGuide.cards = ddiffArray;
        return;
    }
}

function applyCategoryOptions() {
    var newCategoryArray = [];
    
    var knowledgeBox = document.getElementById("knowledge_box");
    var analysisBox = document.getElementById("analysis_box");
    var comprehensionBox = document.getElementById("comprehension_box");
    var synthesisBox = document.getElementById("synthesis_box");
    var applicationBox = document.getElementById("application_box");
    var evaluationBox = document.getElementById("evaluation_box");
    
    var knowledgeArray = [];
    var analysisArray = [];
    var comprehensionArray = [];
    var synthesisArray = [];
    var applicationArray = [];
    var evaluationArray = [];
        
    for (i = 0; i<studyGuide.cards.length; i++ ) {
        if(studyGuide.cards[i].category == "knowledge") {
            knowledgeArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].category == "analysis") {
            analysisArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].category == "comprehension") {
            comprehensionArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].category =="synthesis") {
            synthesisArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].category =="application") {
            applicationArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].category =="evaluation") {
            evaluationArray.push(studyGuide.cards[i]);
        }
    }
    
    if(knowledgeBox.checked == true) {
        newCategoryArray.push.apply(newCategoryArray, knowledgeArray);
    }
    if(analysisBox.checked == true) {
        newCategoryArray.push.apply(newCategoryArray, analysisArray);
    }
    if(comprehensionBox.checked == true) {
        newCategoryArray.push.apply(newCategoryArray, comprehensionArray);
    }
    if(synthesisBox.checked == true) {
        newCategoryArray.push.apply(newCategoryArray, synthesisArray);
    }
    if(applicationBox.checked == true) {
        newCategoryArray.push.apply(newCategoryArray, applicationArray);
    }
    if(evaluationBox.checked == true) {
        newCategoryArray.push.apply(newCategoryArray, evaluationArray);
    }
    
    studyGuide.cards = newCategoryArray;
}

function applyOrderOptions() {
    if (document.getElementById("default_option").checked == true) {
        return;
    }
    else if(document.getElementById("random_option").checked == true) {
        applyRandomOrder();
    }
    else if(document.getElementById("dif_inc_option").checked == true) {
        applyIncDiffOrder();
    }
    else if(document.getElementById("dif_dec_option").checked == true) {
        applyDecDiffOrder();
    }
    else if(document.getElementById("category_option").checked == true) {
        applyCategOrder();
    }
}

function applyRandomOrder() {
    studyGuide.cards.sort(function() {
        return .5 - Math.random();
    });
}

function applyIncDiffOrder() {
    studyGuide.cards.sort(function(a,b) {
       if(a.difficulty > b.difficulty) {
           return 1;
       }
       if(a.difficulty < b.difficulty) {
           return -1;
       }
       return 0;
    });
}

function applyDecDiffOrder() {
    studyGuide.cards.sort(function(a,b) {
        if(a.difficulty < b.difficulty) {
            return 1;
        }
        if(a.difficulty > b.difficulty) {
            return -1;
        }
        return 0;
    });
}

function applyCategOrder() {
    var i = 0;
    var newOrderArray = [];
    
    var knowledgeArray = [];
    var analysisArray = [];
    var comprehensionArray = [];
    var synthesisArray = [];
    var applicationArray = [];
    var evaluationArray = [];
        
    for (i = 0; i<studyGuide.cards.length; i++ ) {
        if(studyGuide.cards[i].category == "knowledge") {
            knowledgeArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].category == "analysis") {
            analysisArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].category == "comprehension") {
            comprehensionArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].category =="synthesis") {
            synthesisArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].category =="application") {
            applicationArray.push(studyGuide.cards[i]);
        }
        else if(studyGuide.cards[i].category =="evaluation") {
            evaluationArray.push(studyGuide.cards[i]);
        }
    }
    
    var knowledge = document.getElementById("knowledge_input").value;
    var analysis = document.getElementById("analysis_input").value;
    var comprehension = document.getElementById("comprehension_input").value;
    var synthesis = document.getElementById("synthesis_input").value;
    var application = document.getElementById("application_input").value;
    var evaluation = document.getElementById("evaluation_input").value;
    
    var orderArray = [knowledge, analysis, comprehension, 
    				  synthesis, application, evaluation];
    
    //sort the user selected values to increasing order
    orderArray.sort(function(a,b) {
       return a-b; 
    });
    
    
    for (i=0; i<orderArray.length; i++) {
        if (orderArray[i] == knowledge) {
            newOrderArray.push.apply(newOrderArray, knowledgeArray);
        }
        if (orderArray[i] == analysis) {
            newOrderArray.push.apply(newOrderArray, analysisArray);
        }
        if (orderArray[i] == comprehension) {
            newOrderArray.push.apply(newOrderArray, comprehensionArray);
        }
        if (orderArray[i] == synthesis) {
            newOrderArray.push.apply(newOrderArray, synthesisArray);
        }
        if (orderArray[i] == application) {
            newOrderArray.push.apply(newOrderArray, applicationArray);
        }
        if (orderArray[i] == evaluation) {
            newOrderArray.push.apply(newOrderArray, evaluationArray);
        }
    }
    studyGuide.cards = newOrderArray;
}
/**
 * End Options implementation
 */




/**
 * This is a function that records the data for the performance 
 * tracker based on how the question was answered
 *  
 */

function answerQuestion(correctness, timeToAnswer){
	performanceTracker.add(studyGuide.cards[studyGuide.current].getDifficulty(), 
							studyGuide.cards[studyGuide.current].getCategory(), 
							timeToAnswer, correctness);
	studyGuide.cards[studyGuide.current].setAnswered(true);
}


function clearResults (){
	
	resultsHolderId = document.getElementById("results_holder");
    resultsHolderId.innerHTML = "";
}

function disableEnableOption (param) {
    //var element = document.getElementById("option_select");
    var elements = document.getElementsByClassName("option_select");
    if(param == "selected") {
        for (i=0; i < elements.length; i++ )
            elements[i].disabled = false;
    }
    else
        for (i=0; i< elements.length; i++ )
            elements[i].disabled = true;
}

function cardTime() {
	var time = timer.toString() - lastTime;
	studyGuide.cards[studyGuide.current].cardStats.setTime(time);	
	lastTime = time;
}

function exitStudyall () {
    if (confirm("Close Window?")) {
    close();
    }
}