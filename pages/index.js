import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import AppHeader from '../cmps/AppHeader'
import { ContactMe } from '../cmps/ContactMe'
import { GetInTouch } from '../cmps/GetInTouch'
import { SideBar } from '../cmps/SideBar'

export default function Home() {
  const [show, setShow] = useState('me')
  return (
    <div className="container" >
      <Head>
        <title>Elad Tal | HomePage</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SideBar />
      <main>

      </main>


      <style jsx>{`
        .container {
          display: flex;
          min-height: 100vh
        }

        main {
          flex: 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
  )
}
