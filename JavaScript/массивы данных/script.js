// first
var arr = new Array(54, 23);

// second
var arr = [45, 36, 51];
// or
var arr = [];
arr = [54, 36];

// нумерация пойдёт с 0
var arr = [95, true, "string", 0, -100, 5.6];
console.log(arr);

// выведет первый элемент
console.log(arr[0]);
// изменение значения для четтвёртого элемента
arr[3] = "word";

// выведет количество элементов списка
console.log(arr.length);

// мнгомерные массивы
var matrix = [
	[4, 6, 8], [95, true, "string"], [0, -100, 5.6]
];

// изменение элемента string
matrix[1][2] = 90;
console.log(matrix)