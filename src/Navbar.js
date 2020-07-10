import React from 'react';
import CartItem from "./CartItem";
const Navbar = (props) => {
    const {cartQuant} =props;
    return (

        <div style={styles.navbar}>
            <h1 style={styles.brandLogo}>NinjaKart</h1>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/3081/3081822.svg" alt="cartIcon"></img>
                <span style={styles.cartCount}>{cartQuant}</span>
            </div>
        </div>
    );
}

const styles = {
    brandLogo:{
        fontWeight:"500",
        fontFamily:"helvetica",
        margin:"5px 20px"
    },
    navbar: {
        display: "flex",
        width: "100%",
        height: "50px",
        backgroundColor: "#1976D2",
        color: "",
    },
    cartIcon: {
        displlay: "inline-block",
        height: "30px",
        width: "50px",
        marginTop: "12px",
    },
    cartCount: {
        position: "absolute",
        top: "4px",
        right: "0px",
        color: "black",
        height:"18px",
        width:"18px",
        padding:"3px",
        textAlign:"center",
        borderRadius: "50%",
        backgroundColor: "#FFEA00",
    },
    cartIconContainer: {
        position: "relative",
        marginLeft: "auto",
        marginRight: "10px"
    }
}



export default Navbar;