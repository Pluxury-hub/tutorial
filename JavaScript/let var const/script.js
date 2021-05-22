// var
// инициализация - присваивание значения переменной
// область видимости: глоб и лок. (вспомни function)
var interview;
console.log(interview);
interview = 'Hello';
console.log(interview);

// let - объявить лок переменную с областью видимости ограниченную текущим блоком кода
// let - только одна переменная с именем, но можно исп в разных областях
function getNum() {
	var num = 7;
	if (true) {
		var num = 77;
		// 77
		console.log(num);
	}
	// 77
	console.log(num);
}

let num = 9;
function getNum() {
	let num = 7;
	if (true) {
		let num = 77;
		// 77
		console.log(let);
	}
	// 7
	console.log(let);
}
// 9
console.log(let);

// const - нельзя присвоить новое значение нигде, если объект то можно изменить (но нельзя присвоить другой объект)
const test = {
	num: 99,
	mes: 'Hello'
}
test.num = 999;
// 999
console.log(test.num)
