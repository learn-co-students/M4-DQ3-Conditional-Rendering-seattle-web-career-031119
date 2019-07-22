import React from 'react'

const MenuItem = (props) => {
  return (
    <a
      className={props.a.className}
      id={props.a.id}
      onClick={ev => props.handleClick(ev)}
    >
      <i
        className={props.i.className}
        id={props.i.id}
      />
    </a>
  )
}
export default MenuItem
