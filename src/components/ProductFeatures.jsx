import React, { Component } from 'react'
import classes from './modules/ProductFeatures.module.css'

export default class ProductFeatures extends Component {
    render() {
        const { features } = this.props

        return(
            <div>
                <h2>Features</h2>
                <ul className={classes.FeaturesList}>
                    {
                        features.map((feature, index) => {
                            return <li className={classes.FeatureListItem} key={index}>
                                <div className={classes.FeatureBadge}>{feature}</div>
                            </li>
                        })
                    }    
                </ul>    

            </div>
        )
    }
}