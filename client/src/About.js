import React from 'react'
import Fade from 'react-reveal/Fade'

const About = () => {
  return (
    <>
      <div className="container">
        <div id="app">
          <div className="title">
            <Fade left>
              <h1>Wala Zeidan</h1>
            </Fade>
          </div>
          <div className="wala-pic">
          </div>
          <>
            <div className="bio">
              <Fade right>
                <p className="bio-border">Welcome to my portfolio! <br />
              I am a junior software engineer transitioning from medicine! <br />
              I love music, film, and all things tech.
                </p>
              </Fade>
              
            </div>
          </>
        </div>
      </div>
    </>
  )
}

export default About