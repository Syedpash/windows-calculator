import { faBars, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Tabbar = ({setToggle, toggle}) => {
  const handleClick =() => {
    console.log('handle click')
  }
  return (
    <div className='tabbar'>
        <FontAwesomeIcon icon={faBars} />
        <h3>Standard</h3>
        <FontAwesomeIcon onClick={() => setToggle(!toggle)} icon={faClockRotateLeft} />
    </div>
  )
}

export default Tabbar