$(document).ready(function() {
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 'l', "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesleft = 9;
var guessessofar = 0;

var winEl = $("#wins");
var lossesEl = $("#losses");
var guessesleftEl = $("#guessesleft");
var guessessofarEl = $("#guessessofar");


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
function reset() {
guessesleftEl.html("");
guessesleft=9
guessessofarEl.html("");
}
function updateGuesses(key) {
  guessessofarEl.prepend(key);
}
 document.onkeyup = function(event) {
        // Determine which key was pressed
        var userGuess = event.key;
        updateGuesses(userGuess);


  for (var i = 0; i < computerGuess.length; i++) {
    console.log(userGuess, computerGuess, i, losses)
    if (userGuess === computerGuess) {
      wins++ 
      winEl.html(wins)
      reset()
    } else {
      guessesleft--
      guessesleftEl.html(guessesleft)
      if (guessesleft === 0) {
        losses++
        lossesEl.html(losses)
        reset()
      }
    }
}
$("#begin").on("click", function() {
        $(".img-responsive").animate({ opacity: "1" });
        alert ("test");
      });




    //  ((userGuess === "a" && computerGuess === "a") || (userGuess === "b" && computerGuess === "b") || (userGuess === "c" && computerGuess === "c") || (userGuess === "d" && computerGuess === "d") || (userGuess === "e" && computerGuess === "e") || (userGuess === "f" && computerGuess === "f") || (userGuess === "g" && computerGuess === "g") || (userGuess === "h" && computerGuess === "h") || (userGuess === "i" && computerGuess === "i") || (userGuess === "j" && computerGuess === "j") || (userGuess === "k" && computerGuess === "k") || (userGuess === "l" && computerGuess === "l") || (userGuess === "m" && computerGuess === "m") || (userGuess === "n" && computerGuess === "n") || (userGuess === "o" && computerGuess === "o") || (userGuess === "p" && computerGuess === "p") || (userGuess === "q" && computerGuess === "q") || (userGuess === "r" && computerGuess === "r") || (userGuess === "s" && computerGuess === "s") || (userGuess === "t" && computerGuess === "t") || (userGuess === "u" && computerGuess === "u") || (userGuess === "v" && computerGuess === "v") || (userGuess === "w" && computerGuess === "w") || (userGuess === "x" && computerGuess === "x") || (userGuess === "y" && computerGuess === "y") || (userGuess === "z" && computerGuess === "z") {
    //  wins++;
    // }



          // Injecting the HTML we just created into our div and updating the game information on our page

        };
});
