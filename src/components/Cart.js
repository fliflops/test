import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Col,Row,Card,CardBody,Button,Collapse,CardTitle,CardText} from 'reactstrap'
import Cards from './Card'
import {removetoCart} from '../redux/action';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            date:'',
            items: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
    }

    render() {
        const {cart: {items}} = this.props
        return (
            <div>
                <Row>
                    <Col>
                        <h1 className = "display-4">Cart</h1>
                    </Col>
                    <Col style = {{
                        marginTop: '20px'
                    }}>
                        <input type = 'date' name = 'date' onChange = {this.handleChange} value = {this.state.date}></input>
                    </Col>  
                </Row>
                    <Filter filterItems = {items}/>
            </div>
        );
    }
}

class Filter extends Component {
    render() {
        const {filterItems,date} = this.props
        if(!date){
            const mapItems = filterItems.map((i,idx) =>   
            <Col key = {idx}>
                <Cards content = {i}/>
            </Col>
            
        )
            return (
                <Row>{mapItems}</Row>
                    
            )
        }
        else {
            const filters = filterItems.filter(i => i.date === this.props.date)
            const mapItems = filters.map((i,idx) => 
            <Col key = {idx}>
                    <Cards content = {i} idx = {idx}/>
            </Col>
            )
            return(
                
                    <Row>{mapItems}</Row>
                
            )
        }        
      
    }
}

const mapStateToProps = ({cart}) => {
    return{
        cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        remove: (item) => dispatch(removetoCart(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);