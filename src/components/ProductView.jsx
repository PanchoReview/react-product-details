import React, { Component } from 'react'
import ProductData from './ProductData'
import ProductImagePreview from './ProductImagePreview'

const styles = {
    width: "70%",
    display: "flex",
    justifyContent: "center"    
}

export default class ProductView extends Component {
    state = {
        currentColor: 0
    }

    render() {
        const color = ProductData.colorOptions[this.state.currentColor]

        return(
            <div className="ProductView" style={styles}>
                <ProductImagePreview imageUrl={color.imageUrl} styleName={color.styleName}  />    
            </div>
            
        )
    }
}