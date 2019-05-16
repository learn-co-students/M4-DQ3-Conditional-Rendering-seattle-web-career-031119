import React from 'react'

const MenuBar = (props) => {

  const getElements = () => {
    return (
      props.menuItems.map ((menuItem) => {
      if (props.clicked === menuItem.name) {
        return (
          <a className="item active" id={menuItem.name} onClick={() => props.handleClick(menuItem.name)}>
            <i className={menuItem.icon} id={menuItem.name}/>
          </a>
        )
      } else {
        return (
          <a className="item" id={menuItem.name} onClick={() => props.handleClick(menuItem.name)}>
            <i className={menuItem.icon} id={menuItem.name}/>
          </a>
        )
      }
    }))
  }

  return (
    <div className="ui four item menu">
      {getElements()}
    </div>
  )

}

export default MenuBar
