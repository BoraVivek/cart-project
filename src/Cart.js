import React from 'react';
import CartItem from './CartItem';

// Cart Wrapper for CartItem
class Cart extends React.Component {
    render() {
        const arr = [1, 2, 3, 4, 5];
        return ( 
            <div className = 'cart'> 
            { arr.map((item) => item + 5) } 
            </div>
        );
    }
}

export default Cart;