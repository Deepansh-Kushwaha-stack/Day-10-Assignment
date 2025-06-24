window.addEventListener("DOMContentLoaded", function () {
  let oldPara = document.getElementById("old-paragraph");

  let newPara = document.createElement("p");
  newPara.textContent = "This is new paragraph!";

  oldPara.replaceWith(newPara);
});
