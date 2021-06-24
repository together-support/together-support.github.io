
function isScrolledIntoView(element) {
  var rect = element.getBoundingClientRect();
  console.log(rect.top)
  var html = document.documentElement;
  return (
    rect.top >= 0
  );
}

window.onscroll = function() {whichSection()};


function whichSection() {

	let sections = document.getElementsByTagName('section');
	for (var i = sections.length - 1; i >= 0; i--) {
		console.log(isScrolledIntoView(sections[i]))
		if(isScrolledIntoView(sections[i])){
			if(document.querySelectorAll(".in-page-navigation a.on")[0]){
				document.querySelectorAll(".in-page-navigation a.on")[0].classList.remove("on")
			}
			document.querySelectorAll(".in-page-navigation a[href='#"+sections[i].id+"']")[0].classList.add("on");
		}
	}
}