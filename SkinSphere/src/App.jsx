import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import heroImg from './assets/heroImg.png'
import Logo from './assets/Logo.png'
import AllNew from './AllNew.jsx'
import Skinsphere from './assets/Skinsphere.png'
import ShopItems from './assets/ShopItems.png'


function App() {
  // const [count, setCount] = useState(0)


//   import React, { useState } from 'react';
// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';
// import './styles.css'; // Import your CSS file for animations (optional)

// function MainComponent() {
//   const [activeComponent, setActiveComponent] = useState('A');
//   const [isFadingOut, setIsFadingOut] = useState(false);

//   const handleButtonClick = (componentName) => {
//     setIsFadingOut(true); // Start fade-out animation
//     setTimeout(() => {
//       setActiveComponent(componentName);
//       setIsFadingOut(false); // End fade-out animation
//     }, 300); // Adjust fade-out duration (optional)
//   };

 
// }

// export default MainComponent;
  function addMore(){

  }

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

        {/* Main */}
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
            <h5 className='mostBought'>Most Bought</h5>
            <div className="page-content row justify-content-between mt-5">
                <AllNew/>
                <AllNew/>
                <AllNew/>
                <AllNew/>
                <AllNew/>
                <AllNew/>
                <AllNew/>
                <AllNew/>
                <AllNew/>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className='mt-5'>
          <div className='footer-img py-3'>
            <span className='skinsphere'></span>
            <img src={Skinsphere} alt="" id="imgSkinSphere"/>
          </div>
          <div className='d-flex justify-content-evenly'>
            <div>
              <p><a href="#" className='link-dark'>Privacy Policy</a></p>
              <p><a href="#" className='link-dark'>Terms and Conditions</a></p>
              <p><a href="#" className='link-dark'>About</a></p>
            </div>
            <div className='d-flex gap-3'>
              <span><i className="bi bi-twitter fs-3"></i></span>
              <span><i className="bi bi-facebook fs-3"></i></span>
              <span><i className="bi bi-instagram fs-3"></i></span>
            </div>
            <div>
              <p><a href="#" className='link-dark'>Shopping Info</a></p>
              <p><a href="#" className='link-dark'>Returns</a></p>
              <p><a href="#" className='link-dark'>Exchange</a></p>
              <p><a href="#" className='link-dark'>Contact</a></p>
            </div>
          </div>
          <div>
            <hr />
            <p>2018 <i className="bi bi-c-circle"></i> | All rights Reserved</p>
          </div>
        </footer>
        
        <main>
          <div className='cart'><h3>Cart</h3></div>
          <div className='d-flex justify-content-around'>
            <img src={ShopItems} alt="" />
            <div>
              <div className=''>
              <h4>La Rosary Sunscreen set</h4>
              <p> Each formulation is crafted with care using the finest ingredients to ensure your complexion feels radiant and rejuvenated.</p>
              <strong>#55,000</strong>
              </div>
              <div className='p-3'>
                <div><span>1</span> <button className='btn-count' onClick={addMore()}><i className="bi bi-plus-circle"></i></button></div>
                <div className='d-flex justify-content-evenly'><button className='btn-unblue p-1'>Add to Cart</button> <button className='btn-blue'>Buy Now</button></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
