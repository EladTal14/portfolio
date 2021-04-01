import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import About from '../cmps/About'
import AppHeader from '../cmps/AppHeader'
import { ContactMe } from '../cmps/ContactMe'
import CV from '../cmps/CV'
import { GetInTouch } from '../cmps/GetInTouch'
import Offer from '../cmps/Offer'
import Portfolio from '../cmps/Portfolio'
import { SideBar } from '../cmps/SideBar'
import { useRef } from "react";

export default function Home() {
  const [show, setShow] = useState('me')
  const [dropDown, setDropDwon] = useState(false)
  const elMenuBtn = useRef(null)
  const elButtons = useRef(null)
  const openMenu = () => {
    elMenuBtn.current.classList.toggle('open')
    elButtons.current.classList.toggle('show')
    setDropDwon(!dropDown)

  }
  return (
    <>
      <input type="checkbox" id="checkbox" />
      <div className="container" >
        <Head>
          <title>Elad Tal | HomePage</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <SideBar setShow={setShow} elMenuBtn={elMenuBtn} elButtons={elButtons} openMenu={openMenu} />
        {dropDown && <div style={{ height: 136 }}></div>}
        <main>
          {show === 'me' && <About />}
          {show === 'portfolio' && <Portfolio />}
          {show === 'contact' && <ContactMe />}
          {show === 'offer' && <Offer />}
          {show === 'cv' && <CV />}
        </main>


        <style jsx>{`
        .container {
          display: flex;
          min-height: 100vh
        }

        main {
          flex: 3;
          display: flex;
          // flex-direction: column;
          // justify-content: center;
          // align-items: center;
        }





      `}</style>

        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        a{
          text-decoration: none;
        }
      `}</style>
      </div>
    </>
  )
}
