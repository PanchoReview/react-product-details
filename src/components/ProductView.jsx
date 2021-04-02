import React, { Component } from 'react'
import ProductData from './ProductData'
import ProductImagePreview from './ProductImagePreview'
import ProductInfo from './ProductInfo'
import classes from './modules/ProductView.module.css'

export default class ProductView extends Component {
    state = {
        currentColor: 0,
        currentFeature: 0
    }

    changeCurrentColor = selectedColor => {        
        this.setState({currentColor: selectedColor })
    }

    changeCurrentFeature = selectedFeature => {
        this.setState({ currentFeature: selectedFeature })
    }

    render() {
        const color = ProductData.colorOptions[this.state.currentColor]

        return(
            <div className={classes.ProductView}>
                <ProductImagePreview 
                    imageUrl={color.imageUrl} styleName={color.styleName}  
                    currentFeatureIndex={this.state.currentFeature}
                />    
                <ProductInfo product={ProductData} 
                    currentColorIndex={this.state.currentColor} 
                    changeCurrentColor={this.changeCurrentColor} 
                    currentFeatureIndex={this.state.currentFeature}
                    changeCurrentFeature={this.changeCurrentFeature}
                />
            </div>
            
        )
    }
}