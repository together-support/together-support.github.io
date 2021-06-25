
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