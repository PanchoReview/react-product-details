import React, { Component } from 'react'
import classes from './modules/HeartRate.module.css'

export default class HeartRate extends Component {
    render() {
        return(
            <div className={classes.HeartRate}>
                    <img className={classes.HeartbeatIcon} src="https://pics.freeicons.io/uploads/icons/png/16359956031606252959-512.png" />
                    <p className={classes.HeartbeatText}>75</p>                    
            </div>
        )
    }
}