// Write your Pizza Builder JavaScript in this file.

function toggleElement(className) {
  let elements = document.querySelectorAll(className);
  elements.forEach((element) => {
    element.classList.toggle('hidden');
  });
}

let pepperButton = document.querySelector('.btn-green-peppers')
pepperButton.onclick = () => toggleElement(".green-pepper");

let pepperonniButton = document.querySelector('.btn-pepperonni')
pepperonniButton.onclick = () => toggleElement(".pep");

let mushroomButton = document.querySelector('.btn-mushrooms')
mushroomButton.onclick = () => toggleElement(".mushroom");
