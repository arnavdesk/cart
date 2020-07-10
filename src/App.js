import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: '',
          id: 1,

        },
        {
          price: 99,
          title: "Watch",
          qty: 10,
          img: '',
          id: 2,

        },
        {
          price: 99999,
          title: "Laptop",
          qty: 1,
          img: '',
          id: 3,

        },
        {
          price: 9,
          title: "Mop",
          qty: 1,
          img: '',
          id: 4,

        },
      ]
    }
  }

  increaseQuantity = (product) => {
    product.qty++;
    this.setState(product);
  }

  decreaseQuantity = (product) => {
    if (product.qty <= 1) {
      return;
    }
    product.qty--;
    this.setState(product);
  }

  deleteProduct = (id) => {
    const products = this.state.products;
    const items = products.filter((item) => { return item.id !== id });
    this.setState({
      products: items
    });
  }

  calculateQuantity(){
    let sum=0;
    for (const iterator of this.state.products) {
      sum+=iterator.qty;
    }
    return sum;
  }

  render() {
    let cartQ =0 ;
    cartQ = this.calculateQuantity();
    return (
      <div className="App">
        <Navbar cartQuant = {cartQ}/>
        <Cart products={this.state.products}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          deleteProduct={this.deleteProduct} />
      </div>
    );
  }


}

export default App;
