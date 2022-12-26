var images = document.querySelectorAll('img');

images.forEach(function (image) {
  image.addEventListener('click', function (event) {
    // Add a red border to the image
    event.target.style.borderColor = 'red';

    // Stop the event from propagating if the image is not wide
    if (!event.target.classList.contains('wide')) {
      event.stopPropagation();
    }
  });
});

document.addEventListener('click', function (event) {
  console.log(`Clicked on: ${event.target.tagName}`);
});