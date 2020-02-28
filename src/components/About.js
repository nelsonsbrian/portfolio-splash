import React from 'react'

export default function About() {
  return (
    <div id="about">
      <h1 className="lg-heading">
        About
      <span className="text-secondary-color">Me</span>
      </h1>
      <h2 className="sm-heading">
        Let me tell you a few things...
    </h2>
      <div className="about-info">
        <div className="bio-photo"></div>

        <div className="bio">
          <h3 className="bio-heading text-secondary-color">BIO</h3>
          <p> As an experienced technologist with nearly a decade of coding scripts and creating end-consumer interfaces, I love the process of delivering high quality projects that leave team members and consumers with a need satisfied. I am looking for a role where I can utilize my technical and team building skills to use and further absorb newer technologies.</p>
        </div>

        <div className="job job-1">
          <h3 className="job-title">Nucamp</h3>
          <h6 className="job-position">Coding Instructor</h6>
          <p className="job-description">Instructed and mentored BootCamp students utilizing NodeJS - creating RESTful APIs and backend services.</p>
        </div>

        <div className="job job-2">
          <h3 className="job-title">Off the Record</h3>
          <h6 className="job-position">Front End Developer</h6>
          <p className="job-description">Developed client dashboard. Made consistent functionality  and styling while adding in proper mobile responsiveness to improve user experience. </p>
        </div>

        <div className="job job-3">
          <h3 className="job-title">DigitalCrafts</h3>
          <h6 className="job-position">Teacher Assistant</h6>
          <p className="job-description">Coached & Mentored Microsoft C# developer of newer technologies such as: delegates, design patterns, Azure logic apps, and web jobs.</p>
        </div>
      </div>
    </div>

  )
}
