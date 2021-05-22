

var arr = [5, 90, 8, 9];
// вывод длинны списка/массива
console.log(arr.length);
// из спискa в строку
console.log(arr.join(", "));
// сортировка массива
console.log(arr.sort());
// наоборот
console.log(arr.reverse());
// комбинирование
console.log(arr.reverse().join(", "));

var stroka = arr.reverse().join(", ");
// разбитие всех элементов через запятую
console.log(stroka.split(", "));