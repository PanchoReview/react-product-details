import React, { Component } from 'react'
import classes from './modules/ProductColorSelector.module.css'

export default class ProductColorSelector extends Component {
    render() {
        const { colorOptions, currentColorIndex, changeCurrentColor } = this.props

        const onClick = option => () => {
            changeCurrentColor(option)
        }

        return(
            <div className="color-selector">
                <h2>Select Color</h2>

                <ul className={classes.ImageList}>
                    {
                        colorOptions.map((option, index) => {
                            const isSelected = index === currentColorIndex
                            const listItemClass = isSelected ? classes.ImageWrapperSelected : classes.ImageWrapper

                            return <li key={index} className={listItemClass}>
                                    <img className={classes.Image} src={option.imageUrl} alt={option.styleName} 
                                        onClick={onClick(index)}
                                    />
                            </li>
                        })
                    }    
                </ul>
        </div>

        )
    }
}