import React from 'react';

export default function Manage(props) {
    console.log("in manage")
    return (
        <div className="grid-container">
            <div className="manage-container">
                <div className="navbar">
                    <p>
                        <span>
                            <i className="fa fa-user"></i>
                        </span>
                    </p>
                    <div className="creds">
                        <p>Name A</p>
                        <p>7284701258</p>
                    </div>
                </div>
                <div className="horizontal-separator"></div>
                <div className="items">
                </div>
                <div className="horizontal-separator-1"></div>

            </div>
            <div> 
                <div>Age Verification</div>
            </div>
        </div>
    )
}
