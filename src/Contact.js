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
          <div className="contact-info">
            <a href="https://github.com/walazeidan" className="personal-link" rel="noreferrer" target="_blank">
              <i className="devicon-linkedin-plain reveal"></i>
              <div className="hide">GitHub</div>
            </a>
          </div>
          <div className="contact-info">
              <a href="https://www.linkedin.com/in/wala-zeidan/" className="personal-link" rel="noreferrer" target="_blank">
                <i className="devicon-github-original reveal"></i>
                <div className="hide">Linkedin</div>
              </a>
          </div>
        </Roll>
      </div>
    </div>
  )
}

export default Contact