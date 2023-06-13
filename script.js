const header = document.querySelector('header');

window.onload = function(){
	currentSection();
	document.addEventListener("scroll", (event) => {
		currentSection();
	});
}

function currentSection(){
	let sections = document.querySelectorAll('.section'), 
	sections_arr = [...sections];
	sections_arr.forEach(section => {
		let bottom = Math.round( section.getBoundingClientRect().bottom );
		let top = Math.round( section.getBoundingClientRect().top );
		if(top <= 64 && 64 < bottom){
			handleHeader(section.dataset.category, section.dataset.subcategory)
		}
	});
}

function handleHeader(category, subcategory){
	let navCategory = header.querySelector(`#nav-${category}`);
	for(let each of getAllSiblings(navCategory)){
		each.classList.add("noline");
	}
	navCategory.classList.remove("noline");

	let navSubCategory = header.querySelector('#nav-subcategory');
	navSubCategory.innerHTML = subcategory;
}

function getAllSiblings(elem) {
	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = elem.parentNode.firstChild;
	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}
	return siblings;
};

// Animation Performance
let observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(function(entry) {
		// Pause/Play the animation
		if (entry.isIntersecting) entry.target.style.animationPlayState = "running"
		else entry.target.style.animationPlayState = "paused"
	});
});

let variableTexts = document.querySelectorAll(".big-thrd-cont");

variableTexts.forEach(function(el) { 
	observer.observe(el); 
});