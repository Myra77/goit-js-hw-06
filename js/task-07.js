// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fsChange = document.getElementById("font-size-control");
const textChange = document.getElementById("text");

fsChange.addEventListener("input", (event) => {
  textChange.style.fontSize = event.currentTarget.value + "px";
});
