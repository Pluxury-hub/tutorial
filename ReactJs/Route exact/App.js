import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        // обромить тэгом
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*Route - спец компонента / path - аддресс / component - выбор компоненты / в кавычках выбор
                    exact - точное совпадение path (без корней)*/}
                    <Route exact path='/dialogs' component={Dialogs}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/Music' component={Music}/>
                    <Route exact path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
