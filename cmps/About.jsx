import { useEffect, useRef } from 'react'

export default function About({ setShow, openMenu }) {

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
      txtRef.current.children[i].style['animation-delay'] = animationDelay * i * i + 'ms'
    }
  }, [])

  return (
    <div className="about-container">
      <div className="center" >
        <p id="text" ref={txtRef}>Hi, I'm Elad Tal. I am a Full-Stack Developer, React Enthusiast and a Volleyball Player Ranked 5000 Plus.
      Welcome to my portfolio website. Enjoy! </p>

        <div className="about-buttons">

          <button onClick={() => { setShow('portfolio') }}>Portfolio </button>
          <button onClick={() => { setShow('offer') }}>My offer </button>
        </div>
      </div>
    </div>
  )
}
