import React from 'react'
import { Map, TileLayer } from 'react-leaflet'

const position = [39.742043, -104.991531]

const MapView = ({
  createMarker
}) =>{

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

export default MapView
