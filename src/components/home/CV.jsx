import React from 'react'
//importing the CV and Pic
import myCV from '../../assets/files/my-CV.pdf'

export const CV = () => {
  return (
    <a href={myCV} className="btn" download={true}>Download CV</a> 
  )
}

export default CV