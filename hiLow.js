var num = Math.floor(Math.random() * 100 + 1);
var userGuess = 0;


function randomNum(secretNum) {
  console.log(secretNum);
  var guess = parseInt(document.getElementById("guess").value)
  if (guess === secretNum){
       alert ("You Guessed The Number!");
     startover();
  }
  else if (guess > secretNum) {
    alert ("Your Guess is too High");
  } else {
    alert ("Your Guess is too Low");
  }
}

function clicked() {
  randomNum(num);
      userGuess += 1;
        if (userGuess > 7){
          alert ("You Lose");
          startover();
        }
          console.log(userGuess);
      };



function startover() {
  location.reload();
}
