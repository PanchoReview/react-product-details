import React, { Component } from 'react'
import classes from './modules/BuyButton.module.css'

export default class BuyButton extends Component {
    render() {
        return(
            <a className={classes.BuyButton} type="button" value="Buy Now" >Buy Now</a>
        )
    }
}