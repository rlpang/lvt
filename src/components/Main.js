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
                type:message.type
            })  
        }
        
    }

    openModal=(item,index)=> {
        console.log('on open modal',item)
        const items = JSON.parse(item) 
        this.setState({
            modalIsOpen: true,
            modalData: items.items,
            modalDetails: this.state.customerDetails[index]
        })
    }

    closeModal = () => {
        this.setState({modalIsOpen: false})
    }

    // goToManage = ()=>{
    //     history.push('/manage')
    // }

    render() {
        // console.log('itemDetails',this.state.itemDetails);
        console.log("modalData",this.state.modalData)

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
                     {/* {(this.state.type === "OrderConfirmed")? ((this.state.itemDetails !== undefined) && this.state.customerDetails.length > 0 )? this.state.itemDetails.map((items,index)=>{
                        return (
                            <Card 
                                customerDetails={this.state.customerDetails[index]}
                                key={index}
                            />   
                        )
                    }):<div></div>:<div></div>} */}

                    {/* {((this.state.itemDetails !== undefined) && this.state.customerDetails.length > 0 )? this.state.itemDetails.map((items,index)=>{
                        return (
                            <Card 
                                customerDetails={this.state.customerDetails[index]}
                                items={items.items}
                                total={this.state.itemDetails[index].total}
                                openModal={()=>this.openModal(items)} 
                                closeModal={this.closeModal} 
                                key={index}
                            />   
                        )
                    }):<div>Loading...</div>} */}
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