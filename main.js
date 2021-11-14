let seconds = 0;
let el = document.getElementById('timer');

function incrementSeconds() {
     seconds += 1;
     el.innerText = "You have been here for " + seconds + " seconds.";
}

let cancel = setInterval(incrementSeconds, 1000);


// form interactivity

function getInput() {
  var fname = document.getElementById("fname").value;
  var feedback = document.getElementById("feedback").value;
  alert(`Thank you for your feedback ${fname}`);
}

