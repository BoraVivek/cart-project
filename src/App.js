import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

//Function based component
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      products: [{
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
      },
      ]
    }
  }

  //Function to increase the quantity of product
  handleIncreaseQuantity = (product) => {
    //Here we are fetching all products from the state
    const {
      products
    } = this.state;

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
    const {
      products
    } = this.state;

    //Now we are finding the index of the product where we have to decrease the quantity
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
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
    const {
      products
    } = this.state;

    //Returns an array containing products, whose id is not equals to productId
    const newProducts = products.filter((product) => {
      return product.id !== productId;
    })

    //Set newProducts as the products in state
    this.setState({
      products: newProducts
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty
    })

    return count;
  }

  render() {
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart products={this.state.products}
          handleDecreaseQuantity={this.handleDecreaseQuantity}
          handleIncreaseQuantity={this.handleIncreaseQuantity}
          handleDeleteProduct={this.handleDeleteProduct} />
      </div>
    );
  }
}

export default App;