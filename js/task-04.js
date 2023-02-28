// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counter = document.querySelector("#value");

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
