import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [
        {
          price: 56999,
          title: "Phone",
          qty: 1,
          img: 'https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg',
          id: 1,

        },
        {
          price: 33999,
          title: "Watch",
          qty: 1,
          img: 'https://assets.croma.com/medias/sys_master/images/images/hda/h37/8869088690206/221272_pjpeg.jpg',
          id: 2,

        },
        {
          price: 89999,
          title: "Laptop",
          qty: 1,
          img: 'https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SX466_.jpg',
          id: 3,

        },
        {
          price: 900,
          title: "Mop",
          qty: 1,
          img: 'https://images-na.ssl-images-amazon.com/images/I/71vYyIGSqLL._SL1500_.jpg',
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

  getCartCount() {
    let sum = 0;
    for (const iterator of this.state.products) {
      sum += iterator.qty;
    }
    return sum;
  }

  getTotalPrice(){
    let sum = 0;
    for (const iterator of this.state.products) {
      sum += iterator.qty*iterator.price;
    }
    return sum;
  }

  render() {
    return (
      <div className="App">
        <Navbar cartQuant={this.getCartCount()} />
        <Cart products={this.state.products}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          deleteProduct={this.deleteProduct} />
        <div style={{fontSize:"20px", padding:"20px"}}>Total : {this.getTotalPrice()}</div>
      </div>
    );
  }


}

export default App;
