import React, { Component } from 'react'

const styles = {
    productPreview: {
        width: "40%",        
    },
    image: {
        display: "block",
        maxHeight: "100%",
        maxWidth: "100%"
    }
}

export default class ProductImagePreview extends Component {
    render() {
        const { imageUrl, styleName } = this.props

        return(
            <div className="ProductPreview" style={styles.productPreview}>
                    <img src={imageUrl} alt={styleName} style={styles.image}></img>
            </div>            
        )
    }
}














