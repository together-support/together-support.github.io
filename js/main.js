
function isScrolledIntoView(element) {
	var w=window,
	d=document,
	e=d.documentElement,
	g=d.getElementsByTagName('body')[0],
	x=w.innerWidth||e.clientWidth||g.clientWidth,
	y=w.innerHeight||e.clientHeight||g.clientHeight;


  var rect = element.getBoundingClientRect();

  var html = document.documentElement;
  return (
    rect.top >= (-1  * y)
  );
}

window.onscroll = function() {whichSection()};


function whichSection() {

	let sections = document.getElementsByTagName('section');
	for (var i = sections.length - 1; i >= 0; i--) {
		
		if(isScrolledIntoView(sections[i])){
			if(document.querySelectorAll(".in-page-navigation a.on")[0]){
				document.querySelectorAll(".in-page-navigation a.on")[0].classList.remove("on")
			}
			document.querySelectorAll(".in-page-navigation a[href='#"+sections[i].id+"']")[0].classList.add("on");
		}
	}
}

let enterKeyCode = 13;
let spaceKeyCode = 32;

document.getElementById("mobile-nav-trigger").addEventListener("click",function(){
	if(this.classList.contains("open")){
		this.classList.remove("open");
		document.querySelector("#left-sticky").classList.remove("open")
	}else{
		this.classList.add("open")
		document.querySelector("#left-sticky").classList.add("open")
	}
})
document.getElementById("mobile-nav-trigger").addEventListener("keyup",function(event){
	if(event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
		if(this.classList.contains("open")){
			this.classList.remove("open");
			document.querySelector("#left-sticky").classList.remove("open")
		}else{
			this.classList.add("open")
			document.querySelector("#left-sticky").classList.add("open")
		}
	}
})


document.querySelector("#mobile-nav-trigger").addEventListener("click",function(){
	if(document.querySelector(".navigation").classList.contains("open")){
		document.querySelector(".navigation").classList.remove("open");
	}else{
		document.querySelector(".navigation").classList.add("open")
	}
})


document.querySelector("#mobile-nav-trigger").addEventListener("keyup",function(event){
	if(event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
		if(document.querySelector(".navigation").classList.contains("open")){
			document.querySelector(".navigation").classList.remove("open");
		}else{
			document.querySelector(".navigation").classList.add("open")
		}
	}
})


document.querySelector("#high-contrast-off").addEventListener('change', () => {
   document.body.classList.remove("contrast");
   localStorage.setItem('contrast', "false");

  })
document.querySelector("#high-contrast-on").addEventListener('change', () => {
    document.body.classList.add("contrast");
    localStorage.setItem('contrast', "true");

  })




document.addEventListener("DOMContentLoaded", function(){
	const contrast = localStorage.getItem('contrast');
	if(contrast == "true"){
		document.body.classList.add("contrast");
		document.getElementById("high-contrast-on").checked = true;
	}
});
