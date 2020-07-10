import React from 'react';
import CartItem from "./CartItem";
class Cart extends React.Component {

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

    deleteProduct = (id)=>{
        const products = this.state.products;
        const items = products.filter((item)=>{return item.id!==id});
        this.setState({
            products:items
        });
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((item) => {
                    return <CartItem product={item} key={item.id} 
                    increaseQty = {this.increaseQuantity} 
                    decreaseQty = {this.decreaseQuantity}
                    deleteProduct = {this.deleteProduct} />
                })}
            </div>
        );
    }
}



export default Cart;