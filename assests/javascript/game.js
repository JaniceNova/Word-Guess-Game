var computerChoices = ["pixies", "faefolk", "magic"]
var object = {}

var winsScore = 0;
var losesScore = 0;
var guessScore = 10;
var letter = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var correctGuess = [];
$('#wins').append(winsScore);
$('#loses').append(losesScore);
$('#guessleft').append(guessScore);

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess); //add the correct letter to check object for number , want to get the len, have equal, correct guess, word

for (var i = 0; i < computerGuess.length; i++) {
    var currentLetter = computerGuess[i];
    if (object.hasOwnProperty(computerGuess[i])) {
        object[computerGuess[i]]++

    }
    else {
        object[computerGuess[i]] = 1
    }
}
console.log(object);

function getDash() {
    console.log(computerGuess.length)
    var dashWord = "";
    for (var i = 0; i < computerGuess.length; i++) {
        dashWord = dashWord + "_ ";
    }
    console.log(dashWord);
    $("#word").append(dashWord);
}
getDash()



//var dashLength = len(computerChoices)
//console.log(dashLength);


document.onkeyup = function (event) {

    var myChoices = event.key;
    var letterGuessWrite = function () {
        var div = $("<div>");
        div.text(myChoices);
        console.log(myChoices);
        $("#lettersguessed").append(div);
    }

    console.log(computerGuess)


    if (letter.includes(myChoices)) {




        letterGuessWrite();
        if (computerGuess.includes(myChoices) && correctGuess.includes(myChoices) === false) {
            console.log(myChoices);
            correctGuess.push(myChoices);
            console.log(correctGuess);

        }

        for (var i = 0; i >= 0; i--) {
            guessScore--;
            $('#guessleft').html(guessScore);
            if (guessScore == 0) {
                losesScore++;
                $('#loses').html(losesScore);
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

                $("#lettersguessed").html("");
            }
            if (guessScore === 0) {
                guessScore = 10;
                correctGuess = [];
                

            }


            if (correctGuess.length === (Object.keys(object).length)) {
                winsScore++; $('#wins').html(winsScore);
                guessScore = 10;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                for (var i = 0; i < computerGuess.length; i++) {
                    var currentLetter = computerGuess[i];
                    if (object.hasOwnProperty(computerGuess[i])) {
                        object[computerGuess[i]]++
                
                    }
                    else {
                        object[computerGuess[i]] = 1
                    }
                }
                $("#lettersguessed").html("");
                console.log(Object.keys(object).length);
                correctGuess = [];


            }

        }
    }

}


console.log(Object.keys(object))