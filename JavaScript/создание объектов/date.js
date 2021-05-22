
// Date - класс
// new - выделение памяти
var date = new Date();

// Выведет текущий год
console.log(date.getFullYear());
// Месяц
console.log(date.getMonth() + 1);
// День
console.log(date.getDate());
// Час
console.log(date.getHours());
// Минтуты
console.log(date.getMinutes());
// Секунды
console.log(date.getSeconds());
// Часы + минуты
console.log(date.getHours() + ":" + date.getMinutes());

// установка своей даты
date.setHours(23);