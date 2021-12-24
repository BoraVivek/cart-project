import React from 'react';

// Class Based Component
class CartItem extends React.Component{

    //Creating State
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }

    render(){
        const { price, title, qty } = this.state; //Object de-structuring
        return (
            <div className='cart-item'>
                <div className="left-block">
                    {/* Here we are using styles.image , which is adding inline style to the img element */}
                    <img style={styles.image} /> 
                </div>
                <div className="right-block">
                    {/* Directly using Inline CSS */}
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs. {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt='increase' className='action-icons' src='https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1640310590~hmac=9b0b0ac9a89ed9693637d6c1f645f77a' />
                        <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992683.png' />
                        <img alt='delete' className='action-icons' src='https://cdn-icons.flaticon.com/png/512/2907/premium/2907762.png?token=exp=1640310617~hmac=e94c27e690b1015c4b1a9aaa2a214779' />
                    </div>
                </div>
            </div>
        );
    }
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