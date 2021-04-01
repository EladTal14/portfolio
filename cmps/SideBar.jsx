import Image from "next/image";

import { GetInTouch } from "./GetInTouch";

export function SideBar({ setShow, elButtons, elMenuBtn, openMenu }) {
  // const elMenuBtn = useRef(null)
  // const elButtons = useRef(null)
  // const openMenu = () => {
  //   elMenuBtn.current.classList.toggle('open')
  //   elButtons.current.classList.toggle('show')


  // }
  return (
    <section className="side-bar" style={{
      position: 'sticky', top: 0,
      width: '100%', zIndex: 10
    }}>

      <Image src="/images/imageNew.png" width="200" height="200" onClick={() => setShow('me')} />

      <h3 className="name">Elad Tal</h3>
      <h4>Full Stack Developer</h4>
      <section className="buttons" ref={elButtons}>
        <button onClick={() => { setShow('portfolio'); openMenu() }}>Portfolio <span className="hidden">&gt;</span></button>
        <button onClick={() => { setShow('offer'); openMenu() }}>My offer <span className="hidden">&gt;</span></button>
        <button onClick={() => { setShow('contact'); openMenu() }}>Contact me <span className="hidden">&gt;</span></button>
        <button onClick={() => { setShow('cv'); openMenu() }}>My CV <span className="hidden">&gt;</span></button>
      </section>
      <div className="menu-btn" ref={elMenuBtn} onClick={openMenu}>
        <div className="menu-btn__burger"></div>
      </div>
      <section>
        <p>Get in Touch</p>
        <GetInTouch />
      </section>
    </section >
  )
}
