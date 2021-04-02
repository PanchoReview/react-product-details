import React, { Component } from 'react'
import classes from './modules/Clock.module.css'

export default class Clock extends Component {     
    state = {
        currentTime: this.getCurrentTime()
    }
    
    getCurrentTime() {
        let currentHour = new Date().getHours();
        let currentMinutes = new Date().getMinutes()

        currentHour = currentHour > 9 ? currentHour : '0' + currentHour;
        currentMinutes = currentMinutes > 9 ? currentMinutes : '0' + currentMinutes;

        return `${currentHour}:${currentMinutes}`;
    }

    componentDidMount() {
        console.log("clock mounted")

        setInterval(() => {
          this.setState({
            currentTime : this.getCurrentTime()
          })
        }, 1000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.currentTime === this.state.currentTime)
        {
            return false;
        }

        console.log(`updating time to ${nextState.currentTime}`)
        return true;
    }

    render() {      
        return(
            <div className={classes.Clock}>                    
                    <p className={classes.ClockText}>
                        {`${this.state.currentTime}`}
                    </p>                    
            </div>
        )
    }
}