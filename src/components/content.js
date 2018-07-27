import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Products from './products';
import Cart from './Cart';

class Content extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path = "/home/products" component = {Products}/>
                    <Route path = "/home/cart" component = {Cart}/>
                    <Route component = {Products}/>
                </Switch>       
            </div>
        );
    }
}

export default Content;