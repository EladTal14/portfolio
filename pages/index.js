import Head from 'next/head'
import Image from 'next/image'
import AppHeader from '../cmps/AppHeader'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Elad Tal | HomePage</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppHeader />
      <main>
        <Image
          src="/images/hero.jpg"
          height={1080}
          width={1920}
          alt="https://www.touristisrael.com/free-things-to-do-in-tel-aviv/24755/"
        />
        <h1>this works</h1>
      </main>

      <footer>

      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
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
      `}</style>
    </div>
  )
}
