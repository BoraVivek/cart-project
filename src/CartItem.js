import React from 'react';

// Class Based Component
class CartItem extends React.Component{
    render(){
        return (
            <div className='cart-item'>
                <div className="left-block">
                    {/* Here we are using styles.image , which is adding inline style to the img element */}
                    <img style={styles.image} /> 
                </div>
                <div className="right-block">
                    {/* Directly using Inline CSS */}
                    <div style={ {fontSize: 25} }>Phone</div>
                    <div style={ {color: '#777'} }>Rs.999</div>
                    <div style={ {color: '#777'} }>Qty.1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
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