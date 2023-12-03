import React, { useState } from "react"
import "./header.css"
import { Link } from "react-router-dom"


const Header = () => {
  const [navList, setNavList] = useState(false);
  


  

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className="menu menu-horizontal px-1">
              <Link to='/'><li className="btn btn-sm bg-white hover:bg-white border-0">Home</li></Link>
              <li >
                <details>
                  <summary className="btn btn-sm mx-3 bg-white hover:bg-white border-0">Our Team</summary>
                  <ul>
                    <Link to='/riyadh'><li className="  mx-5">Riyadh</li></Link>
                    <Link to='/tomal'><li className="  mx-5">Tomal</li></Link>
                    <Link to='/sayed'><li className="  mx-5">Abu Sayed</li></Link>
                    <Link to='/saiful'><li className="  mx-5">Saiful</li></Link>
                    <Link to='/procchod'><li className="  mx-5">Procchod</li></Link>
                    
                  </ul>
                </details>
              </li>
              <Link to='/about'><li className="btn btn-sm bg-white hover:bg-white border-0">About</li></Link>
            </ul>
          </div>
          

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
