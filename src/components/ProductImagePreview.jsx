import React, { Component } from 'react'
import classes from './modules/ProductImagePrview.module.css'
import HeartRate from './HeartRate'
import Clock from './Clock'

export default class ProductImagePreview extends Component {
    render() {
        const { imageUrl, styleName, currentFeatureIndex } = this.props

        return(
            <div className={classes.ProductImagePreview} >
                <img className={classes.Image} src={imageUrl} alt={styleName} >
                </img>       
                { currentFeatureIndex === 0 && <Clock /> }                         
                { currentFeatureIndex === 1 && <HeartRate /> }                
            </div>            
        )
    }
}














