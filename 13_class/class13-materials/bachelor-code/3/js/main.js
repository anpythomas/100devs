const contestants = document.querySelectorAll('.contestant')

// This code below allows us to put a smurf on everything withe the class contestant (above)
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}
