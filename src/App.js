import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

//Importing DB from the Firebase Configuration
import { db } from './firebase-config';
//Importing Collection and getDocs from Firestore of firebase
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';


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
    //Get the Product Collection Reference, In collection we pass the db instance of firebase
    const productsCollectionRef = collection(db, "products");

    //Now we create a getProducts function, which fetches the Products from the Firebase db
    const getProducts = () => {
      //Here we are using onSnapshot to listen to document changes in firebase, so that if there are any changes in firebase, our component renders the changes without refreshing the page.
      onSnapshot(productsCollectionRef, (snapshot) => {
        //This callback function is called when any update takes place in db
        //Fetch data from the document, and set the ID of the document.
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });

        //Set the state of products as per the fetched products
        this.setState({
          products,
          loading: false,
        });
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

    //Get the Product Document Reference, In doc we pass the db instance of firebase, name of collection, and id of document to be fetched
    const productDocRef = doc(db, "products", products[index].id);

    //We call the updateDoc function of Firestore, and provides the updated data, 
    updateDoc(productDocRef, {
      qty: products[index].qty + 1,
    }).then(() => {
      console.log('Document updated Successfully');
    }).catch((err) => {
      console.log("Document failed to update", err);
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

    //Get the Product Document Reference, In doc we pass the db instance of firebase, name of collection, and id of document to be fetched
    const productDocRef = doc(db, "products", products[index].id);

    //We call the updateDoc function of Firestore, and provides the updated data, 
    updateDoc(productDocRef, {
      qty: products[index].qty - 1,
    }).then(() => {
      console.log('Document updated Successfully');
    }).catch((err) => {
      console.log("Document failed to update", err);
    })
  }

  //Function to delete the product
  handleDeleteProduct = (productId) => {
    
    //Get the Product Document Reference, In doc we pass the db instance of firebase, name of collection, and id of document to be fetched
    const productDocRef = doc(db, "products", productId);

    //Calling the deleteDoc function of Firestore, and passing the productDocRef to it, in order to delete that product
    deleteDoc(productDocRef).then(() => {
      console.log("Product deleted successfully");
    }).catch((err) => {
      console.log("Failed to delete products");
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

  //Function to add Product in the Firebase
  addProduct = () => {
    //Get the Product Collection Reference, In collection we pass the db instance of firebase
    const productsCollectionRef = collection(db, "products");

    //Now we are using the addDoc function of FireStore, to store our new Document. We pass UserCollectionRef to the addDoc function
    addDoc(productsCollectionRef, {
      img: '',
      price: 900,
      qty: 3,
      title: 'Washing Machine'
    }).then((docRef) => {
      //On Successful adding of data, we console log the data
      console.log("Product has been added", docRef);
    }).catch((err) => {
      //On failure, we print the error in console.
      console.log("Error in Adding Product", err);
    });
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ padding: 23 }}>Add a Product</button>
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