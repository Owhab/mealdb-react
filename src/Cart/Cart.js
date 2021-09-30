import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {list} = props;
    console.log(props.list);
    
    // list.map(data => console.log(data))

    return (
        <div className = 'cart-container'>
            <h1>Meals List</h1>
            
            <h3>Listed meals: {props.list.length} </h3>
            {
                props.list.map(item => 
                    <li>{item.strMeal}</li>
                    )
            }
            
        </div>
    );
};

export default Cart;