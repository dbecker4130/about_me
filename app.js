'use strict';

var answer1 = prompt('Are you ready to guess about Danny Becker?');
answer1 = answer1.toLowerCase();
if(answer1 === 'yes' || answer1 === 'y') {
  alert('Alright! Let\'s get started!');
  console.log(answer1 + ' the user is ready');
}
else {
  alert('Okay, then go away!');
  console.log(answer1 + ' the user is not ready');
}

var answer2 = prompt('Do you think that Danny likes sports?');
answer2 = answer2.toLowerCase();
if(answer2 === 'yes' || answer2 === 'y') {
  alert('I love sports! Especially action sports.');
  console.log(answer2 + ' the user thinks I like sports');
}
else {
  alert('You are so off on this one');
  console.log(answer2 + ' the user thinks I hate sports');
}

var answer3 = prompt('Does Danny drink coffee?');
answer3 = answer3.toLowerCase();
if(answer3 === 'yes' || answer3 === 'y') {
  alert('You are correct, Every day!');
  console.log(answer3 + ' the thinks I drink coffee');
}
else {
  alert('Wrong. Danny loves coffee');
  console.log(answer3 + ' the user thinks I do not drink coffee');
}

var answer4 = prompt('Does Danny like Beer?');
answer4 = answer4.toLowerCase();
if(answer4 === 'yes' || answer4 === 'y') {
  alert('IPA\'s and tasty Lagers');
  console.log(answer4 + ' the user thinks I like beer');
}
else {
  alert('Clearly you don\'t know me very well');
  console.log(answer4 + ' the user does not think I drink beer');
}

var answer5 = prompt('Danny loves snowboarding, do you think he is any good?');
answer5 = answer5.toLowerCase();
if(answer5 === 'yes' || answer5 === 'y') {
  alert('Check out my picture!');
  console.log(answer5 + ' the user thinks I shred');
}
else {
  alert('Your right, I suck.');
  console.log(answer5 + ' the user thinks I suck');
}

for (var i = 0; i < 4; i++) {
  console.log(i);

  var trips = 300;
  var guess = parseInt(prompt('How many times have I been to Canada?'));
  if (guess === trips) {
    // correct
    alert('Great Guess!');
    break;
  } else {
    // incorrect
    // alert('You goofed');
    if (guess > trips) {
      alert('You are too high');
    } else {
      alert('You are too low');
    }
  }
}



while (i < 6) {

  for (i = 0; i <array; i++)
  var guessSports = [Hockey, Golf, ]

  )




}
