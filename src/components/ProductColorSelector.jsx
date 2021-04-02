import React, { Component } from 'react'

const styles = {
    imgList: {
        listStyleType: "none",
        paddingLeft: "0"
    },
    imgWrapper: isSelected => {
        return {
            width: "20%",
            height: "20%",
            display: "inline-block",
            border: isSelected ? "2px solid green" : "",
            borderRadius: isSelected ? "20%" : "",
            boxSizing: "border-box"
        }        
    },
    img: {
        maxHeight: "100%",
        maxWidth: "100%",
        cursor: "pointer",
    }
}

export default class ProductColorSelector extends Component {
    render() {
        const { colorOptions, currentColorIndex, changeCurrentColor } = this.props

        const onClick = option => () => {
            changeCurrentColor(option)
        }

        return(
            <div class="color-selector">
                <h2>Select Color</h2>

                <ul style={styles.imgList}>
                    {
                        colorOptions.map((option, index) => {
                            const isSelected = index === currentColorIndex

                            return <li key={index} style={styles.imgWrapper(isSelected)}>
                                    <img src={option.imageUrl} alt={option.styleName} style={styles.img}
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