import Image from "next/image";
import { GetInTouch } from "./GetInTouch";


export function SideBar() {
  return (
    <section className="side-bar">
      <Image src="/images/image.png" width="200" height="200" />
      <h3 className="name">Elad Tal</h3>
      <h4>Full Stack Developer</h4>

      <section>
        <p>Portfolio</p>
        <p>My offer</p>
        <p>Contact me</p>
      </section>
      <section>
        <p>Get in Touch</p>
        <GetInTouch />
      </section>
    </section>
  )
}
