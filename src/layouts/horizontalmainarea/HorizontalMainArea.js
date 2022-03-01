import React from 'react'
import "./HorizontalMainArea.css";

function HorizontalMainArea(props) {
  return (
    <div className='horzontalmainarea'>{props.children}</div>
  )
}

export default HorizontalMainArea