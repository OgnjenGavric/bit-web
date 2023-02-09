const createButton = function () {
  const btn = document.createElement("button");
  let clicksQty = 0;
  btn.innerHTML = "Click me";
  btn.addEventListener("click", function () {
    console.log("Button wes clicked");
    btn.innerHTML = `Button wes clicked ${++clicksQty} times`;
  });
  document.body.appendChild(btn);
};

createButton();