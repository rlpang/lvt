import React, { Component } from 'react';

class Stats extends Component {
    render() {
        return (
            <div className='stats-container'>
                <div className='activity-snapshot'>
                    <p>Current Activity</p>
                </div>
                <div className='sales-snapshot'>
                    <p>Sales Activity</p>
                </div>
            </div>
        )
    }
}

export default Stats;