import React from 'react'

export default function About() {
  return (
    <div id="about">
      <h1 className="lg-heading">
        About
      <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">
        Let me tell you a few things...
    </h2>
      <div className="about-info">
        <div className="bio-photo"></div>

        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>As an experienced technologist with nearly a decade of coding scripts and creating  end-consumer interfaces, I love the process of delivering high quality projects that leave  team members and consumer with a need satisfied. I am looking for a role where I can  technical and team building skills to use and further absorb newer technologies</p>
        </div>

        <div className="job job-1">
          <h3>Nucamp</h3>
          <h6>Coding Instructor</h6>
          <p>Taught and mentored BootCamp students utilizing NodeJS and backend services.</p>
        </div>

        <div className="job job-2">
          <h3>Off the Record</h3>
          <h6>Front End Developer</h6>
          <p>Developed client dashboard. Made consistent functionality  and styling while adding in proper mobile responsiveness to improve user experience. </p>
        </div>

        <div className="job job-3">
          <h3>DigitalCrafts</h3>
          <h6>Teacher Assistant</h6>
          <p>Reviewed teaching points of: delegates, design patterns, dynamics, events, attributes,  Azure logic apps, web jobs, async programming, multithreading with 25 students.  </p>
        </div>
      </div>
    </div>

  )
}
