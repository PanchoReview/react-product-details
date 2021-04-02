import React, { Component } from 'react'
import classes from './modules/ProductFeatures.module.css'

export default class ProductFeatures extends Component {
    render() {
        const { features, currentFeatureIndex, changeCurrentFeature } = this.props
        const onClick = feature => () => {
            changeCurrentFeature(feature)
        }

        return(
            <div>
                <h2>Features</h2>
                <ul className={classes.FeaturesList}>
                    {
                        features.map((feature, index) => {
                            const isSelected = index === currentFeatureIndex
                            const featureBadgeClass = isSelected ? classes.FeatureBadgeSelected : classes.FeatureBadge

                            return <li className={classes.FeatureListItem} key={index}>
                                <div className={featureBadgeClass} onClick={onClick(index)}>{feature}</div>
                            </li>
                        })
                    }    
                </ul>    

            </div>
        )
    }
}