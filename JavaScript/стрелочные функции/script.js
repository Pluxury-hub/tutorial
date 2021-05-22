
//обычная функция
function summ() {
	console.log('Hello' + 'world');
}

summ();

// стрелочная функция - без прописования function
let myFunction = (z) => {
	console.log('work');
	console.log(z * 3);
}

myFunction(3);

let myFunction = (z) => {
	console.log('work');
	return z * 3;
}

console.log(myFunction(3));

// упрощения
let myFunction1 = (z) => return z * 3;

console.log(myFunction1(5));


// ----------------------
let a = (d, c) => {
	//
	//
	return c;
}

let a = () => {
	//
	//
	return true;
}

let a = c => {
	//
	//
	return c;
}

let a = (d, c) => d * c