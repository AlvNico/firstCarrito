import React, { Component } from 'react';

const styles={logo:{
    fontWeight:'100px',
    fontSize:'2rem'
}}
class Logo extends Component {
    render() { 
        return (
            <div style={styles.logo}>
                Shop
            </div>
        );
    }
}
 
export default Logo;