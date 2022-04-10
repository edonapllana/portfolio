import React from 'react'
import './projects.css'
//importing Images
import IMG1 from '../../assets/images/projects/resto7.PNG'
import IMG2 from '../../assets/images/projects/portfolio.PNG'
import IMG3 from '../../assets/images/projects/art.PNG'
import IMG4 from '../../assets/images/projects/solution.PNG'
import IMG5 from '../../assets/images/projects/prjct5.PNG'

export const Projects = () => {
  return (
    <section id="projects">
      <h2>The Projects</h2>
      {/* The Project Section*/}
      <div className="container project_container">
        {/* Project Items */}
        <article className="project_items">
          <div className="project_images">
            <img src={IMG1}/>
          </div>
          <h3>Resto7</h3>
          <a href="" className="btn" target="_blank">Live Demo</a>
        </article>
        <article className="project_items">
          <div className="project_images">
            <img src={IMG2}/>
          </div>
          <h3>Portfoliot</h3>
          <a href="" className="btn" target="_blank">Live Demo</a>
        </article>
        <article className="project_items">
          <div className="project_images">
            <img src={IMG3}/>
          </div>
          <h3>The Park</h3>
          <a href="" className="btn" target="_blank">Live Demo</a>
        </article>
        <article className="project_items">
          <div className="project_images">
            <img src={IMG4}/>
          </div>
          <h3>Solution</h3>
          <a href="" className="btn" target="_blank">Live Demo</a>
        </article>
        <article className="project_items">
          <div className="project_images">
            <img src={IMG5}/>
          </div>
          <h3>House</h3>
          <a href="" className="btn" target="_blank">Live Demo</a>
        </article>
        <article className="project_items">
          <div className="project_images">
            <img src={IMG1}/>
          </div>
          <h3>Resto7</h3>
          <a href="" className="btn" target="_blank">Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Projects;