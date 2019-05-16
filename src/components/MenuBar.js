import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const handleClick = (ev) => {
    const target = ev.target
    props.setSelected(ev.target.id)
  }

  const setActive = (item) => {
    if (props.isSelected(item)) {
      return "item active"
    } else {
      return "item"
    }
  }

  return (
    <div className="ui four item menu">
      <a className={setActive("profile")} id="profile" onClick={handleClick}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={setActive("photo")} id="photo" onClick={handleClick}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={setActive("cocktail")} id="cocktail" onClick={handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={setActive("pokemon")} id="pokemon" onClick={handleClick}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
