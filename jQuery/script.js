$(document).ready(function () {
  // Add bottom border to first element
  $("ul li:first-child").css("border-bottom", "1px solid black");

  // Transform all elements text to uppercase
  $("ul li").text(function (_, text) {
    return text.toUpperCase();
  });

  // Change active element font color
  $("ul li.active").css("color", "blue");

  // Change middle element background color
  var middle = Math.floor($("ul li").length / 2);
  $("ul li").eq(middle).css("background-color", "yellow");
});