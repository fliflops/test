import React from 'react';
import {Input,Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/login.css';
import Darth from '../Image/dribbble-02_1x.png';
import * as Sessions from '../Session';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(){
        const {history} = this.props;
        const users = {
            'Name': 'Jason',
            'Password': '123'
        }
        Sessions.insertCookie(users) 
        history.push('/home');
    }

    componentWillMount(){
        const {history} = this.props;
        if(Sessions.getCookie() !== null){
            history.push('/home')
        }
        else{
            history.push('/')
        }
    }

    render() {
        //console.log(Sessions.getCookie());    
        return (
            <div className = 'body'>              
                <div className = 'loginBox'>    
                    <img src = {Darth} alt = '' className = 'avatar'/>      
                        <h1 className = 'h1'>Login Here</h1>       
                        <Input type = 'text' name = 'username' placeholder = 'Username'/>
                        <Input type = 'password' placeholder = 'Password'/>          
                        <Button onClick = {this.handleLogin} className = 'button'color = 'warning' size = 'lg' block>Login</Button>                                    
                </div>
           </div>
        );
    }
}


export default withRouter(Login);