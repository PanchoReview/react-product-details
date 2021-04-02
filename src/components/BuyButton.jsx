import React, { Component } from 'react'

const styles = {    
    buyNowButton: {
        color: "#FFFFFF",
        backgroundColor: "#4CAF50",
        border: "none",
        display: "inline-block",
        padding: "8px 16px",
        verticalAlign: "middle",
        textAlign: "center",
        cursor: "pointer",
        whiteSpace: "nowrap",
        borderRadius: "20px",
    }
}

export default class BuyButton extends Component {
    render() {
        return(
            <a type="button" value="Buy Now" style={styles.buyNowButton}>Buy Now</a>
        )
    }
}