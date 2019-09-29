import React, { Component, } from 'react';

import logo from './avengers.png'; // Tell Webpack this JS file uses this image
console.log(logo); // /avengers.png

class Users extends Component {
    render () {
        return (
            <div>
                <h1>The Users Page</h1>                
                <img src={logo} alt="avengers" />
            </div>            
        );
    }
}

export default Users;