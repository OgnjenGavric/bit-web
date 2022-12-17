
// 1. Create a function that prints out in the console the following information: 
// ● the platform on which the browser is running 
// ● the information about the browser version 
// ● the company that created that browser. 
// Each piece of information should be printed out in a new row.;

function browserInfo() {
  console.log(window.navigator.platform);
  console.log(window.navigator.appVersion);
  console.log(window.navigator.vendor);
}
browserInfo();

// 2. Create new “isOnline” function that checks if the browser is online. It should print out “online” when the browser is online and “offline” when there is no Internet connection.
function isOnline() {
  if (navigator.onLine) {
    console.log('online');
  } else {
    console.log('offline');
  }
}
isOnline();

// 3. Create a function that prints out the following information in the console: 
// ● current browser width and height 
// ● max possible browser height;

function browserInfo() {
  console.log('browser width: ' + window.screen.availWidth);
  console.log('browser height: ' + window.screen.availHeight);
  console.log('browser max height: ' + window.screen.height);
}
browserInfo();

// 4. Write a function that prints out website’s url information in the console: ● full url address ● domain name ● used protocol ● parameters which are part of URL.

function urlInfo() {
  console.log('full url address: ' + window.location.href);
  console.log('domain name: ' + window.location.hostname);
  console.log('used protocol: ' + window.location.protocol);
  console.log('parameters: ' + window.location.search);
}
urlInfo();

// 5. Create a function for reloading the page.
/* 
function reload() {
  window.location.reload();
}
reload(); 
*/

/* 6. Create a function that redirects you to a website address passed to it. */
/* 
function redirect(url) {
  window.location.href = url;
}
redirect("https://www.bgit.rs/"); 
*/

// 7. Create a function that stores passed data in the browser local storage.

function storeData(key, value) {
  localStorage.setItem(key, value);
}
storeData('name', 'pera');

// 8. Create a function that reads the stored data, and print it out in console. If there is no data, print "There is no data" in the console.

function readData(key) {
  var value = localStorage.getItem(key);
  if (value === null) {
    console.log('There is no data');
  } else {
    console.log(value);
  }
}
readData('name');

// 9. Create a function that removes data from the local storage.
/* 
function removeData(key) {
  localStorage.removeItem(key);
}
removeData('name'); 
*/

// 10. Create a function that stores passed data in the browser session storage.

function storeData(key, value) {
  sessionStorage.setItem(key, value);
}
storeData('lastName', 'Peric');

// 11. Play around with the browser forward/back navigation. Implement a function that navigates two pages back.
function goBack() {
  window.history.go(-2);
}
goBack();

// 12. Create a function that shows the user a greeting message using alert
/* 
function greeting() {
  alert('Hello!');
}
greeting();
*/

// 13. Then a question is presented to the user using prompt 
// ● When the user provides the answer, that answer is used in the confirm dialog 
// ● The format of the message in the dialog should be: 'We will submit this answer now! ' + the answer 
// ● If the user clicks OK, show alert with success message ● If the user clicks Cancel, don't show anything;

/* 
function question() {
  var answer = prompt('What is your name?');
  if (confirm('We will submit this answer now! ' + answer)) {
    alert('Success!');
  }
}
question(); 
*/

// 14. Create a function that builds an array of 10 random numbers between 1 and 50. The function prints that array out in the console and then returns it.

function randomNumbers() {
  var array = [];
  for (var i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 50) + 1);
  }
  console.log(array);
  return array;
}
randomNumbers();

// 15. Create a function that uses the passed array of numbers and rounds all its elements to two decimals. Print out the modified array in the console. Use the first function for generating the input array.

function round(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.round(array[i] * 100) / 100;
  }
  console.log(array);
}
round(randomNumbers());

// 16. Floor Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer. Print out the modified array in the console. Use the first function for generating the input array.

function floor(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(array[i]);
  }
  console.log(array);
}
floor(randomNumbers());

// 17. Create a function that finds and prints out the biggest element in the passed array of numbers.

function max(array) {
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log(max);
}
max(randomNumbers());

// 18. ● Print out the whole date object in the console.

function date() {
  console.log(new Date());
}
date();

// 19. Print out the current time in the console.

function time() {
  console.log(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
}
time();

// 20. Print out the current date in the console.
function currentDate() {
  console.log(new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear());
}
currentDate();






/* Create a random dice roll generator with a button */
var diceRoll = document.createElement('div');
diceRoll.innerHTML = '<button>Roll Dice</button>';
document.body.appendChild(diceRoll);
diceRoll.addEventListener('click', function () {
  var roll = Math.floor(Math.random() * 6) + 1;
  alert('You rolled a ' + roll);
});