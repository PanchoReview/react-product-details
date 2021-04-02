import React, { Component } from 'react'
import BuyButton from './BuyButton'
import ProductColorSelector from './ProductColorSelector'
import ProductFeatures from './ProductFeatures'
import classes from './modules/ProductInfo.module.css'

export default class ProductInfo extends Component {
    render() {
        const { product, currentColorIndex, changeCurrentColor, currentFeatureIndex, changeCurrentFeature } = this.props

        return(
            <div className={classes.ProductInfo} >
                <h1>{product.title}</h1>
                <p className={classes.Description}>{product.description}</p>
                <ProductColorSelector 
                    colorOptions={product.colorOptions} 
                    currentColorIndex={currentColorIndex} 
                    changeCurrentColor={changeCurrentColor}
                />                
                <ProductFeatures 
                    features={product.featureList} 
                    currentFeatureIndex={currentFeatureIndex}
                    changeCurrentFeature={changeCurrentFeature} 
                />
                <BuyButton />
            </div>
        )
    }
}