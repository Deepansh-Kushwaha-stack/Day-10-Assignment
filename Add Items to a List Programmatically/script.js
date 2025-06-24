window.addEventListener("DOMContentLoaded", function () {
  let shoppingList = document.getElementById("shopping-list");

  let items = ["Iphone", "Asus Rog", "Asus Tuf"];

  items.forEach(itemText => {
    let li = document.createElement("li");
    li.textContent = itemText;
    shoppingList.appendChild(li);
  });
});
