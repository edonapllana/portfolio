import React from 'react'
import './home.css'
import myCV from '../../assets/files/my-CV.pdf'
import myPic from '../../assets/images/my-pic-1.jpg'


export const Home = () => {
  return (
      <div id = "home" className="container home-container">
        <div className="home-left">
          <div className="home-left-wrapper">
            <img src={myPic} id="mypic"/>
            <h2 className="home-left-intro">Hello, I'm</h2>
            <h1 className="home-left-name">Edona Pllana</h1>
            <div className="home-left-tittle">
              <div className="home-tittle-wrapper">
                <div className="tittle-wrapper-items">Student</div>
                <div className="tittle-wrapper-items">Web Developer</div>
                <div className="tittle-wrapper-items">Photographer</div>
              </div>
            </div> 
            <div className="home-left-desc">
            Passionate person for Software. Eager to learn and face new challenges
            in the real world of Software. A student, majoring in Mechanical and Computer Engineering, in the branch of Engineering Informatics. Currently close to graduation.
            </div>
          </div>
        </div>
        {/*<a href="#contact" className="btn btn-primary">Download CV</a>*/}
        <div className="home-right">
          <div className="right-bg">
            {/*<img src={myPic} alt="Edona Pllana" className="myPic"/>*/}
            <div></div>
          </div>
        </div> 
      </div>
  )
}

export default Home;