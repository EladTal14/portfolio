import Image from "next/image";
import { useState } from "react";

import { GetInTouch } from "./GetInTouch";

export function SideBar({ setShow, elButtons, elMenuBtn, openMenu }) {
  return (
    <section className="side-bar">
      <Image src="/images/imageNew.png" width="180" height="180" onClick={() => setShow('me')} />

      <h3 className="name">Elad Tal</h3>
      <h4>Full Stack Developer</h4>
      <section className="buttons" ref={elButtons}>
        <button onClick={() => { setShow('portfolio'); openMenu() }}>Portfolio <span className="hidden">&gt;</span></button>
        {/* <button onClick={() => { setShow('offer'); openMenu() }}>My offer <span className="hidden">&gt;</span></button> */}
        <button onClick={() => { setShow('contact'); openMenu() }}>Contact me <span className="hidden">&gt;</span></button>
        <button onClick={() => { setShow('cv'); openMenu() }}>My CV <span className="hidden">&gt;</span></button>
      </section>
      <div className="menu-btn" ref={elMenuBtn} onClick={openMenu}>
        <div className="menu-btn__burger"></div>
      </div>


      <GetInTouch />

    </section >
  )
}
