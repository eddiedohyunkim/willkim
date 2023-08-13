window.onload = function(){
	handleChoices()
}
function handleChoices(){
	let allChoices = document.querySelectorAll(".choices");
	allChoices.forEach(function(e) { 
		e.addEventListener('click', pickone)
	});
}	
function pickone(e){
	let choice = e.target;
	let choices = e.currentTarget;
	if(choice.classList.contains('choice')){
		// handle button visuals
		choices.querySelector('.active').classList.remove("active");
		choice.classList.add("active");

		// handle options
		let	options = document.getElementById(choices.dataset.attached);
		let	option = document.getElementById(choice.dataset.attached);

		let alloption = options.querySelectorAll('.option');
		alloption.forEach(function(e){
			if(e.classList.contains('show')) e.classList.remove('show')
			if(e == option) e.classList.add('show')
		})

		if(option.querySelector('.choices') != null){
			let secondChoice = option.querySelector('.active');
			let	secondOption = document.getElementById(secondChoice.dataset.attached);
			console.log(secondOption)
			secondOption.classList.add('show');
		}
	}
	
}

// Animation Performance
let observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(function(entry) {
		// Pause/Play the animation
		if (entry.isIntersecting) entry.target.style.animationPlayState = "running";
		else entry.target.style.animationPlayState = "paused";
	});
});

let animation = document.querySelectorAll(".big-thrd-cont");

animation.forEach(function(e) { 
	observer.observe(e); 
});