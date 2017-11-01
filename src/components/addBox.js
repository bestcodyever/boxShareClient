import React from 'react'
import { Button } from 'react-bootstrap/lib/'

const AddBox = ({
  nameChange,
  emailChange,
  descriptionChange,
  addressChange,
  addressCall,
  handleClickr
}) => {

  return (
    <aside className="sideBar">
      <form id="myForm">
      <label for="name">Name</label><br/>
      <input id="name"type="text" onChange={ nameChange } placeholder=""/><br/>
      <label for="email">Email </label><br/>
      <input id="email" type="text"  onChange={ emailChange } placeholder=""/>
      <br/>
      <label for="description">Description</label><br/>
      <textarea cols="18.5" rows="3" id="description"type="text" onChange={ descriptionChange } placeholder=""/>
      <br/>
      <label for="address">Address</label><br/>
      <textarea cols="18.5" onChange={ addressChange } rows="3" id="address"type="text" placeholder=""/>
      <br/>
      <p className="verify">You must verify before posting boxes</p>
      </form>
      <Button bsStyle="success" bsSize="small" onClick={ addressCall }>
        Verify Address
      </Button><br/>
      <br/>
      <Button bsStyle="primary" bsSize="medium" onClick={ handleClickr }>
        Post Boxes
      </Button>
    </aside>
  )
}

export default AddBox
