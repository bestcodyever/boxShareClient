import React from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import Trigger from './email'
const baseURL = 'http://localhost:8080'
const position = [39.742043, -104.991531]

export class MapView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      boxes: []
    }
  }
  async componentDidMount() {
    const data = await fetch(`${baseURL}/boxes`)
    const response = await data.json()
    this.setState({
      boxes: response.map(box => {
        return box
      })
    })
    // console.log(this.state.boxes);
  }
  render() {
    const createMarker = ()=>{
      return  this.state.boxes.map(data=>{
          return(
            <Marker key={data.ID} position={[data.Long, data.Lat]}>
               <Popup>
                 <span>{data.Name} <br/> {data.Description} <br/> <br/>
                 <Trigger />
               </span>
               </Popup>
            </Marker>
      )}
      )
    }
    return (
      <div className="mapDiv">
        <Map
          style={{height: "70vh", width: "80vw"}}
          center={position}
          zoom={12.49}
          className="map"
          >
          <TileLayer
            url="https://api.mapbox.com/styles/v1/bestcodyever/cj9545g9f0l0f2rmms0jlqxzx/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVzdGNvZHlldmVyIiwiYSI6ImNqOTRoNWJncDQ5eDYzM21icWpicWJqMzUifQ.YPzCfddBIadOI-dak5EyNA"
            attribution="<attribution>" />
            {createMarker()}
         </Map>
        </div>
    )
  }
}
export default MapView
