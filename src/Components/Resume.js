import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var achievements = data.achievements.map(function (achievements){
      return (
        <div key={achievements.description}>
          <h3>{achievements.platform}</h3>
          <p className="info">
            {achievements.place} <span>&bull;</span>
            {/* <span>&bull;</span> <em className="date">{achievements.description}</em> */}
            <em className="date">{achievements.time}</em>
          </p>
          <p>{achievements.description}</p>
        </div>
      );
    })
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var por = data.por.map(function (por) {
      return (
        <div key={por.company}>
          <h3>{por.company}</h3>
          <p className="info">
            {por.title}
            <span>&bull;</span> <em className="date">{por.years}</em>
          </p>
          <p>{por.description}</p>
        </div>
      );
    });
    var course = data.course.map(function (course) {
      return (
        <div key={course.work}>
          <h4>{course.work}</h4>
        </div>
      );
    });
    var softSkills = data.softSkills.map(function (softSkills) {
      return (
        <div key={softSkills.skill}>
          <h4>{softSkills.skill}</h4>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();   
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} level={skills.level} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work Experience</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Responsibilities</span>
          </h1>
        </div>

        <div className="nine columns main-col">{por}</div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Courseworks</span>
          </h1>
        </div>

        <div className="nine columns main-col">{course}</div>
      </div>

      <div className="row achievements">
        <div className="three columns header-col">
          <h1>
            <span>Achievements</span>
          </h1>
        </div>

        <div className="nine columns main-col">{achievements}</div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Soft Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">{softSkills}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>

      

    </section>
  );
};

export default Resume;
