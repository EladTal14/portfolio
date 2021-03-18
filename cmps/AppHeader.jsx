import Image from 'next/image'
import { Clock } from './Clock'
export default function AppHeader() {
  return (
    <div className="header flex ">
      <div className="container flex">
        <Image
          src="/images/favicon192.png"
          height={60}
          width={65}
          alt="Icon"
        />
        <ul className="flex">
          <li> <Clock /></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>
      </div>
    </div>

  )
}