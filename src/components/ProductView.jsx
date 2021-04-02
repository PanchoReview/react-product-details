import React, { Component } from 'react'
import ProductData from './ProductData'
import ProductImagePreview from './ProductImagePreview'
import ProductInfo from './ProductInfo'

const styles = {
    width: "70%",
    border: "3px solid #fff",
    padding: "20px",
    margin: "50px auto"
}

export default class ProductView extends Component {
    state = {
        currentColor: 0
    }

    changeCurrentColor = selectedColor => {
        console.log(selectedColor)
        
        this.setState({currentColor: selectedColor })
    }

    render() {
        const color = ProductData.colorOptions[this.state.currentColor]

        return(
            <div className="ProductView" style={styles}>
                <ProductImagePreview imageUrl={color.imageUrl} styleName={color.styleName}  />    
                <ProductInfo product={ProductData} currentColorIndex={this.state.currentColor} changeCurrentColor={this.changeCurrentColor} />
            </div>
            
        )
    }
}