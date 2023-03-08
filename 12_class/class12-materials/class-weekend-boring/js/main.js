document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here

  if (day === 'monday' || day === 'wednesday' || day === 'Friday') {
    document.querySelector("#placeToSee").innerHTML = "Today is a boring day"
  } else if ( day === 'tuesday' || day == 'thursday') {
    document.querySelector("#placeToSee").innerHTML = "Today is a class day"
  } else {
    document.querySelector("#placeToSee").innerHTML = "Today is a Weekend day"
  }
}
