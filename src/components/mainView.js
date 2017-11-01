import React from 'react'
import AddBox from './addBox'
import MapComponent from './mapComponent'
// import { Trigger } from 'react-bootstrap/lib/'
import Trigger from './email'
import {Marker, Popup} from 'react-leaflet'
const addressURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='
const baseURL = 'http://localhost:8080/boxes'

export class MainView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      boxes: [],
      email: '',
      name: '',
      description: '',
      address: '',
      long: '',
      lat: ''
    }
  }
  async componentDidMount() {
    const data = await fetch(`${baseURL}`)
    const response = await data.json()
    console.log(response);
    this.setState({
      boxes: response.map(box => {
        return box
      })
    })
  }
  render() {
    const createMarker = () => {
      return this.state.boxes.map(data => {
        return (
          <Marker key={data.ID} position={[data.Long, data.Lat]}>
            <Popup>
              <span>{data.Name}
                <br/> {data.Description}
                <br/>
                <br/>
                <Trigger />
              </span>
            </Popup>
          </Marker>
        )
      })
    }
    const addressChange = (e) => {
      this.setState({address: e.target.value});
    }
    const nameChange = (e) => {
      this.setState({name: e.target.value});
    }
    const descriptionChange = (e) => {
      this.setState({description: e.target.value});
    }
    const emailChange = (e) => {
      this.setState({email: e.target.value});
    }
    const handleClickr = () => {
      var myInit = {
        method: 'POST',
        mode: 'cors',
        cache: 'default'
      }
      fetch(`${baseURL}/create?name=${this.state.name}&email=${this.state.email}&description=${this.state.description}&long=${this.state.long}&lat=${this.state.lat}`, myInit)
      .then(() => {
          const newMark = {
            Description: this.state.description,
            Email: this.state.email,
            Lat: this.state.lat,
            Long: this.state.long,
            Name: this.state.name
          }
          console.log(newMark);
        return this.setState({boxes: [...this.state.boxes, newMark] })
        })
        .then(()=>{
          document.getElementById("myForm").reset();
          this.setState({email: '',
          name: '',
          description: '',
          address: '',
          long: '',
          lat: ''})
        })
      }

      // console.log(`${baseURL}/create?name=${this.state.name}&email=${this.state.email}&description=${this.state.description}&long=${this.state.long}&lat=${this.state.lat}`);


    const addressCall = () => {
      fetch(`${addressURL}${this.state.address}&key=AIzaSyDrxcNgf1LpXGCKbQpFUswLCgHVCrRZU5c`).then(function(response) {
        return response.json();
      }).then((data) => {
        this.setState({long: data.results[0].geometry.location.lat, lat: data.results[0].geometry.location.lng});
        console.log(this.state);
      })
    }

    return (
      <div className="mainView">
        <AddBox addressChange={addressChange} nameChange={nameChange} descriptionChange={descriptionChange} emailChange={emailChange} handleClickr={handleClickr} addressCall={addressCall}/>
        <MapComponent createMarker={createMarker}/>
      </div>
    )
  }
}

export default MainView
