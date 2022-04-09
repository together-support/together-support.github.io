
function isScrolledIntoView(element) {
	var w=window,
	d=document,
	e=d.documentElement,
	g=d.getElementsByTagName('body')[0],
	x=w.innerWidth||e.clientWidth||g.clientWidth,
	y=w.innerHeight||e.clientHeight||g.clientHeight;


  var rect = element.getBoundingClientRect();

  var html = document.documentElement;
  console.log(element.id)
  console.log(rect.top, rect.top < 0)
  return (
    rect.top < w.innerHeight/2

  );
}

window.onscroll = function() {whichSection()};


function whichSection() {

	let sections = document.getElementsByTagName('section');
	for (var i = 0; i <= sections.length - 1; i++) {
		
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
		document.querySelector("#mobile-nav-trigger").setAttribute('aria-expanded', 'false');
	}else{
		document.querySelector(".navigation").classList.add("open")
		document.querySelector("#mobile-nav-trigger").setAttribute('aria-expanded', 'true');
	}
})


document.querySelector("#mobile-nav-trigger").addEventListener("keyup",function(event){
	if(event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
		if(document.querySelector(".navigation").classList.contains("open")){
			document.querySelector(".navigation").classList.remove("open");
			document.querySelector("#mobile-nav-trigger").setAttribute('aria-expanded', 'false');
		}else{
			document.querySelector(".navigation").classList.add("open")
			document.querySelector("#mobile-nav-trigger").setAttribute('aria-expanded', 'true');
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

document.querySelector("#show-audio-off").addEventListener('change', () => {
   localStorage.setItem('showAudio', "false");
   let audios = document.querySelectorAll(".audio");
   for (var i = audios.length - 1; i >= 0; i--) {
		audios[i].classList.remove("show")
	}

  })
document.querySelector("#show-audio-on").addEventListener('change', () => {
    localStorage.setItem('showAudio', "true");
    let audios = document.querySelectorAll(".audio");
    for (var i = audios.length - 1; i >= 0; i--) {
		audios[i].classList.add("show")
	}
  })




document.addEventListener("DOMContentLoaded", function(){
	const contrast = localStorage.getItem('contrast');
	const showAudio = localStorage.getItem('showAudio')
	if(contrast == "true"){
		document.body.classList.add("contrast");
		document.getElementById("high-contrast-on").checked = true;
	}
	if(showAudio == "true"){
		let audios = document.querySelectorAll(".audio");
		for (var i = audios.length - 1; i >= 0; i--) {
			audios[i].classList.add("show")
		}
		document.getElementById("show-audio-on").checked = true;
	}
});
