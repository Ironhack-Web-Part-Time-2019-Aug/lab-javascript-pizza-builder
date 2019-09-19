// Write your Pizza Builder JavaScript in this file.

function toggleElement(className) {
  let elements = document.querySelectorAll(className);
  elements.forEach((element) => {
    element.classList.toggle('hidden');
  });
}

function toggleCrust() {
  let crust = document.querySelector('.crust')
  crust.classList.toggle('crust-gluten-free')
}

let pepperButton = document.querySelector('.btn-green-peppers')
pepperButton.onclick = () => toggleElement(".green-pepper");

let pepperonniButton = document.querySelector('.btn-pepperonni')
pepperonniButton.onclick = () => toggleElement(".pep");

let mushroomButton = document.querySelector('.btn-mushrooms')
mushroomButton.onclick = () => toggleElement(".mushroom");

let crustButton = document.querySelector('.btn-crust')
crustButton.onclick = () => toggleCrust();
