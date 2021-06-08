
let scrollTop = 0;

document.getElementById("nav-trigger").addEventListener("click",function(){
	if((window.innerHeight - 35) <= scrollTop){
		if(document.getElementById("main-nav").classList.contains("open")){
			document.getElementById("main-nav").classList.remove("open")
			document.getElementById("main-nav").classList.add("closed")
			document.getElementById("nav-trigger").setAttribute('aria-expanded', 'false');
			document.getElementById("nav-status").innerHTML = "Closed"
		}else {
			document.getElementById("main-nav").classList.remove("closed")
			document.getElementById("main-nav").classList.add("open")
			document.getElementById("nav-trigger").setAttribute('aria-expanded', 'true');
			document.getElementById("nav-status").innerHTML = "Open"
		}
	}
	
})

window.onscroll = function() {
    console.log('scrolling');
    scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
   if( (window.innerHeight - 35) <= scrollTop){
   	    if(!document.getElementById("main-nav").classList.contains("open") && !document.getElementById("main-nav").classList.contains("closed")){
   	    	document.getElementById("main-nav").classList.add("closed")
   	    	document.getElementById("nav-trigger").setAttribute('aria-expanded', 'false');
   	    	document.getElementById("nav-status").innerHTML = "Closed"
   	    }
   		
	} else {
		document.getElementById("main-nav").classList.remove("closed");
		document.getElementById("main-nav").classList.remove("open")
		document.getElementById("nav-trigger").setAttribute('aria-expanded', 'true');
		document.getElementById("nav-status").innerHTML = "Open"
	}
};