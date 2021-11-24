import React from 'react'

const Navbar = () => {

  return (
    <div className="navbar sticky-top navbar-expand-lg navbar-light">
      
      <div className="links">
        <div className="name">
          <a className="name-title" href="#about">ABOUT ME</a>
        </div>
        <div className="nav">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )

}

export default Navbar