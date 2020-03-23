import React from 'react'
import { JobData } from '../data/jobs';
import { EducationData } from '../data/education';

const JobCard = ({ job }) => {
  const { company, title, points, technologies, image } = job;
  const imagePath = image ? `/img/${image}` : `https://via.placeholder.com/100`;
  return (
    <div className="job-card">
      <div className="job-header">
        <h3 className="job-title">{company}</h3>
        <div className="job-img-container">
          <img src={imagePath}
            alt={`${company} logo`}
          />
        </div>
        <h6 className="job-position">{title}</h6>
      </div>
      <div className="job-content">
        <div className="job-technologies">
          {technologies.map(tech => <span key={tech} className="technology">{tech}</span>)}
        </div>
        <ul className="job-points">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

const EducationCard = ({ education }) => {
  const { company, title, description, technologies, image, items } = education;
  const imagePath = image ? `/img/${image}` : `https://via.placeholder.com/100`;
  return (
    <div className="job-card">
      <div className="job-header">
        <h3 className="job-title">{company}</h3>
        <div className="job-img-container">
          <img src={imagePath}
            alt={`${company} logo`}
          />
        </div>
        <h6 className="job-position">{title}</h6>
      </div>
      <div className="job-content">
        <div className="job-technologies">
          {technologies.map(tech => <span key={tech} className="technology">{tech}</span>)}
        </div>
        {description &&
          <div className="job-description">
            {description}
          </div>
        }

        {items.map(({ name, points }) => (
          <div className="job-item" key={name}>
            <h5 className="job-subtitle secondary">{name}</h5>
            <ul className="job-points">
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}

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

        <div className="bio">
          <h3 className="bio-heading text-secondary-color">BIO</h3>
          <p> As an experienced technologist with nearly a decade of coding scripts and creating end-consumer interfaces, I love the process of delivering high quality projects that leave team members and consumers with a need satisfied. I am looking for a role where I can utilize my technical and team building skills to use and further absorb newer technologies.</p>
        </div>

        <h3 className="bio-heading text-secondary-color">Experience</h3>
        <div className="job">
          {JobData.map(job => <JobCard key={job.company} job={job} />)}
        </div>

        <h3 className="bio-heading text-secondary-color">Education</h3>
        <div className="job">
          {EducationData.map(education => <EducationCard key={education.company} education={education} />)}
        </div>
      </div>
    </div>

  )
}
