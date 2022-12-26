function sendMessage() {
  // Get the message from the input field
  var message = document.querySelector('#message-input').value;

  // Clear the input field
  document.querySelector('#message-input').value = '';

  // Add the message to the messages div
  var messagesDiv = document.querySelector('#messages');
  messagesDiv.innerHTML += `<p>${message}</p>`;
}