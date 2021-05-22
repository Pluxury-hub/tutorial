// задаём переменную с 0, ставим условие, прибавляем 1 каждый раз
for (var i = 0; i < 10; i++) {
	console.log(i);
}

for (var i = 100; i > 5; i /= 2) {
	console.log(i);
}

// условия прописуются вне цикла
var j = 0;
while(j < 10) {
	console.log(j);
	j++;
}

// бесконечный цикл
/*  var isHasCar = true;
	while(isHasCar) {

	}*/

// выполнит однку интерацию
var x = 100;
do {
	console.log(x);
} while(x < 50);

// break - полностью выходит из цикла
for(var i = 10; i < 20; i += 2) {
	if(i > 15)
		break;
	console.log(i);
}

// continue - пропускает определённую интерацию
for(var i = 10; i < 20; i++) {
	if(i % 2 == 0)
		continue
	console.log(i);
}

// перебираем массив
var arr = [5, 3, 6, 5];

for(var i = 0; i < arr.length, i++) {
	console.log("Элемент " + i + ": " arr[i]);
}