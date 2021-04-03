import { useEffect, useRef } from 'react'

export default function About() {

  const txtRef = useRef(null)
  useEffect(() => {
    var newDom = '';
    var animationDelay = 7;

    for (let i = 0; i < text.innerText.length; i++) {
      newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
    }

    text.innerHTML = newDom;
    var length = text.children.length;

    for (let i = 0; i < length; i++) {
      text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
  }, [])

  return (
    <div className="about-container">
      <div className="center" >
        <p id="text" ref={txtRef}>Hi I'm Elad Tal, Full-Stack Developer, React enuthiast, VoleyBall Player Ranked 5000+.
      Welcome to my site. Enjoy!</p>
      </div>
    </div>
  )
}
