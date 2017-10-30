import React from 'react'
import { Button } from 'react-bootstrap/lib/'
const addressURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='
const baseURL = 'http://localhost:8080/boxes'
class AddBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      description: '',
      address: '',
      long: '',
      lat: ''
    };
  }

  render(){
    const addressChange = (e) => {
      this.setState({ address: e.target.value });
    }
    const nameChange = (e) => {
      this.setState({ name: e.target.value });
    }
    const descriptionChange = (e) => {
      this.setState({ description: e.target.value });
    }
    const emailChange = (e) => {
      this.setState({ email: e.target.value });
    }
   const handleClickr = () => {
     var myInit = { method: 'POST',
               mode: 'cors',
               cache: 'default' };
    let data = fetch(`${baseURL}/create?name=${this.state.name}&email=${this.state.email}&description=${this.state.description}&long=${this.state.long}&lat=${this.state.lat}`,
    myInit).then(function() { return console.log('success'); })
    console.log(`${baseURL}/create?name=${this.state.name}&email=${this.state.email}&description=${this.state.description}&long=${this.state.long}&lat=${this.state.lat}`);
    }

   const addressCall = () => {
     fetch(`${addressURL}${this.state.address}&key=AIzaSyDrxcNgf1LpXGCKbQpFUswLCgHVCrRZU5c`)
     .then(function(response) { return response.json(); })
       .then((data)=>{
          this.setState({
             long: data.results[0].geometry.location.lat,
             lat: data.results[0].geometry.location.lng
           });
         console.log(this.state);
       })
     }


  return (
    <aside className="sideBar">
      <form>
      <label for="name">Name</label><br/>
      <input id="name"type="text" onChange={ nameChange } placeholder=""/><br/>
      <label for="email">Email </label><br/>
      <input id="email" type="text"  onChange={ emailChange } placeholder=""/>
      <br/>
      <label for="description">Description</label><br/>
      <textarea cols="18.5" rows="3" id="description"type="text" onChange={ descriptionChange } placeholder=""/>
      <br/>
      </form>
      <form>
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
}

export default AddBox
