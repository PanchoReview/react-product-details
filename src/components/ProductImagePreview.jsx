import React, { Component } from 'react'
import classes from './modules/ProductImagePrview.module.css'

export default class ProductImagePreview extends Component {
    render() {
        const { imageUrl, styleName } = this.props

        return(
            <div className={classes.ProductImagePreview} >
                    <img className={classes.Image} src={imageUrl} alt={styleName} ></img>
            </div>            
        )
    }
}














