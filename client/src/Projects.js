import React from 'react'
import Fade from 'react-reveal/Fade'
import Project from './Project'



const Projects = () => {

  return (
    <>
      <div id="projects">
        <div className="container">
          <div className="title">
            <Fade left>
              <h1>Projects</h1>
            </Fade>
            <hr />
          </div>
          <div className="project-list">
            <Fade right>
              <Project 
                name="Frogger"
                description="I had one week to build a grid- based game using JavaScript, CSS and HTML. I chose to create Frogger, which was challenging but helped solidify my fundamental JavaScript knowledge."
                image="https://i.imgur.com/biEhBae.png"
                github="https://github.com/walazeidan/Project-One"
                site="https://walazeidan.github.io/Project-One/"
                techOne="HTML"
                techTwo="CSS"
                techThree="JavaScript"
                direction="reverse"
              ></Project>
            </Fade>

            <Fade left>
              <Project 
                name="Pokedex"
                description="Pair-programming hack-a-thon where we used an external API to build a React app that allowed users to view a variety of ‘Pokemon’. This was my first time working on a search function as well as a filter function that allowed users to view ‘Pokemon’ of a particular ‘type’."
                image="https://i.imgur.com/QiiOHcf.png"
                github="https://github.com/walazeidan/Project-Two"
                site="https://pokereactdex.netlify.app/"
                techOne="React"
                techTwo="SASS"
                techThree="Bootstrap"
              ></Project>
            </Fade>

            <Fade right>
              <Project 
                name="Pint Pirate"
                description="This was a 3-person group project and my first full-stack venture. We used Express and MongoDB for backend and React for frontend to develop an application and that shows users which cities in the UK have the cheapest beers as well as where exactly in each city you can find said beer. My responsibilities included allowing users to leave reviews and to delete them, creating a search function and building the authentication."
                image="https://i.imgur.com/74ev7et.png"
                github="https://github.com/walazeidan/Project-Three"
                site="https://pint-pirate.herokuapp.com/"
                techOne="React"
                techTwo="Node.js"
                techThree="MongoDB"
                direction="reverse"
              ></Project>
            </Fade>

            <Fade left>
              <Project 
                name="The Hollywood Effect"
                description="I worked on this app solo, using Python, Django, and PostgreSQL for my backend and React for my frontend. This app allows users to vote on whether they prefer the movie adaptation of a book to the book or vice- versa. Users can register/login as well as leave reviews for the various titles that are available."
                image="https://i.imgur.com/i4n5rLS.png"
                github="https://github.com/walazeidan/Project-Four"
                site="https://the-hollywood-effect.herokuapp.com/"
                techOne="React"
                techTwo="Django"
                techThree="PostgreSQL"
              ></Project>
            </Fade>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects