import React, { Component } from 'react';
import {Card,CardImg,CardBody,Button,Row,Col,CardTitle,Collapse} from 'reactstrap';
import {connect} from 'react-redux';
import {removetoCart,addtoCart} from '../redux/action';
import moment from 'moment';
import assign from 'lodash/assign';
import '../css/card.css';

class Cards extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapse: false,
            active:'',
            date: moment().format("YYYY-MM-DD")
        }

        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggle(index){
        this.setState({
            collapse: !this.state.collapse,
            active: index
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        const {content,del,idx,remove,add} = this.props
        return ( 
            <div className = "col">          
            <Card>
                <CardImg top width = "100%" src = {content.image}/>
                <CardBody>
                    <CardTitle>{content.label}</CardTitle>
                </CardBody>       
                <CardBody>
                    {!del ? (
                    <div>
                    <Button onClick = {this.toggle.bind(this,idx)}>Add to Cart</Button>
                    <Collapse isOpen={this.state.collapse && this.state.active === idx}>
                        <input type = 'date' name = 'date' value = {this.state.date} onChange = {this.handleChange}></input>
                        <Button onClick = { () => {
                            this.setState({collapse:!this.state.collapse})
                            add({item:assign(content,{date:this.state.date})})}}>Confirm</Button>
                    </Collapse>
                    </div>)
                    :(
                    <div>
                    <Button onClick = {this.toggle.bind(this,idx)}>Ingerdients</Button>
                    <Collapse isOpen = {this.state.collapse && this.state.active === idx}>
                        <CardBody>
                            {content.ingredientLines.map((i,index) => <li key = {index}>{i}</li>)}
                        </CardBody>
                    </Collapse>
                    <Button onClick = {() => remove({item:content})} color = 'danger' block>REMOVE</Button>
                    </div>)}
                </CardBody>
            </Card>
            </div>
        );
    }
}

const mapStateToProps = ({cart}) =>{
    return{
        del: cart.cart,
        item: cart.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        add: (item) => dispatch(addtoCart(item)),
        remove: (item) => dispatch(removetoCart(item))
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(Cards);