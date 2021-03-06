import React from 'react'
import './about.css'
import { HomepageButton } from 'components/HomepageButton'

//Plain page displaying some details about the project and a HomepageButton component
export const About = () => {
  return (
    <div className="about-wrapper">
      <section className="about-container">
        <h2 className="about-title">Project Movies</h2>
        <p className="about-text">This site is a multi-page React application made during the Technigo frontend boot camp. The application is based on the Movie Database API and two lists made by me for this project.</p>
        <HomepageButton />
      </section>
    </div>
  )
}