import React, { Component,Fragment } from 'react';
import Tip from './Tip';
import Card from './Card';
import Modal from 'react-modal';


Modal.setAppElement(document.querySelector('#root'));

class Main extends Component {

    state = {
        modalIsOpen: false
    }

    openModal() {
        console.log('hi');
        this.setState({modalIsOpen: true})
    }

    closeModal() {
        this.setState({modalIsOpen: false})
      }

    render() {

        const  customStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)',
                height: '80vh',
                width: '30rem'
              }
        };
        return (
            <Fragment>
                <div className='main-container'>
                    <Card name="jack" phone="123-456-7890" item1="Coke" item2="Wine" item3="Bread"
                    item4="Candy" item5="Twix" item6="Pen" item7="Milk" openModal={this.openModal.bind(this)}/>
                    <Card name="alex" phone="987-657-4321" item1="Water" item2="Tobacco" item3="Coffee"
                    item4="Tea" item5="Ginger" item6="Pencil" item7="Butter" openModal={this.openModal.bind(this)}/>
                    <Card name="john" phone="654-234-8907" item1="Beer" item2="Alcohol" item3="Advil"
                    item4="Milk" item5="Powerball" item6="Chips" item7="Taco" openModal={this.openModal.bind(this)}/>
                    <Tip />
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <Card isModal={this.state.modalIsOpen}/>
                    <button onClick={this.closeModal.bind(this)}>Close</button>
                 </Modal>
            </Fragment>
        )
    }
}

export default Main;