import React, { Component } from 'react';

class Card extends Component {

    componentDidMount() {
        console.log(this.props);
    }
    openModal() {
        this.props.openModal();
    }

    render() {
        const {isModal} = this.props;

        return (
            <div className='card-container'>
                <div className={isModal?'navbar':'navbar flex-column'}>
                    <p>
                        <span>
                            <i className="fa fa-user"></i>
                        </span>
                    </p>
                    <div className='creds'>
                        <p>{this.props.name}</p>
                        <p>{this.props.phone}</p>
                    </div>
                </div>
                <div className='horizontal-separator'></div>
                <div className='items'>
                    <div className='item'>
                        <p className='desc'>
                            <span>1</span>
                            <span>{this.props.item1}</span>
                        </p>
                        <p className='price'>
                            $1.99
                        </p>
                    </div>
                    <div className='item'>
                        <p className='desc'>
                            <span>1</span>
                            <span>{this.props.item2}</span>
                        </p>
                        <p className='price'>
                            $1.99
                        </p>
                    </div>
                    <div className='item'>
                        <p className='desc'>
                            <span>1</span>
                            <span>{this.props.item3}</span>
                        </p>
                        <p className='price'>
                            $1.99
                        </p>
                    </div>
                    <div className='item'>
                        <p className='desc'>
                            <span>1</span>
                            <span>{this.props.item4}</span>
                        </p>
                        <p className='price'>
                            $1.99
                        </p>
                    </div>
                    <div className='item'>
                        <p className='desc'>
                            <span>1</span>
                            <span>{this.props.item5}</span>
                        </p>
                        <p className='price'>
                            $1.99
                        </p>
                    </div>
                    <div className='item'>
                        <p className='desc'>
                            <span>1</span>
                            <span>{this.props.item6}</span>
                        </p>
                        <p className='price'>
                            $1.99
                        </p>
                    </div>
                    <div className='item'>
                        <p className='desc'>
                            <span>1</span>
                            <span>{this.props.item7}</span>
                        </p>
                        <p className='price'>
                            $1.99
                        </p>
                    </div>
                </div>
                <div className='horizontal-separator'></div>
                <div className='total'>
                        <p className='total-items'>
                            <span className='items'>10</span>
                            <span>Items</span>
                        </p>
                        <p className='total-price'>
                            <span className='items'>22.99</span>
                            <span>Total</span>
                        </p>
                </div>

                {
                    isModal ? ( <button className='details' onClick={this.openModal.bind(this)}>
                    Manage
                </button>) : ( <button className='details' onClick={this.openModal.bind(this)}>
                    Details
                </button>)
                }
               
            </div>
        )
    }
}

export default Card;