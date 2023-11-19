// index.js
import { createList } from "./list.js";

document.addEventListener('DOMContentLoaded', () => {
  createList();



const slider = document.querySelector(".slider");

function moveArrows(slideElement) {
  const items = document.querySelectorAll(".item");
  if (slideElement.target.matches(".next")) {
    slider.append(items[0]);
  }
  if (slideElement.target.matches(".prev")) {
    slider.prepend(items[items.length - 1]);
  }
}

function keyActivate(event) {
  const items = document.querySelectorAll(".item");
  if (event.key === 'ArrowRight') {
    slider.append(items[0]);
  } else if (event.key === 'ArrowLeft') {
    slider.prepend(items[items.length - 1]);
  }
}

document.addEventListener("keydown", keyActivate, false);
document.addEventListener("click", moveArrows, false);

});