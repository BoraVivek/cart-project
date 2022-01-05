import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

//Importing DB from the Firebase Configuration
import { db } from './firebase-config';
//Importing Collection and getDocs from Firestore of firebase
import { collection, getDocs } from 'firebase/firestore';


//Function based component
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      products: [],
      loading: true,
    }
  }

  	//Using the React Lifecycle to fetch data before rendering
  componentDidMount() {
    //Get the User Collection Reference, In collection we pass the db instance of firebase
    const usersCollectionRef = collection(db, "products");

    //Now we create a getProducts function, which fetches the Products from the Firebase db
    const getProducts = async () => {
      //Get Documents from the Products collection
      const data = await getDocs(usersCollectionRef);

      //Fetch data from the document, and set the ID of the document.
      const products = data.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });

      //Set the state of products as per the fetched products
      this.setState({
        products,
        loading: false,
      });
    }

    //Call the getProducts function
    getProducts();
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

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;
    products.map((product) => {
      return cartTotal += product.qty * product.price
    })

    return cartTotal;
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart products={products}
          handleDecreaseQuantity={this.handleDecreaseQuantity}
          handleIncreaseQuantity={this.handleIncreaseQuantity}
          handleDeleteProduct={this.handleDeleteProduct} />

          {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;