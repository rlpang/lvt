import React, { Component } from 'react';

class Card extends Component {

    openModal = () => {
        this.props.openModal();
    }

    closeModal = () =>{
        this.props.closeModal();
    }
    
    goToManage = () =>{
        this.props.goToManage()
    }

    totalQuantity = ()=>{
        let total = this.props.items.map((item)=>{return item.quantity}).reduce((previouVal, currentVal)=>{return previouVal + currentVal});
        return total;
    }

    render() {
        console.log( 'props',this.props.items)
        let items = JSON.parse(this.props.items);
        console.log('items',items)
        const {isModal} = this.props;
        return (
            <div className='card-container' style={{background:'white'}} >
                { isModal ?
                <div className='navbar' style={{paddingLeft:'30px'}}>
                    <p>
                        <p className='close' onClick={this.closeModal}/>
                        <span>
                            <i className="fa fa-user"></i>
                        </span>
                    </p>
                    <div className='creds'>
                        <p>{`${this.props.customerDetails.firstName} ${(this.props.customerDetails.lastName === undefined)? "" : ', ' + this.props.customerDetails.lastName}`}</p>
                        <p>{this.props.customerDetails.phoneNumber}</p>
                    </div>
                </div>:
                    <div className='navbar flex-column'>
                        <p>
                            <span>
                                <i className="fa fa-user"></i>
                            </span>
                        </p>
                        <div className='creds'>
                            <p>{`${this.props.customerDetails.firstName} ${(this.props.customerDetails.lastName === undefined)? "" : ', ' + this.props.customerDetails.lastName}`}</p>
                            <p>{this.props.customerDetails.phoneNumber}</p>
                        </div>
                    </div>
                }
                
                <div className='horizontal-separator'></div>
                <div className='items'>
                    {(this.props.items)?(items.items.map((item,index)=>{
                        return(  
                        <div className='item' key={index}>
                            <div className='desc'>
                                <p><span>{item.quantity}</span>{(item.name === undefined)? item.product_id:item.name}</p>
                            </div>
                            {/* <p className='price'>
                                ${(item.adj_price/100).toFixed(2)}
                            </p> */}
                        </div>
                        )})):<div></div>
                    }
                </div> 
                <div className='horizontal-separator'></div>
                {/* <div className='total'>
                        <p className='total-items'>
                            <span>Items: </span>
                            <span className='items'>{this.totalQuantity()}</span>
                        </p>
                        <p className='total-price'>
                            <span>Total: </span>
                            {isModal?<span className='items'>${(this.props.total.total/100).toFixed(2)}</span>:
                            <span className='items'>${(this.props.total/100).toFixed(2)}</span>}
                        </p>
                </div> */}
                {
                    isModal ? ( 
                        <button className='details' disabled={true} onClick={this.goToManage}>
                         Manage </button>
                  ) : ( <button className='details' onClick={this.openModal}>
                    Details
                </button>)
                }
               
            </div>
        )
    }
}

export default Card;