import Image from 'next/image'
import { Clock } from './Clock'
import { myService } from '../services/myService'
import { useState, useEffect, useRef } from 'react'

export default function AppHeader() {
  const [showMenu, setShowMenu] = useState(false)
  const elMenu = useRef(null)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
    elMenu.current.classList.toggle('open-menu')
  }
  return (
    <div className="header flex ">
      <div className="container flex">
        <Image
          src="/images/favicon192.png"
          height={60}
          width={60}
          alt="Icon"
        />
        <ul className="flex" ref={elMenu}>
          <li> <Clock /></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact me</a></li>
        </ul>
        {showMenu && <div className="main-screen" style={{ opacity: showMenu ? 1 : 0 }} onClick={toggleMenu}></div>}
        <button className="menu-btn" onClick={toggleMenu}>☰</button>
      </div>
    </div >

  )
}