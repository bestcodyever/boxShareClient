import React from 'react'
import AddBox from './addBox'
import MapComponent from './mapComponent'



export class MainView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      boxes: []
    }
  }
  render(){


  return (
    <div className="mainView">
      <AddBox />
      <MapComponent />
    </div>
  )
}
}

export default MainView
