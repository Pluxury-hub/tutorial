// интервалы - выполнение кода каждое n-нок время
// setInterval - всроенная функция / 1-ый параметр - своя функция / 2-ой - кол-во милисекунд
setInterval(my_func, 1000);

var counter = 0;
function my_func() {
	counter++;
	console.log(counter);
}

// создаётся функция внутри интервала
setInterval(function() {
	counter++;
	console.log(counter);
}, 1500);


// clearInterval - остановка интервала
var id = setInterval(my_func, 1000);

var counter = 0;
function my_func() {
	counter++;
	console.log(counter);

	if(counter == 30)
		clearInterval(id);
}


// таймер / 2-ой параметр - черезсколько запустить
setTimeout(function() {
	console.log("Timer is working!")
}, 2000);