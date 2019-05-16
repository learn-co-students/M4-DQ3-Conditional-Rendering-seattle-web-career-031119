import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
      this.state ={
        profile: '',
        currentlyClicked: ''

    }
  }

  onClick = (type) => {
    this.setState(
      {
      profile: type
    })
    // console.log(type);
  }
  detailsToDisplay = () => {
        console.log(this.state.profile);
    if(this.state.profile === "profile") {
      return < Profile />

    } else if (this.state.profile === "photo"){
        return < Photos/>

      } else if (this.state.profile === "cocktail"){
          return < Cocktails />

        } else {
            return < Pokemon />

      }
    }

  render() {

    return (
      <div>
        <MenuBar
        onClick={this.onClick}
        activeStatus={this.state.profile}
        />

        {this.detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
