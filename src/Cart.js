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


    //Function to increase the quantity of product
    handleIncreaseQuantity = (product) => {
        //Here we are fetching all products from the state
        const { products } = this.state;

        //Now we are finding the index of the product where we have to increase the quantity
        const index = products.indexOf(product);

        // Now we increase the quantity of product at that particular index
        products[index].qty += 1;

        //Now we replace the products array with the updated products
        this.setState({
            products: products
        })
    }

    //Function to decrease the quantity of product
    handleDecreaseQuantity = (product) => {
         //Here we are fetching all products from the state
         const { products } = this.state;

         //Now we are finding the index of the product where we have to decrease the quantity
         const index = products.indexOf(product);

         if(products[index].qty === 0){
             return;
         }
 
         // Now we decrease the quantity of product at that particular index
         products[index].qty -= 1;
 
         //Now we replace the products array with the updated products
         this.setState({
             products: products
         })
    }

    //Function to delete the product
    handleDeleteProduct = (productId) => {
        const { products } = this.state;

        //Returns an array containing products, whose id is not equals to productId
        const newProducts = products.filter((product) => {
            return product.id !== productId;
        })

        //Set newProducts as the products in state
        this.setState({
            products: newProducts
        })
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
                            key={product.id}
                            // Here we are sending the functions as props to the Child Component
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            onDecreaseQuantity = {this.handleDecreaseQuantity} 
                            onDeleteProduct = {this.handleDeleteProduct} />
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