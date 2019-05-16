import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor () {
    super()
    this.state = {
      clicked: 'profile',
      menuItems: [ {name: 'profile', icon:'user large icon'}, {name: 'photo', icon: 'photo large icon'}, {name: 'cocktail', icon: 'cocktail large icon'}, {name: 'pokemon', icon: 'themeisle large icon'}]
    }
  }

  handleClick = (selection) => {
    this.setState({
      clicked: selection
    }, () => console.log(this.state.clicked))
  }

  detailsToDisplay = () => {
    switch(this.state.clicked) {
      case 'profile':
        return(<Profile />)
      case 'photo':
        return(<Photos />)
      case 'cocktail':
        return(<Cocktails />)
      case 'pokemon':
        return(<Pokemon />)
      default:
        return(<div>Hi, I'm a div!</div>)
    }
  }


  render() {
    return (
      <div>
        <MenuBar handleClick={this.handleClick} menuItems={this.state.menuItems} clicked={this.state.clicked}/>
        {this.detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
