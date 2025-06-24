let featuresDiv = document.getElementById("features");
let paragraphs = featuresDiv.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = "✓ " + paragraphs[i].textContent;
}
