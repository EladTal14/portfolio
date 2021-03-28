import { AiFillGithub } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'

export function GetInTouch() {

  return (
    <section className="get-in-touch">
      <a href="https://github.com/EladTal14" target="_blank"> <AiFillGithub /></a>
      <a href="https://www.facebook.com/elad.tal" target="_blank"><AiFillFacebook /></a>
      <a href="https://twitter.com/EladTal4" target="_blank"><AiFillTwitterCircle /></a>
      <a href="https://www.linkedin.com/in/elad-tal-0355531b7/" target="_blank"> <AiFillLinkedin /></a>
      <a href="mailto:eladtal14@gmail.com" > <AiFillMail /></a>




    </section>
  )
}
