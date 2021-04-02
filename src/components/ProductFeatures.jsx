import React, { Component } from 'react'

const styles = {
    list: {
        listStyleType: "none",
        paddingLeft: "0"
    },
    listItem: {
        display: "inline-block",
        boxSizing: "border-box"
    },
    feature: index => {
        const isOdd = index % 2 === 0

        return {
            backgroundColor: isOdd ? "#b2b2b2" : "#f0f0f0",
            color: isOdd ? "white" : "black",
            borderRadius: "20px",
            height: "40px",
            width: "120px",
            marginRight: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "700"
        }
    }
}

export default class ProductFeatures extends Component {
    render() {
        const { features } = this.props

        return(
            <div>
                <h2>Features</h2>
                <ul style={styles.list}>
                    {
                        features.map((feature, index) => {
                            return <li key={index} style={styles.listItem}>
                                <div style={styles.feature(index)}>{feature}</div>
                            </li>
                        })
                    }    
                </ul>    

            </div>
        )
    }
}