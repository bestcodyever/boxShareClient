import React from 'react'
import ReactDOM from 'react-dom'
import { Map, TileLayer } from 'react-leaflet'
const position = [39.742043, -104.991531]

export class MapView extends React.Component {
  constructor(props) {
    super(props)
  }
render() {
    return (
      <div>
        <Map
          style={{height: "70vh", width: "80vw"}}
          center={position}
          zoom={13}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/bestcodyever/cj9524hatgjay2smywa1a4hfi/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVzdGNvZHlldmVyIiwiYSI6ImNqOTRoNWJncDQ5eDYzM21icWpicWJqMzUifQ.YPzCfddBIadOI-dak5EyNA"
            attribution="<attribution>" />


        </Map>
      </div>
    )
  }
}
export default MapView
