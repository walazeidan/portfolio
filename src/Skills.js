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
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-sass-original colored"></i>
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-nodejs-plain colored"></i>
            <i className="devicon-express-original colored"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-yarn-plain-wordmark colored"></i>
            <i className="devicon-npm-original-wordmark colored"></i>
            <i className="devicon-python-plain colored"></i>
            <i className="devicon-django-line colored"></i>
            <i className="devicon-postgresql-plain colored"></i>
            <i className="devicon-yarn-plain colored"></i>
          </Roll>
        </div>
      </div>
    </div>
  )
}

export default Skills