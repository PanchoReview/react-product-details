import React, { Component } from 'react'
import classes from './modules/ProductImagePrview.module.css'
import HeartRate from './HeartRate'

export default class ProductImagePreview extends Component {
    render() {
        const { imageUrl, styleName, currentFeatureIndex } = this.props

        return(
            <div className={classes.ProductImagePreview} >
                <img className={classes.Image} src={imageUrl} alt={styleName} ></img>       
                { currentFeatureIndex === 1 && <HeartRate /> }                         

            </div>            
        )
    }
}














