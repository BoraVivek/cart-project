import React from 'react';
import CartItem from './CartItem';

// Cart Wrapper for CartItem
class Cart extends React.Component {

    //Creating State
    constructor(){
        super();
        //Creating a State for list of products
        this.state = {
            products: [
                {
                    price: 99,
                    title: "Watch",
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: "Mobile Phone",
                    qty: 10,
                    img: '',
                    id: 2,
                },
                {
                    price: 999,
                    title: "Laptop",
                    qty: 4,
                    img: '',
                    id: 3,
                }
            ]
        }
    }

    render() {
        //Desctructuring Products from State
        const { products } = this.state;
        return ( 
            <div className = 'cart'> 
                {/* Looping through products, and sending the product details as props to the CartItem Component */}
                { products.map((product) => {
                    return (
                        <CartItem 
                            product={product}  
                            key={product.id} />
                    );
                })}
            </div>
        );
    }
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