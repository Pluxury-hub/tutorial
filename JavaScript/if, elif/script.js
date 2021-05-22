var number = 15;
var isHasHouse = true;

if (number == 15) {
	console.log("Ok");
} else if (number < 10) {
	console.log("ok");
} else if (number != 20) {
	console.log(number)
} else {
	console.log("Else!");
}

// || - or (ъ)
// && - and (7)
// если isHasHouse просто написать, то будет проверяться на значение true
// !isHasHouse будет проверять на значение false
if (number == 15 || isHasHouse) {
	console.log("Ok");
} else if (number < 10 && isHasHouse == false) {
	console.log("ok");
} else if (number != 20 %% !isHasHouse) {
	console.log(number)
} else {
	console.log("Else!");
}

// switch - проверка
// case - случай
// break - прервать проверку
// default - наподобие else. break можно не прописовать
var stroka = "word";

switch(stroka) {
	case "4": 
		console.log("Переменная со значением 4");
		break;
	case "45": 
		console.log("Переменная со значением 45");
		break;
	case "word": 
		console.log("Переменная со значением word");
		break;
	default:
		console.log("Default")
}