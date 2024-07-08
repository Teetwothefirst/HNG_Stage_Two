import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import heroImg from './assets/heroImg.png'
import Logo from './assets/Logo.png'


function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    <>
      <div>
        <header>
          <nav>
            <div><img src={Logo} alt="" /></div>
            <div className=''>
              <a href="" className="link-dark">Store</a>
              <a href="" className="link-dark">About</a>
              <a href="" className="link-dark">Contact</a>

            </div>
            <div><button className='btn-blue'>Order Now</button></div>
          </nav>
          <main>
            <img src={heroImg} alt="" />
          </main>
        </header>
        <main>

        </main>
      </div>
    </>
  )
}

export default App
