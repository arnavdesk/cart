import React from 'react';
import CartItem from "./CartItem";
class Cart extends React.Component {

    render() {
        const { products, increaseQuantity, decreaseQuantity ,deleteProduct} = this.props;
        return (
            <div className="cart">
                {products.map((item) => {
                    return <CartItem product={item} key={item.id} 
                    increaseQuantity = {increaseQuantity} 
                    decreaseQuantity = {decreaseQuantity}
                    deleteProduct = {deleteProduct} />
                })}
            </div>
        );
    }
}



export default Cart;