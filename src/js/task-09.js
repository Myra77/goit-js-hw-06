// Напиши скрипт, який змінює кольори фону елемента < body > через
// інлайн - стиль по кліку на button.change - color і
// виводить значення кольору в span.color.

const body = document.querySelector("body");
const bgColor = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  bgColor.textContent = body.style.backgroundColor;
});
