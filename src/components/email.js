import React from 'react'
import {Modal, Button} from 'react-bootstrap/lib/'

export class Trigger extends React.Component {

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
    return (
      <div>
        <Button bsStyle="primary" bsSize="sm" onClick={this.open.bind(this)}>
          Email User
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Email User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p></p>

            <h4>Message</h4>
            <textarea rows="4" cols="60" type="text" placeholder="Put message here!"/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Send</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default Trigger
