import {CART_ADD_ACTION,CART_REMOVE_ACTION,CART_ACTION} from '../redux/action';
import {combineReducers} from 'redux';

const initialCart= {
    items: [],
    cart:false
}

export const cart = (state = initialCart,action)=>{
    switch(action.type){
        case CART_ADD_ACTION: {
            const {item,date} = action
            return{
                ...state,
                items: [
                    ...state.items,
                        item
                        ]
            }
        }

        case CART_REMOVE_ACTION:{
            return{
                ...state,
                   items: state.items.filter( i => i.label !== action.item.label)
            }
        }
        case CART_ACTION: {
            return{
                ...state,
                cart:action.item
            }  
        }
        default: {
            return {...state};
        }
    }
}
    
    export const cartReducer = (state = [], action) =>{
        switch(action.type){
            
        }
    }

export default combineReducers({cart})
