import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import heroImg from './assets/heroImg.png'
import Logo from './assets/Logo.png'
import AllNew from './AllNew.jsx'

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
      <div className='container'>
        <header>
          <nav>
            <div><img src={Logo} alt="" /></div>
            <div className='nav-links'>
              <a href="#Store" className="link-dark">Store</a>
              <a href="#About" className="link-dark">About</a>
              <a href="#Contact" className="link-dark">Contact</a>

            </div>
            <div><button className='btn-blue'>Order Now</button></div>
          </nav>
        </header>
        <main>
          <div>
          <img src={heroImg} alt="" />
          </div>
          <div className='d-flex justify-content-center py-5'>
            <div className='input-container'>
            <input type="text" name="" id="" className='form-control' />
            </div>
          </div>
          <div className="page">
            <div className='page-navigation'>
              <button className='btn-blue'>All</button>
              <button className='btn-unblue'>Cleanser</button>
              <button className='btn-unblue'>Serum</button>
              <button className='btn-unblue'>Moisturizer</button>     
              <button className='btn-unblue'>Face Oil</button>
            </div>
            <div className="page-content">
                <AllNew/>
            </div>
          </div>
        </main>
        <footer>
          <div></div>
          <div></div>
          <div></div>
        </footer>
        
        <main>

        </main>
      </div>
    </>
  )
}

export default App
