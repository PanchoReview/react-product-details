import React, { Component } from 'react'

const styles = {
    navBar: {
        overflow: "hidden",
        backgroundColor: "#333",
        position: "fixed", /* Set the navbar to fixed position */
        top: "0", /* Position the navbar at the top of the page */
        width: "100%" /* Full width */
    },
    title: {
        textAlign: "center",
        verticalAlign: "middle"
    }
    
}

export default class NavBar extends  Component {
    render() {
        return(
            <div className="NavBar" style={styles.navBar}>
                <h1 style={styles.title}>Amazon, bitch</h1>
            </div>
        )
    }
}