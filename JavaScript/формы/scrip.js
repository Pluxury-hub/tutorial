// document - управление тегами
// getElementById - получить элемент по id
var text = document.getElementById('text');

// выведет id
console.log(text.id);
// выведет title
console.log(text.title);

// меняем title
text.title = "New text";


text.style.color = "red";
text.style.backgroundColor = "blue";

text.innerHTML = "New <br> string";

// меняем без переменной
document.getElementById('text').style.color = "white";


// массив
var spans = document.getElementsByTagName('span');
for(var i = 0; i < spans.length; i++) {
	// вывод данных 
	console.log(spans[i].innerHTML);
}

var spans = document.getElementsByClassName('simple-text');
for(var i = 0; i < spans.length; i++) {
	console.log(spans[i].innerHTML);
}