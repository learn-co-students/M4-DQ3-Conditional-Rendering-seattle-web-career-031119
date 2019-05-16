import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selected: 'profile'
  }

  changeSelection = (ev) => {
    this.setInactive(this.state.selected)
    this.setState({
      selected: ev.target.id
    })
  }

  setActive = (selection) => {
    document.getElementById(selection).classList.add('active')
  }

  setInactive = (selection) => {
    document.getElementById(selection).classList.remove('active')
  }

  componentDidMount(){
    this.setActive(this.state.selected)
  }

  componentDidUpdate(){
    this.setActive(this.state.selected)
  }

  render() {
    
    let detailsToDisplay;
    switch(this.state.selected){
      case "profile":
        detailsToDisplay = <Profile />
        break;
      case "photo":
        detailsToDisplay = <Photos />
        break;
      case "cocktail":
        detailsToDisplay = <Cocktails />
        break;
      case "pokemon":
        detailsToDisplay = <Pokemon />
        break;
    }

    return (
      <div>
        <MenuBar changeSelection={this.changeSelection} selected={this.state.selected}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
