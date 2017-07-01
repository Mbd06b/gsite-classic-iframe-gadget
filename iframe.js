/**
 * http://usejsdoc.org/
 * Adapted iFrame js is from Google Gadgets API. 
 * 
 * https://developers.google.com/google-apps/sites/gadgets/site_gadgets
 */

 gadgets.util.registerOnLoadHandler(doRender);
	
	  function doRender(){
	    // setup variables
	    var prefs = new gadgets.Prefs();
	    var iframeURL = prefs.getString('iframeURL');
	    var scroll = prefs.getString('scroll');
	    var height = 800;
	    var width = 600;
	
	    if (gadgets.window) {
	      var viewport = gadgets.window.getViewportDimensions();
	      if (viewport.width) {
	        var width = viewport.width;
	      }
	      if (viewport.height) {
	        var height = viewport.height;
	      }
	    }
	
	    var iframe = document.createElement('iframe');
		    iframe.setAttribute('width', width + 'px');
		    iframe.setAttribute('height', height + 'px');
		    iframe.setAttribute('frameborder','no');
	    
	    if(scroll){
	      iframe.setAttribute('scrolling', scroll);
	    }
	      iframe.setAttribute('src', iframeURL);
	
	    // set the slideshow to the placeholder div
	    var dest = document.getElementById('dest');
		    dest.innerHTML = '';
		    dest.appendChild(iframe);
	  }