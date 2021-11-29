import React from 'react'
import Roll from 'react-reveal/Roll'

const Skills = () => {
  return (
    <div id="skills">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="container">
        <div className="bullet-list d-flex justify-content-around">
          <Roll left>
            <div className="text-and-icon">
              <i className="devicon-html5-plain-wordmark reveal colored"></i>
              <div className="hide">HTML5</div>
            </div>
            <div className="text-and-icon">
            <i className="devicon-css3-plain-wordmark reveal colored"></i>
            <div className="hide">CSS3</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-sass-original reveal colored"></i>
              <div className="hide">SASS</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-bootstrap-plain-wordmark reveal colored"></i>
              <div className="hide">Bootstrap</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-javascript-plain reveal colored"></i>
              <div className="hide">JavaScript</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-react-original-wordmark reveal colored"></i>
              <div className="hide">React</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-nodejs-plain reveal colored"></i>
              <div className="hide">NodeJS</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-express-original reveal colored"></i>
              <div className="hide">Express</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-mongodb-plain-wordmark reveal colored"></i>
              <div className="hide">MongoDB</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-yarn-plain-wordmark reveal colored"></i>
              <div className="hide">Yarn</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-npm-original-wordmark reveal colored"></i>
              <div className="hide">NPM</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-python-plain reveal colored"></i>
              <div className="hide">Python</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-django-line reveal colored"></i>
              <div className="hide">Django</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-postgresql-plain reveal colored"></i>
              <div className="hide">PostgreSQL</div>
            </div>
            <div className="text-and-icon">
              <i className="devicon-yarn-plain reveal colored"></i>
              <div className="hide">Yarn</div>
            </div>
          </Roll>
        </div>
      </div>
    </div>
  )
}

export default Skills