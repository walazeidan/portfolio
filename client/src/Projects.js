import React, { useState } from 'react'



const Projects = () => {
  const [ showMore, setShowMore ] = useState(false)

  const handleMoreClick = () => {
    setShowMore(!showMore)
  }

  return (
    <>
      <div id="projects">
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className="projects-list">
          <div className="projects-one">
            <div className="frogger-links">
              <div className="frogger">
              </div>
              <div className="all-btns">
                <div className="learn-more-p">
                  <button className="learn-more" onClick={handleMoreClick}>
                    {showMore ? 'Hide' : 'Learn more'}
                  </button>
                  {showMore &&
                  <div className="paragraph">
                    <p>I had one week to build a grid- based game using JavaScript, CSS and HTML.<br /> I chose to create Frogger, which was challenging but helped solidify my fundamental JavaScript knowledge.</p>
                  </div>
                  }
                </div>
                <div className="project-btns">
                  <a href="https://github.com/walazeidan/Project-One" className="github" rel="noreferrer" target="_blank">
                    <p className="github-btn">Code</p>
                  </a>
                  <a href="https://walazeidan.github.io/Project-One/" className="github" rel="noreferrer" target="_blank">
                    <p className="github-btn">Explore</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="pokedex-links">
              <div className="pokedex">
              </div>
              <div className="all-btns">
                <div className="learn-more-p">
                  <button className="learn-more" onClick={handleMoreClick}>
                    {showMore ? 'Hide' : 'Learn more'}
                  </button>
                  {showMore &&
                  <div className="paragraph">
                    <p>We used an external API to build a React app that allowed users to view a variety of ‘Pokemon’.</p>
                  </div>
                  }
                </div>
                <div className="project-btns">
                  <a href="https://github.com/walazeidan/Project-Two" className="github" rel="noreferrer" target="_blank">
                    <p className="github-btn">Code</p>
                  </a>
                  <a href="https://pokereactdex.netlify.app/" className="github" rel="noreferrer" target="_blank">
                    <p className="github-btn">Explore</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-two">
            <div className="pint-pirates-links">
              <div className="pint-pirates">
              </div>
              <div className="all-btns">
                <div className="learn-more-p">
                  <button className="learn-more" onClick={handleMoreClick}>
                    {showMore ? 'Hide' : 'Learn more'}
                  </button>
                  {showMore &&
                  <div className="paragraph">
                    <p>We used Express and MongoDB for backend and React for frontend<br /> to develop an application and that shows users which cities in the UK have the cheapest beers<br /> as well as where exactly in each city you can find said beer.</p>
                  </div>
                  }
                </div>
                <div className="project-btns">
                  <a href="https://github.com/walazeidan/Project-Three" className="github" rel="noreferrer" target="_blank">
                    <p className="github-btn">Code</p>
                  </a>
                  <a href="https://pint-pirate.herokuapp.com/" className="github" rel="noreferrer" target="_blank">
                    <p className="github-btn">Explore</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="hollywood-effect-links">
              <div className="hollywood-effect">
              </div>
              <div className="all-btns">
                <div className="learn-more-p">
                  <button className="learn-more" onClick={handleMoreClick}>
                    {showMore ? 'Hide' : 'Learn more'}
                  </button>
                  {showMore &&
                  <div className="paragraph">
                    <p>TThis app allows users to vote on whether they prefer the movie adaptation of a book to the book or vice- versa. Users can register/login as well as leave reviews for the various titles that are available.</p>
                  </div>
                  }
                </div>
                <div className="project-btns">
                  <a href="https://github.com/walazeidan/Project-Four" className="github" rel="noreferrer" target="_blank">
                    <p className="github-btn">Code</p>
                  </a>
                  <a href="https://the-hollywood-effect.herokuapp.com/" className="github" rel="noreferrer" target="_blank">
                    <p className="github-btn">Explore</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects