import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super()
        this.state = {
            price: 999,
            title: "Phone",
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = () => {
        // this.setState({ qty: this.state.qty + 1 });
        // Alternative way
        this.setState((prevState)=>{
            return {qty:prevState.qty+1};
        })
    }
    decreaseQuantity = () => {
        if (this.state.qty > 1) {
            this.setState({ qty: this.state.qty - 1 });
        }
    }
    render() {
        const { price, qty, title } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>
                        {title}
                    </div>
                    <div style={{ fontSize: 18, color: '#777', marginTop: 5 }}>
                        {price}
                    </div>
                    <div style={{ fontSize: 18, color: '#777', marginTop: 5 }} >
                        Qty : {qty}
                    </div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/864/864378.svg"
                            alt="Increase"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/864/864373.svg"
                            alt="Decrease"
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                            alt="Delete"
                        // onClick={this.delete.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
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