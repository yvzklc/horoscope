import React from 'react'
import "./navbar.scss"
const Navbar = () => {
  return (
    <div className='nav'>
      <a className='Title' href="#">HOROSCOPE</a>
      <ul>
        <li><a href="#">Horoscope</a></li>
        <li><a href="#">Tarot</a></li>
        <li><a href="#">Daily</a></li>
        <li><a href="#">Article</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

    </div>
  )
}

export default Navbar