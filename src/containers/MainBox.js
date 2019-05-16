import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      currentSelection: "profile"
    }
  }

  updateItemClass = (currentSelection) => {
    this.setState({
      currentSelection: currentSelection
    })
  }

  render() {
    let detailsToDisplay;


    switch (this.state.currentSelection){
      case "profile":
        detailsToDisplay  = <Profile />
        break;
      case "photo":
        detailsToDisplay  = <Photos />
        break;
      case "cocktail":
        detailsToDisplay  = <Cocktails />
        break;
      case "pokemon":
        detailsToDisplay  = <Pokemon />
        break;
      default:
        detailsToDisplay = null
        break;
    }

    return (
      <div>
        <MenuBar updateItemClass={this.updateItemClass} currentSelection={this.state.currentSelection}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
