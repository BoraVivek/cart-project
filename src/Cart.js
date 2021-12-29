import React from 'react';
import CartItem from './CartItem';

// Cart Wrapper for CartItem
class Cart extends React.Component{
    render(){
        return (
            <div className='cart'>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }
}

export default Cart;