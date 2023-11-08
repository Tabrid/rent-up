import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../../Context/AuthProvider"

const Header = () => {
  const [navList, setNavList] = useState(false);
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
              
            </ul>
            
          </div>
          <div className='button flex'>

            {user?.uid ?
              <div className="dropdown dropdown-hover dropdown-left">
                <label tabIndex={0} className="btn1 m-1">
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <img src="https://i.ibb.co/WKQGWtd/user.png" alt="" />
                    </div>
                  </div>
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to='/dashboard'>
                      <button className="btn1" >
                        Dashboard
                      </button>
                    </Link>
                  </li>
                  <li><button className='btn1 mt-2' onClick={handleLogOut}>
                    <i className='fa fa-sign-out'></i> Log-Out
                  </button></li>
                </ul>
              </div>

              : <Link to='/login'> <button className='btn1'>
                <i className='fa fa-sign-out'></i> Sign In
              </button></Link>

            }
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
