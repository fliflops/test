import React, { Component } from 'react';
import {Card,CardBody,Button,Row,Col,ButtonGroup,Collapse} from 'reactstrap';
import Cards from './Card';
import * as API from '../api/API';
import Cart from './Cart';
import {addtoCart } from '../redux/action';
import {connect} from 'react-redux'
import moment from 'moment';
import assign from 'lodash/assign';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = ({
            'items':[],
             collapse: false,
             active:'',
             date: moment().format("YYYY-MM-DD")
        })
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggle(index) {
        this.setState({ 
            collapse: !this.state.collapse,
            active: index                 
        }); 
      }
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount(){    
        API.fetchFood('fries')
        .then(items => {
             console.log(items);
             this.setState({
                 'items': items
             })
        })
    }

    render() {
        const {items} = this.state
         return (
            <div >     
                <Row>
                    <Col className = "h1">   
                        <h1 className = "display-4">Products</h1>
                    </Col>
                        {/* <Col>
                            <ButtonGroup size = "lg">
                            <Button >Fries</Button>
                            <Button >Pizza</Button>
                            <Button >Fruits</Button>
                            </ButtonGroup>
                        </Col> */}
                </Row>
                <Row>
                    {items.map((itemsMap,idx) => 
                        <Col sm = '4' key = {idx} >
                             <Cards content = {itemsMap} idx = {idx}/>
                        </Col>)}
                </Row>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
       testing: (data) => dispatch(addtoCart(data))
    }
}

export default connect(null,mapDispatchToProps)(Products);