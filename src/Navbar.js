import React from 'react'

const Navbar = () => {

  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="links container-fluid">
        <div className="name">
          <a href="#about" className="nav-item">About Me</a>
        </div>
        <button type="button" className="navbar-toggler navbar-dark navbar-lg" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="nav navbar-nav">
            <a href="#projects" className="nav-item nav-link active">Projects</a>
            <a href="#skills" className="nav-item nav-link">Skills</a>
            <a href="#contact" className="nav-item nav-link">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )

}

export default Navbar