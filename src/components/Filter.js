import React, { Component } from 'react';
import {connect} from 'react-redux';

class Filter extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }   

    handleClick(){

    }
    render() {
        const {content,handleChange} = this.props
        const fill = null
        return (
            <div>
                <input name  = 'date' type = 'date' onChange = {handleChange}/>
                <button>Filter</button>
            </div>
        );
    }
}


export default Filter;