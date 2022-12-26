/* var htmlNode = document.documentElement;
var containerDiv = document.querySelector(".container");

var list2 = document.createElement('ul');
document.body.appendChild(list1);
document.body.appendChild(list2);
function selectSecondList() {
  list2.className = 'secondList';
}
function selectAllListItems() {
  var listItems = document.getElementsByTagName('li');
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].className = 'listItem';
  }
}

setInterval(function () {
  if (secondList.className === "color-list") {
    secondList.className = "";
    return;
  }
  secondList.className = "color-list";
}, 500); */

// 1. Create two unordered lists on the page. Create a function that selects the second list and applies a class that sets some background color to it. Create a second function that, when triggered, selects all <li> elements on the page. The function also sets a class that sets some bg color to every  <li> element. Create one more unordered list and one more function The function​ should select only <li> elements from that last list Each <li> element should get a class that sets some bg color and transforms the text to uppercase.

function setBackgroundColorToSecondList() {
  document.querySelectorAll('ul')[1].classList.add('secondList');
}
setBackgroundColorToSecondList();

function setBackgroundColorToAllLiElements() {
  var liElements = document.querySelectorAll('li');
  for (var i = 0; i < liElements.length; i++) {
    liElements[i].classList.add('background-color-all');
  }
}
setBackgroundColorToAllLiElements();

function setBackgroundColorToLiElementsInLastList() {
  var liElements = document.querySelectorAll('ul')[2].querySelectorAll('li');
  for (var i = 0; i < liElements.length; i++) {
    liElements[i].classList.add('color-list');
  }
}
setBackgroundColorToLiElementsInLastList();

// 2. Create two unordered lists. Each list should be wrapped in a div element. One <li> element in the second list should have a class “active”, which sets its background color. Create a function that selects the <li> element with class “active”. Remove the class from that element, and then select the first <li> element in the first unordered list using node relations. Apply class to that newly selected <li> element.

function removeClassFromActiveLiElement() {
  var activeLiElement = document.querySelector('li.active');
  activeLiElement.classList.remove('active');
  document.querySelector('.container ul').firstElementChild.classList.add('active');
}
removeClassFromActiveLiElement();

// 3. Create an unordered list containing <li> items that represent navigation. Create a function that takes text from one of the <li> elements and presents it on screen using alert. Create one more function. The function should take some text as an argument. The function should select the last <li> element in the list and replace its text with text passed as the function argument.

/* function alertTextFromLiElement() {
  var liElement = document.querySelector('.container2 li');
  alert(liElement.textContent);
}
alertTextFromLiElement(); */

/*
var nav = document.createElement('ul');
var li1 = document.createElement('li');
li1.innerHTML = 'Home';
var li2 = document.createElement('li');
li2.innerHTML = 'About';
var li3 = document.createElement('li');
li3.innerHTML = 'Contact';
nav.appendChild(li1);
nav.appendChild(li2);
nav.appendChild(li3);
document.body.appendChild(nav);
function alertText(text) {
  alert(text);
}

alertText("test");

function replaceText(text) {
  var lastLi = nav.lastChild;
  lastLi.innerHTML = text;
}

replaceText("test");
*/

// 4. Do the following exercise in two ways: using DOM manipulation methods and using innerHTML. Create a function that is used for building a dropdown/select element. It first builds a dropdown and then adds it to the DOM. The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added. Create options that correspond to items in the passed array and add them to the select element. Add the whole dropdown list to DOM

function buildDropdown(array, node) {
  var select = document.createElement('select');
  for (var i = 0; i < array.length; i++) {
    var option = document.createElement('option');
    select.appendChild(option);
    option.innerHTML = array[i];
  }
  node.appendChild(select);
}
var array = ['one', 'two', 'three'];
var node = document.body;
buildDropdown(array, node);

// 5. Use this function to create two selects on the page. The first select should be appended to the first div on the page. The second select should be appended to the last div on the page.

var divs = document.getElementsByTagName('div');
buildDropdown(array, divs[0]);
buildDropdown(array, divs[divs.length - 1]);

// 6. Create a form that contains multiple input elements with labels. Some of those elements should be required. Create a function that validates the form. The function checks each input element that belongs to the form. If the element has the required attribute and no data, it should get red borders.

var form = document.createElement('form');
var input = document.createElement('input');
input.setAttribute('required', 'required');
form.appendChild(input);
var divForm = document.getElementById("form");
divForm.appendChild(form);

function validateForm(form) {
  var inputs = form.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute('required') && inputs[i].value === '') {
      inputs[i].style.border = '2px solid red';
    }
  }
}
validateForm(form);