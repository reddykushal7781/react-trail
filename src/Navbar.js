import React from 'react' // Not required in modern days
import PropTypes from 'prop-types'
// import About from './About';

import './App.css';
import { Link } from 'react-router-dom';

// For Getting React Functional based Components type rfc
export default function Navbar(props) {
  // Right here I have ued Default parameters Instead of using a defaultProps function in this file
  let setModeMessage = () => {
    if (props.mode === 'light') {
      return 'Switch to Light Mode';
    }
    else { return 'Switch to Dark Mode'; }
  }
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark "> */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">

                {/* Look at the Link statement  */}

                <Link className="nav-link" to='/About' >About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Option 1</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
            <div className={`form-check ${props.mode}==='light ? 'dark' : 'light'}`}
            style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' , color: props.mode=='dark'? 'white': 'black'} }>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{setModeMessage()}</label>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  // Take a look
  link: PropTypes.string
}

// Navbar.defaultProps = {
//     title: "Cool!"
// }




