import React from 'react'
import {Modal, Button, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap/lib/'

export class NewMarker extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  close() {
    this.setState({showModal: false});
  }

  open() {
    this.setState({showModal: true});
  }

  render() {
    //AIzaSyDrxcNgf1LpXGCKbQpFUswLCgHVCrRZU5c
    
    return (
      <div>
        <Button bsStyle="primary" bsSize="small" onClick={this.open.bind(this)}>
          Add Boxes
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>New Box Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label for="name">Name</label>
            <input id="name"type="text" placeholder=""/><br/>
            <label for="email">Email </label>
            <input id="email" type="text" placeholder=""/>
            <br/>
            <label for="description">Description</label><br/>
            <textarea cols="60" rows="3" id="description"type="text" placeholder=""/>
            <br/>
            <label for="address">Address</label><br/>
            <textarea cols="60" rows="3" id="address"type="text" placeholder=""/>
            <br/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Send</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default NewMarker
