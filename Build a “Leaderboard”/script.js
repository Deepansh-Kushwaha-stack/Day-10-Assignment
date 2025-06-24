let names = ["Deepansh", "Arpit", "Garvit", "Bharat"];

let ol = document.createElement("ol");

names.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  ol.appendChild(li);
});

document.body.appendChild(ol);

