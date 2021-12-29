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

        //Binding in Constructor to the increaseQuantity
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    //Binding using arrow function
    increaseQuantity = () => {
        // this.state.qty += 1;

        //setState 1st Method - It triggers the re-rendering of our component - Shallow Merging
        // this.setState({
        //     qty: this.state.qty+1,
        // });

        // setState 2nd Method - if previous state required use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty+1,
            }
        });

        // console.log('this',this);

        // this.setState({qty: this.state.qty + 2}, () => {
        //     console.log(this.state.qty);
        // });

        // this.setState({qty: this.state.qty + 3}, () => {
        //     console.log(this.state.qty);
        // })
    }

    decreaseQuantity = () => {
        const { qty } = this.state;

        //If Quantity is 0, then return
        if(qty === 0){
            return;
        }

        this.setState({
            qty : this.state.qty - 1,
        });
    }

    render(){
        
        const { price, title, qty } = this.state; //Object de-structuring
        return (
            <div className='cart-item'>
                <div className="left-block">
                    {/* Here we are using styles.image , which is adding inline style to the img element */}
                    <img style={styles.image} alt={this.state.title} /> 
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
                            // Binding this in Render
                            // onClick={this.increaseQuantity.bind(this)}
                            onClick = {this.increaseQuantity}
                            src='https://cdn-icons-png.flaticon.com/512/1828/1828926.png' />

                        <img 
                            alt='decrease' 
                            className='action-icons'
                            onClick= {this.decreaseQuantity}
                            src='https://cdn-icons-png.flaticon.com/512/992/992683.png' />

                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' />
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