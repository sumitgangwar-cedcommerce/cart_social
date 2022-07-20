import React from 'react'
import './styles/Main.css'

const Main = (props) => {
  return (
    <div>
        <div id="main_head">
            <h4>Social Media</h4>
            <h4>{props.name}</h4>
        </div>
    </div>
  )
}

export default Main