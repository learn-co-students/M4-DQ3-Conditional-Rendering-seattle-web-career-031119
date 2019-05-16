import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: null
    }
  }

  setSelected = (selected) => {
    this.setState({
      selected: selected
    }, () => console.log("STATE", this.state.selected))
  }

  isSelected = (item) => {
    return item === this.state.selected
  }


  render() {
    let detailsToDisplay = ''
    switch (this.state.selected) {
      case "profile":
        detailsToDisplay = <Profile />
        break
      case "photo":
        detailsToDisplay = <Photos />
        break
      case "cocktail":
        detailsToDisplay = <Cocktails />
        break
      case "pokemon":
        detailsToDisplay = <Pokemon />
        break
    }

    return (
      <div>
        <MenuBar
          selected={this.state.selected}
          setSelected={this.setSelected}
          isSelected={this.isSelected}
        />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
