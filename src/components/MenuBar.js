import React from 'react'
import MenuItem from './MenuItem'

/*
I refactored this so MenuItem is a component and its props
are passed down from the state of MainBox.  The original
values of the items made on this page are in menuItems.js,
and are loaded into state in MainBox.  Clicking is handled
in MainBox, which modifies the array accordingly.
*/

const MenuBar = (props) => {

  return (
    <div className="ui four item menu">
      {props.menu.map( item => {
        return <MenuItem
                  {...item}
                  key={item.a.id}
                  handleClick={props.handleClick}
                />
      })}
    </div>
  )

}

export default MenuBar

// <a
//   className="item active"
//   id="profile"
//   onClick={ev => props.handleClick(ev)}
// >
//   <i className="user large icon" id="profile"/>
// </a>
//
// <a
//   className="item"
//   id="photo"
//   onClick={ev => props.handleClick(ev)}
// >
//   <i className="photo large icon" id="photo"/>
// </a>
//
// <a
//   className="item"
//   id="cocktail"
//   onClick={ev => props.handleClick(ev)}
// >
//   <i className="cocktail large icon" id="cocktail"/>
// </a>
//
// <a
//   className="item"
//   id="pokemon"
//   onClick={ev => props.handleClick(ev)}
// >
//   <i className=" themeisle large icon" id="pokemon"/>
// </a>
