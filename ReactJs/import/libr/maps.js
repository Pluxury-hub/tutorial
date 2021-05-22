
// импорт с папок выше уровня(./../)
// импорт функции с (from) относительно меня(./) название файла
import openGoogle from'./../google.js';
import openYandex from'./yandex.js';


let openAllMaps = () => {
	openGoogle();
	openYandex();
}

export default openAllMaps;