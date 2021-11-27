import React from 'react'



const Project = (props) => {

  return (
    <>
      <div id="projects">

        <div>
          {/* <h5 className="card-title">{props.name}</h5> */}
          <div className="row">
            <h5 className="card-title">{props.name}</h5>
            <div className={`col-md-6 ${props.direction === 'reverse' ? 'order-3' : 'order-1'}`}>
              <div className="card-image-bio">
                <div className="card-img-top">
                  <img className="project-image" alt="project-image" src={props.image} />
                </div>
              </div>
            </div> 
            <div className="col-md-6 order-2">
              <div className="card-body card-border">
                <p className="card-text">{props.description}</p>
              </div>
            </div>
          </div> 
      
        
      
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.techOne}</li>
            <li className="list-group-item">{props.techTwo}</li>
            <li className="list-group-item">{props.techThree}</li>
          </ul>
          <div className="card-body">
            <a href={props.github} className="card-link" rel="noreferrer" target="_blank">Code</a>
            <a href={props.site} className="card-link" rel="noreferrer" target="_blank">Explore</a>
          </div>
          <hr />
        </div>
      </div>
    </>
  )
}

export default Project