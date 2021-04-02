import React, { Component } from 'react'
import ProductColorSelector from './ProductColorSelector'
import ProductFeatures from './ProductFeatures'

const styles = {
    productInfo: {
        width: "50%",    
        float: "left",
        padding: "20px",
            
    },
    description: {
        marginBottom: "30px"
    }
}

export default class ProductInfo extends Component {
    render() {
        const { product, currentColorIndex, changeCurrentColor } = this.props

        return(
            <div style={styles.productInfo}>
                <h1>{product.title}</h1>
                <p style={styles.description}>{product.description}</p>
                <ProductColorSelector 
                    colorOptions={product.colorOptions} 
                    currentColorIndex={currentColorIndex} 
                    changeCurrentColor={changeCurrentColor}
                />                
                <ProductFeatures features={product.featureList} />
            </div>
        )
    }
}