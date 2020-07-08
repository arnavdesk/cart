import React from 'react';
import CartItem from "./CartItem";
class Cart extends React.Component {

    constructor() {
        super()
        this.state = {products :[
            {
                price: 999,
                title: "Phone",
                qty: 1,
                img: '',
                id:1
            },
            {
                price: 99,
                title: "Watch",
                qty: 10,
                img: '',
                id:2
            },
            {
                price: 99999,
                title: "Laptop",
                qty: 1,
                img: '',
                id:3
            },
        ] }
    }
    render() {
        const {products} = this.state;
        return (
            <div className="cart">
                { products.map((item)=>{
                    return <CartItem qty={item.qty} price={item.price} title={item.title} img={item.img} key={item.id} />
                }) }
            </div>
        );
    }
}


export default Cart;