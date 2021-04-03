import { useEffect, useRef } from 'react'

export default function About() {

  const txtRef = useRef(null)
  useEffect(() => {
    let animationDelay = 7;
    let txtWords = txtRef.current.innerText.split(' ')
    let newTxt = ''
    txtWords.forEach(word => {
      newTxt += `<span class="char">${word}</span>&nbsp`
    })
    txtRef.current.innerHTML = newTxt
    let length = txtRef.current.children.length
    for (let i = 0; i < length; i++) {
      txtRef.current.children[i].style['animation-delay'] = animationDelay * i + 'ms'
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
