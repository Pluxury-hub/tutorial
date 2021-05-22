// класс - описание предмета из жизни
// constructor - сбор параметров и тд
// this - обращение к самому классу

class Person {
	constructor(name, age, happiness) {
		this.name = name;
		this.age = age;
		this.happiness = happiness;
	}
}

// объет
var alex = new Person('Alex', 45, true);
var bob = new Person('Bob', 25, false);

// Даём другой параметр
alex.name = 'alex2';

// вывсти имя
console.log(alex.name);

//---------------------------------------------------------------------

class Person2 {
	constructor(name, age, happiness) {
		this.name = name;
		this.age = age;
		this.happiness = happiness;
	}
// вывсти имя и возраст (создание функции)
	info() {
		console.log(this.name + this.age);
	}
}

var alex = new Person2('Alex', 45, true);
// выводим возраст и имя
alex.info();