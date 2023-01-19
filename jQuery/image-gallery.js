$(document).ready(function () {
  var imageArray = ["./img/nature.jpg", "./img/milky-way.jpg", "./img/forest-sunset.jpg", "./img/ocean.jpg", "./img/nature-2.jpg"];
  var galleryTitle = "My Image Gallery";

  var $galleryContainer = $("<div>", {
    class: "gallery-container"
  });

  var $galleryTitle = $("<h2>", {
    text: galleryTitle
  }).prependTo($galleryContainer);

  for (var i = 0; i < imageArray.length; i++) {
    var $image = $("<img>", {
      src: imageArray[i],
      class: "gallery-image"
    });
    $image.appendTo($galleryContainer);
  }

  $galleryContainer.appendTo("body");

  $(".gallery-image").each(function () {
    var width = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
    var height = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
    $(this).css({
      width: width + "px",
      height: height + "px"
    });
    if (width < 200) {
      $(this).css("border", "5px solid green");
    } else {
      return false;
    }
  });
});