import React from 'react';
import Login from './Login';
import {Route} from 'react-router-dom';
import Main from '../components/Main';


class App extends React.Component {
    render() {
        return (
                <div>
                    <Route exact path = "/" component = {Login}/>
                    <Route path = "/home" render = {() => <Main/>}/>
                </div>
        );
    }
}

export default App;