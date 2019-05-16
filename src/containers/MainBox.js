import React from 'react'
import MenuBar from '../components/MenuBar.js'
import menuItems from '../components/menuItems.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

/*
  I refactored this so the page components are mapped onto
  the HTML component IDs, and the page is loaded into state
  when a click occurs.
*/

const pageMap = {
  profile: <Profile />,
  photo: <Photos />,
  cocktail: <Cocktails />,
  pokemon: <Pokemon />
}

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: null,
      menu: menuItems,
      page: null,
    }
  }

  handleClick(ev) {
    let id = ev.target.id
    let tempMenu = this.state.menu
    let item = tempMenu.find( item => item.a.id === id)
    item.a.className="item active"
    let others = tempMenu.filter( item => item.a.id !== id)
    others = others.map( item => item.a.className = "item")
    // console.log(pageMap[id])
    this.setState({
      menu: tempMenu,
      page: pageMap[id]
    })
  }

  render() {

    return (
      <div>
        <MenuBar
          handleClick={ev => this.handleClick(ev)}
          menu={this.state.menu}
        />
        {this.state.page}
      </div>
    )
  }

}

export default MainBox
