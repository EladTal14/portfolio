import { useEffect, useRef } from 'react'

export default function About({ setShow, openMenu }) {

  const txtRef = useRef(null)
  // useEffect(() => {
  //   let animationDelay = 7;
  //   let txtWords = txtRef.current.innerText.split(' ')
  //   let newTxt = ''
  //   txtWords.forEach(word => {
  //     newTxt += `<span class="char">${word}</span>&nbsp`
  //   })
  //   txtRef.current.innerHTML = newTxt
  //   let length = txtRef.current.children.length
  //   for (let i = 0; i < length; i++) {
  //     txtRef.current.children[i].style['animation-delay'] = animationDelay * i * i + 'ms'
  //   }
  // }, [])

  return (
    <div className="about-container">
      <div className="center" >
        <pre id="text" ref={txtRef}>
          <span className="break">Hi,</span>
          I'm Elad Tal, Full-Stack Developer,
          React Enthusiast and a Volleyball Player Ranked 5000+.
          <span className="break">Welcome to my portfolio website. Enjoy!</span> </pre>

        <div className="about-buttons">
          <button onClick={() => { setShow('portfolio') }}>Portfolio </button>
          <button onClick={() => { setShow('cv') }}>My CV </button>
        </div>
      </div>
    </div>
  )
}
