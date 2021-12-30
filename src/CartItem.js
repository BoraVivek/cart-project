import React from 'react';

// Class Based Component
const CartItem = (props) => {
     //Getting the product details from the props
     const { price, title, qty } = props.product; //Object de-structuring

     //Object de-structuring of functions from Props
     const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;

    return (
        <div className='cart-item'>
            <div className="left-block">
                {/* Here we are using styles.image , which is adding inline style to the img element */}
                <img style={styles.image} alt={title} /> 
            </div>
            <div className="right-block">
                {/* Directly using Inline CSS */}
                <div style={ {fontSize: 25} }>{title}</div>
                <div style={ {color: '#777'} }>Rs. {price}</div>
                <div style={ {color: '#777'} }>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                        alt='increase' 
                        className='action-icons' 
                        //Here we get handleIncreaseQuantity inside the onIncreaseQuantity prop from Cart Component, 
                        /**
                         * So we also have to pass the product to that function, therefore we can't directly pass the argument to the function
                         * as it will call the function, therefore we have to, use arrow function syntax, to avoid calling of function
                         */
                        onClick = {() => onIncreaseQuantity(product)}
                        src='https://cdn-icons-png.flaticon.com/512/1828/1828926.png' />

                    <img 
                        alt='decrease' 
                        className='action-icons'
                        onClick= {() => onDecreaseQuantity(product)}
                        src='https://cdn-icons-png.flaticon.com/512/992/992683.png' />

                    <img 
                        alt='delete' 
                        className='action-icons' 
                        onClick = {() => onDeleteProduct(product.id)}
                        src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' />
                </div>
            </div>
        </div>
    );
}

//Object for Inline-styling which we can than refer in the element
// We can't name object properties as border-radius, meaning we can't add a - in between of names, so we use camelCase to write name of CSS properties. Eg: border-radius => borderRadius, font-size => fontSize
const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;