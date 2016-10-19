function gradeQuiz() {
var userScore = 0;
var answerOne = document.querySelector('input[name="q1"]:checked').value;

if (answerOne == 1) {
    userScore += 5;
} else if (answerOne == 2) {
    userScore += 10;
} else if (answerOne == 3) {
    userScore += 1;
} else { 
    console.log(userScore);
} 

var answerTwo = document.querySelector('input[name="q2"]:checked').value;
 if (answerTwo == 1) {
    userScore += 10;
} else if (answerTwo == 2) {
    userScore += 1;
} else if (answerTwo == 3) {
    userScore += 5;
} else { 
   userScore += 0;
}

var answerThree = document.querySelector('input[name="q3"]:checked').value;

if (answerThree == 1) {
    userScore += 10;
} else if (answerThree == 2) {
    userScore += 5;
} else if (answerThree == 3) {
    userScore += 1;
} else { 
  console.log(userScore);
}   


var answerFour = document.querySelector('input[name="q4"]:checked').value;

if (answerFour == 42) {
    userScore += 10;
} else { 
    console.log(userScore);
} 

var answerFive = document.querySelector('input[name="q5"]:checked').value;

if (answerFive == 1) {
    userScore += 0;
} else if (answerFive == 2) {
    userScore += 10;
} else { 
    console.log(userScore);
} 

var answerSix = document.querySelector('input[name="q6"]:checked').value;

if (answerSix == 1) {
    userScore += 10;
} else if (answerSix == 2) {
    userScore += 5;
} else if (answerSix == 3) {
    userScore += 1;
} else { 
    console.log(userScore);
} 

var answerSeven = document.querySelector('input[name="q7"]:checked').value;

if (answerSeven == 1) {
    userScore += 10;
} else if (answerSeven == 2) {
    userScore += 5;
} else if (answerSeven == 3) {
    userScore += 1;
} else { 
    console.log(userScore);
} 

var answerEight = document.querySelector('input[name="q8"]:checked').value;

if (answerEight == 1) {
    userScore += 1;
} else if (answerEight == 2) {
    userScore += 5;
} else if (answerEight == 3) {
    userScore += 10;
} else { 
    console.log(userScore);
} 

var answerNine = document.querySelector('input[name="q9"]:checked').value;

if (answerNine == 1) {
    userScore += 10;
} else if (answerNine == 2) {
    userScore += 5;
} else if (answerNine == 3) {
    userScore += 1;
} else { 
    console.log("incorrect");
} 

var answerTen = document.querySelector('input[name="q10"]:checked').value;

if (answerTen == 1) {
    userScore += 5;
} else if (answerTen == 2) {
    userScore += 10;
} else if (answerTen == 3) {
    userScore += 1;
} else { 
    console.log(userScore);
} 

var answerTen = document.querySelector('input[name="q11"]:checked').value;

if (answerTen == 1) {
    userScore += 5;
} else if (answerTen == 2) {
    userScore += 10;
} else if (answerTen == 3) {
    userScore += 1;
} else { 
    console.log(userScore);
} 

var answerTen = document.querySelector('input[name="q12"]:checked').value;

if (answerTen == 1) {
    userScore += 10;
} else if (answerTen == 2) {
    userScore += 10;
} else if (answerTen == 3) {
    userScore += 10;
} else { 
    console.log(userScore);
} 

var answerTen = document.querySelector('input[name="q13"]:checked').value;

if (answerTen == 1) {
    userScore += 5;
} else if (answerTen == 2) {
    userScore += 1;
} else if (answerTen == 3) {
    userScore += 10;
} else { 
    console.log(userScore);
} 

var answerTen = document.querySelector('input[name="q14"]:checked').value;

if (answerTen == 1) {
    userScore += 1;
} else if (answerTen == 2) {
    userScore += 10;
} else if (answerTen == 3) {
    userScore += 5;
} else { 
    console.log(userScore);
} 

var answerTen = document.querySelector('input[name="q15"]:checked').value;

if (answerTen == 1) {
    userScore += 5;
} else if (answerTen == 2) {
    userScore += 10;
} else if (answerTen == 3) {
    userScore += 1;
} else { 
    console.log(userScore);
} 

var answerTen = document.querySelector('input[name="q16"]:checked').value;

if (answerTen == 1) {
    userScore += 5;
} else if (answerTen == 2) {
    userScore += 10;
} else if (answerTen == 3) {
    userScore += 1;
} else { 
    console.log(userScore);
} 

var answerTen = document.querySelector('input[name="q17"]:checked').value;

if (answerTen == 1) {
    userScore += 5;
} else if (answerTen == 2) {
    userScore += 10;
} else if (answerTen == 3) {
    userScore += 5;
} else { 
    console.log(userScore);
} 

var answerTen = document.querySelector('input[name="q18"]:checked').value;

if (answerTen == 1) {
    userScore += 5;
} else if (answerTen == 2) {
    userScore += 1;
} else if (answerTen == 3) {
    userScore += 10;
} else { 
    console.log(userScore);
} 

var answerTen = document.querySelector('input[name="q19"]:checked').value;

if (answerTen == 1) {
    userScore += 1;
} else if (answerTen == 2) {
    userScore += 10;
} else if (answerTen == 3) {
    userScore += 5;
} else { 
    console.log(userScore);
} 

var answerTen = document.querySelector('input[name="q20"]:checked').value;

if (answerTen == 1) {
    userScore += 5;
} else if (answerTen == 2) {
    userScore += 1;
} else if (answerTen == 3) {
    userScore += 10;
} else { 
    console.log(userScore);
} 












if (userScore === 200) {
    document.getElementById("userResult").innerHTML = "You got them all right!";
} else if (userScore === 120, 140, 160, 180) {
    document.getElementById("userResult").innerHTML = "You did ok...for a scrublord.";
} else if (userScore === 20, 40, 60, 80, 100) {
    document.getElementById("userResult").innerHTML = "You are an edgelord, get good!";
} else {
    document.getElementById("userResult").innerHTML = "congratulations, you successfully couldn't even.";
}





















}