import Image from "next/image";
import { GetInTouch } from "./GetInTouch";

export function SideBar({ setShow }) {
  return (
    <section className="side-bar">

      <Image src="/images/imageNew.png" width="200" height="200" onClick={() => setShow('me')} />

      <h3 className="name">Elad Tal</h3>
      <h4>Full Stack Developer</h4>
      <section className="buttons">


        <button onClick={() => setShow('portfolio')}>Portfolio <span className="hidden">&gt;</span></button>
        <button onClick={() => setShow('offer')}>My offer <span className="hidden">&gt;</span></button>
        <button onClick={() => setShow('contact')}>Contact me <span className="hidden">&gt;</span></button>
        <button onClick={() => setShow('cv')}>My CV <span className="hidden">&gt;</span></button>
      </section>
      <section>
        <p>Get in Touch</p>
        <GetInTouch />
      </section>
    </section >
  )
}
