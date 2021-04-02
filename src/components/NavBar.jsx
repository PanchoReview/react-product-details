import React, { Component } from 'react'
import classes from './modules/NavBar.module.css'

export default class NavBar extends  Component {
    render() {
        return(
            <div className={classes.NavBar}>
                <h1 className={classes.NavBarTitle}>Amazon, bitch</h1>
            </div>
        )
    }
}