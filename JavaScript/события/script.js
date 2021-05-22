var counter = 0;

// подсчитуем кол-во нажатий
function onClickButton() {
	counter++;
	console.log(counter);
}

// innerHTML - свойство, которое устанавливает значение внутрь объекта в HTML
function onClickButton(el) {
	counter++;
	el.innerHTML = "Вы нажали на кнопку: " + counter;
}


// style - css
function onClickButton(el) {
	counter++;
	el.innerHTML = "Вы нажали на кнопку: " + counter;
	el.style.background = "#333";

	console.log(el.name);
}