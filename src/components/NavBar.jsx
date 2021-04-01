import React, { Component } from 'react'

const styles = {
    navBar: {
        position: "fixed",
        width: "100%",
        height: "60px",
        backgroundColor: "blue",
        color: "white"
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