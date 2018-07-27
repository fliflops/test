import React, { Component } from 'react';
import * as Sessions from '../Session';
import {withRouter} from 'react-router-dom';
import Navigation from './Navigation';
import Content from './content';
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: false
        }
        this.handleCart = this.handleCart.bind(this)
        this.handleProd = this.handleProd.bind(this)
    }

    handleCart(){
        this.setState({
            cart: true
        })
        console.log('cart',this.state.cart)
    }

    handleProd(){
        this.setState({
            cart: false
        })
        console.log('prod',this.state.cart)
    }

    componentWillMount(){
        const {history} = this.props;
        if(Sessions.getCookie() !== null ){
            history.push('/home')
        }
        else{
            history.push('/')
        }   
    }
  
    render() {
        const {handleCart,handleProd} = this.state
        return (
            <div>
               <Navigation handleCart = {handleCart} handleProd = {handleProd}/>
               <Content/>
            </div>
        );
    }
}

export default withRouter(Main);
