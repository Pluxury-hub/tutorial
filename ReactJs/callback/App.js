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
import {addPost} from "./redux/state";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.messagesPage}/>}/>

                    <Route path='/news'
                           render={() => <News/>}/>

                    <Route path='/profile'
                           render={() => <Profile
                               state={props.state.profilePage}
                               addPost={props.addPost}/>}/>

                    <Route path='/Music'
                           render={() => <Music/>}/>

                    <Route path='/settings'
                           render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
