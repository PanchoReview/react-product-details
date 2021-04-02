import React, { Component } from 'react'
import classes from './modules/NavBar.module.css'

export default class NavBar extends  Component {
    render() {
        return(
            <div className={classes.NavBar}>
                <img className={classes.AmazonLogo}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" 
                        alt="Amazon logo" />     
                <p>not actually amazon</p>       
            </div>
        )
    }
}