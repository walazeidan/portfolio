import React from 'react'
import Fade from 'react-reveal/Fade'

const About = () => {
  return (
    <>
      <div className="container">
        <div id="about">
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
                <p className="bio-border">My background is in medicine. I studied for 5 years and earned my bachelors degree in 2019. Shortly before graduating I started taking an interest in my brothers work as a front end developer. I was fascinated by all the algorithms and the functions. I couldn’t believe that all these seemingly unrelated words and numbers were the foundations upon which every website was built on. After graduating, I decided to take a break before jumping into a full time career as a junior doctor. I used this time to follow my curiosity into coding, doing short courses on various websites such as Codecademy and Freecodecamp - before I knew it, I was hooked! Finally in August of 2021, I took the final plunge and began a 3 month Software Engineering course with General Assembly. It is here that I believe I really honed my skills as a developer. I used the skills I learned on the course to develop 4 applications which you can learn more about below.</p>
              </Fade>
              
            </div>
            <div className="bio">
              <Fade right>
                <p className="bio-border">
                  In my spare time, I love to read. Check out my <a href="https://www.goodreads.com/user/show/31412762-wala-zeidan" className="goodreads-link" rel="noreferrer" target="_blank">Goodreads</a> to see what I'm reading these days.
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