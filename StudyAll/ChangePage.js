/**
 * @author Paul Henninger
 * Change pages in an html document
 */

/**
 * set one section of html to invisible and another section to visible
 * @param {string} visible - section to be set to visible
 * @param {string} invisible - section to be set to invisible
 */
function visible(visible, invisible){
    
    if (invisible != null ) {
       document.getElementById(invisible).style.cssText = 'display:none;';
    }
    if (visible != null ) {
	   document.getElementById(visible).style.cssText = 'display:block;';
	}   
}
