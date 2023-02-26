// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categoryList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoryList.length}`);

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

const categoryDetails = categoryList.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});
