import React, { Component,Fragment } from 'react';
import Tip from './Tip';
import Card from './Card';
import Modal from 'react-modal';
import Stats from './Stats';

// import history from '../history';
// import itemDetails from '../responses/CreateCart.json';
// import customerDetails from '../responses/OrderSubmit.json';

const URL = 'wss://jcrj3k47g3.execute-api.us-east-1.amazonaws.com/Prod';


Modal.setAppElement(document.querySelector('#root'));
class Main extends Component {

    state = {
        modalIsOpen: false,
        itemDetails:[],
        customerDetails:[],
        modalData: [],
        type : "",
        modalTotal:0,
        orderId:"",
    }

    ws = new WebSocket(URL)

    componentDidMount(){
        this.ws.onopen = () => {
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            const message = JSON.parse(evt.data)
            console.log('in message' , message);

            this.setState({
                customerDetails : message.users,
                itemDetails : message.data,
                orderId :message.loyaltyId,
                type:message.type
            })  
        }
        
    }

    openModal=(item,index)=> {
        const items = JSON.parse(item)
        let total = items.grandTotal !== undefined ? items.grandTotal : items.total
        this.setState({
            modalIsOpen: true,
            modalData: items.items,
            modalDetails: this.state.customerDetails[index],
            modalTotal : total
        })
    }

    closeModal = () => {
        this.setState({modalIsOpen: false})
    }

    // goToManage = ()=>{
    //     history.push('/manage')
    // }

    render() {
        const  customStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : '0',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(35%, -50%)',
                height: '80vh',
                width: '30rem',
                background:'transparent',
                border:'none',
            }
        };
        return (
            <Fragment>
                <Stats/>
                <div className='main-container'>
                    {(this.state.type === "CreateCart")? ((this.state.itemDetails !== undefined) && this.state.customerDetails.length > 0 )? this.state.itemDetails.map((items,index)=>{
                        return (
                            <Card 
                                customerDetails={this.state.customerDetails[index]}
                                items={JSON.parse(items)}
                                total={this.state.itemDetails[index].total}
                                openModal={()=>this.openModal(items,index)} 
                                closeModal={this.closeModal} 
                                key={index}
                            />   
                        )
                    }):<div></div>:<div></div>}
                    {(this.state.type === "Checkout")? ((this.state.itemDetails !== undefined) && this.state.customerDetails.length > 0 )? this.state.itemDetails.map((items,index)=>{
                        return (
                            <Card 
                                customerDetails={this.state.customerDetails[index]}
                                items={JSON.parse(items)}
                                total={this.state.itemDetails[index].total}
                                openModal={()=>this.openModal(items,index)} 
                                closeModal={this.closeModal} 
                                key={index}
                            />   
                        )
                    }):<div></div>:<div></div>}
                    {(this.state.type === "OrderConfirmed")? (this.state.customerDetails.length > 0 )? this.state.itemDetails.map((items,index)=>{
                        return (
                            <Card 
                                customerDetails={this.state.customerDetails[index]}
                                items={items}
                                orderId={this.state.orderId}
                                key={index}
                                loyaltyId = {this.state.orderId}
                            />   
                        )
                    }):<div></div>:<div></div>}
                    <Tip />
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    {(this.state.itemDetails !== undefined)?
                        <Card 
                            customerDetails={this.state.modalDetails}
                            total={this.state.modalTotal}
                            items={this.state.modalData} 
                            closeModal={this.closeModal} 
                            goToManage={this.goToManage} 
                            isModal={this.state.modalIsOpen}
                        />:<div></div>}
                </Modal>
            </Fragment>
        )
    }
}

export default Main;