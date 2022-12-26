function toggleColor() {
  var bgColor = document.querySelector('#bg-color');
  if (bgColor.style.backgroundColor === 'royalblue') {
    bgColor.style.backgroundColor = 'silver';
  } else {
    bgColor.style.backgroundColor = 'royalblue';
  }
}

var toggleInterval;

function startToggle() {
  toggleInterval = setInterval(toggleColor, 1000);
}

function stopToggle() {
  clearInterval(toggleInterval);
}

function toggleColor() {
  var bgColor = document.querySelector('#bg-color');
  if (bgColor.style.backgroundColor === 'royalblue') {
    bgColor.style.backgroundColor = 'silver';
  } else {
    bgColor.style.backgroundColor = 'royalblue';
  }
}