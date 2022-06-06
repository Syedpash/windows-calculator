import { faBars, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Tabbar = () => {
  return (
    <div className='tabbar'>
        <FontAwesomeIcon icon={faBars} />
        <h3>Standard</h3>
        <FontAwesomeIcon icon={faClockRotateLeft} />
    </div>
  )
}

export default Tabbar