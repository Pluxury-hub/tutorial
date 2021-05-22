// function - функция
// info - название функции (может быть любым)
// word - параметр (может быть любым)
function info(word) {
	console.log(word + "Привет");
}

function summa(a, b) {
	var res = a + b;
	info(res);
}
// вызов функции
// выведет "6 Привет"
info(6);

// выведет "12 Привет"
summa(5, 7);

//--------------------------------------------

function sum(arr) {
	var suma = 0;
	for(var i = 0; i < arr.length; i++) {
		suma += arr[i];
	}
	return suma;
}

// создаём список
var array = [6, 5, 7];

// переносим в переменную
var res = sum(array);

//--------------------------------------------------
// локальные и глобальные перемменные
// num - глобальная переменная
// num_2 - локальная переменная (работает только внутри функции, нельзя обратиться вне функции)
var num = 10;

function info() {
	var num_2 = 10
	console.log(num_2);
}

info()