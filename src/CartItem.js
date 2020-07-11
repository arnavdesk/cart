import React from 'react';

const CartItem = (props) => {
    const { product, increaseQuantity, decreaseQuantity, deleteProduct } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img} alt="product" />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>
                    {product.title}
                </div>
                <div style={{ fontSize: 18, color: '#777', marginTop: 5 }}>
                    {product.price}
                </div>
                <div style={{ fontSize: 18, color: '#777', marginTop: 5 }} >
                    Qty : {product.qty}
                </div>
                <div className="cart-item-actions">
                    {/* buttons */}
                    <img
                        className="action-icons"
                        src="https://image.flaticon.com/icons/svg/864/864378.svg"
                        alt="Increase"
                        onClick={function () { increaseQuantity(product) }}
                    />
                    <img
                        className="action-icons"
                        src="https://image.flaticon.com/icons/svg/864/864373.svg"
                        alt="Decrease"
                        onClick={() => { decreaseQuantity(product) }}
                    />
                    <img
                        className="action-icons"
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                        alt="Delete"
                        onClick={() => { deleteProduct(product.id) }}
                    />
                </div>
            </div>
        </div>
    );
}


const styles = {
    image: {
        width: 110,
        height: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;