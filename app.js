"use strict";

var answer1 = prompt('Are you ready to guess about Danny Becker?');
answer1 = answer1.toLowerCase()
if(answer1==='yes' || answer1==='y') {
  alert('Alright! Let\'s get started!');
  console.log(answer1 + ' the user is ready');
}
else {
    alert('Okay, then go away!');
    console.log(answer1 + ' the user is not ready');
  }

var answer2 = prompt('Do you think that Danny likes sports?');
answer2 = answer2.toLowerCase()
if(answer2==='yes' || answer2==='y') {
  alert('I love sports! Especially action sports.');
  console.log(answer2);
}
else {
  alert('You are so off on this one');
  console.log(answer2);
}

var answer3 = prompt('Does Danny drink coffee?');
answer3 = answer3.toLowerCase()
if(answer3==='yes' || answer3==='y') {
  alert('You are correct, Every day!')
  console.log(answer3);
}
else {
  alert('Wrong. Danny loves coffee');
  console.log(answer3);
}

var answer4 = prompt('Does Danny like Beer?')
answer4 = answer4.toLowerCase()
if(answer4==='yes' || answer4==='y') {
  alert('IPA\'s and tasty Lagers');
  console.log(answer4);
}
else {
  alert('Clearly you don\'t know me very well');
  console.log(answer4);
}

var answer5 = prompt('Danny loves snowboarding, do you think he is any good?')
answer5 = answer5.toLowerCase()
if(answer5==='yes' || answer5==='y') {
  alert('Check out my picture!');
  console.log(answer5);
}
else {
  alert('Your right, I suck.');
  console.log(answer5);
}
