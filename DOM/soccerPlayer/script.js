var player = document.querySelector('#soccer-player');
var field = document.querySelector('#soccer-field');
var disableButton = document.querySelector("#disable-button");
var isMovementDisabled = false;

field.addEventListener('click', movePlayer);
disableButton.addEventListener('click', toggleMovement);

function movePlayer(event) {
  if (!isMovementDisabled) {
    // Get the position of the click on the field
    var x = event.pageX - field.offsetLeft - player.offsetWidth / 2;
    var y = event.pageY - field.offsetTop - player.offsetHeight / 2;

    // Move the player to the clicked position
    player.style.left = x + 'px';
    player.style.top = y + 'px';
  }
}

function toggleMovement() {
  isMovementDisabled = !isMovementDisabled;

  // Change the button's text based on the value of the flag
  if (isMovementDisabled) {
    disableButton.textContent = 'Enabled movement';
    //disableButton.classList.add("enable-movement");
  } else {
    disableButton.textContent = 'Disabled movement';
  }
  disableButton.classList.toggle('enable-movement', isMovementDisabled);
}