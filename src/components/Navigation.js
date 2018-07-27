import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink as Nlink,
    Button } from 'reactstrap';
import * as Sessions from '../Session'
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {cartAction} from '../redux/action'
import '../css/nav.css'
class Navigation extends Component {
    constructor(props){
        super(props)
        this.handleSignOut = this.handleSignOut.bind(this)

    }

    handleSignOut(){
        const {history} = this.props;
        history.push('/')
        Sessions.removeCookie();
    }

    render() {
        return (
            <div>
                <Navbar color = "dark">
                    <Nav className="ml-auto">
                        <NavItem>
                                <Link className = "links" to = "/home/products" onClick = {()=> this.props.cart({item:false})} >Products</Link>
                        </NavItem>
                        <NavItem>
                                <Link className = "links" to = "/" >Calendar</Link>                
                        </NavItem>
                        <NavItem>
                                <Link className = "links" to = "/home/cart" onClick = {()=> this.props.cart({item:true})} >Cart</Link>                
                        </NavItem>
                        <NavItem>
                            <Button color = "warning" onClick = {this.handleSignOut}> Sign Out</Button>
                        </NavItem>
                    </Nav>
                </Navbar>      
            </div>
        );
    }
}

const mapDispatchToRouter =(dispatch) => {
    return{
        cart: (item) => dispatch(cartAction(item))
    }

}

export default connect(null,mapDispatchToRouter)(withRouter(Navigation));