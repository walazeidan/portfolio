import React from 'react'
import Roll from 'react-reveal/Roll'

const Contact = () => {
  return (
    <div id="contact">
      <div className="title">
        <h1>Contact</h1>
      </div>
      <div className="contact-links">
        <Roll right>
          <a href="https://github.com/walazeidan" className="personal-link" rel="noreferrer" target="_blank">
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a href="https://www.linkedin.com/in/wala-zeidan/" className="personal-link" rel="noreferrer" target="_blank">
            <i className="devicon-github-original"></i>
          </a>
        </Roll>
      </div>
    </div>
  )
}

export default Contact