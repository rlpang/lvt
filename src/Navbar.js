import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar-container'>
                <div className='logo'>
                    <p>
                        <span></span>
                    </p>
                    <p className='separator'></p>
                    <p>Mobile Checkout</p>
                </div>
                <div className='icons'>
                    <p>
                     <i className="fa fa-home"></i>
                    </p>
                    <p>
                     <i className="fa fa-users"></i>
                    </p>
                </div>
            </div>
        )
    }
}

export default Navbar;