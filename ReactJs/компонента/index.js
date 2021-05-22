
// импортируем React
import React from 'react';
// импортируем css
import './App.css'; import Header from './Header.js';
import Technologies from './technologies.js';

// стрелочная функция, которая возвращает (компонента)
const App = () => {
    return(
        // создать класс ClassName
        <div className="App">
            {/*вставляем компоненту внутри компоненты*/}
            <Header />
            <Technologies />
        </div>
  );
}


export default App;
