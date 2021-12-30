import React from 'react';
import CartItem from './CartItem';

// Cart Wrapper for CartItem
const Cart = (props) => {
    const { products, handleDecreaseQuantity, handleIncreaseQuantity, handleDeleteProduct } = props;

    return (
        <div className='cart'>
            {/* Looping through products, and sending the product details as props to the CartItem Component */}
            {products.map((product) => {
                return (
                    <CartItem
                        product={product}
                        key={product.id}
                        // Here we are sending the functions as props to the Child Component
                        onIncreaseQuantity={handleIncreaseQuantity}
                        onDecreaseQuantity={handleDecreaseQuantity}
                        onDeleteProduct={handleDeleteProduct} />
                );
            })}
        </div>
    );
}


export default Cart;

// Props are similar to arguments we pass to functions.
/**
 * function(a,b){
 *  return a+b
 * }
 * 
 * We can pass props by specifying attributes
 * 
 * We can pass anything as props like, function, boolean, jsx etc..
 */