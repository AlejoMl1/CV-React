import React, { useState } from "react";
import Skill from "../Skill";
import styles from "./Skills.module.scss";

export default function Skills() {
  const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
  const listOfSkills = [
    {
      source: `${baseUrl}react/react-original-wordmark.svg`,
      alt: "The logo icon for react",
      title: "React",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}redux/redux-original.svg`,
      alt: "The logo icon for redux",
      title: "Redux",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}html5/html5-original-wordmark.svg`,
      alt: "The logo icon for HTML 5",
      title: "HTML",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}css3/css3-original-wordmark.svg`,
      alt: "The logo icon for CSS3",
      title: "CSS",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}github/github-original-wordmark.svg`,
      alt: "The logo icon for GitHub",
      title: "GitHub",
      technology: "Version control",
    },
    {
      source: `${baseUrl}npm/npm-original-wordmark.svg`,
      alt: "The logo icon for NPM",
      title: "npm",
      technology: "Version control",
    },
    {
      source: `${baseUrl}nodejs/nodejs-original-wordmark.svg`,
      alt: "The logo icon for NodeJS",
      title: "Node JS",
      technology: "Backend",
    },
    {
      source: `${baseUrl}javascript/javascript-original.svg`,
      alt: "JavaScript",
      title: "JavaScript",
      technology: "Language",
    },
    {
      source: `${baseUrl}mysql/mysql-original-wordmark.svg`,
      alt: "MySQL",
      title: "MySQL",
      technology: "Backend",
    },
    {
      source: `${baseUrl}heroku/heroku-original-wordmark.svg`,
      alt: "Heroku",
      title: "Heroku",
      technology: "Backend",
    },
    {
      source: `${baseUrl}jquery/jquery-original.svg`,
      alt: "Jquery",
      title: "jQuery",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}postgresql/postgresql-original.svg`,
      alt: "PostgreSQL",
      title: "PostgreSQL",
      technology: "Backend",
    },
    {
      source: `${baseUrl}sass/sass-original.svg`,
      alt: "SASS",
      title: "SASS",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}typescript/typescript-original.svg`,
      alt: "TypeScript",
      title: "TypeScript",
      technology: "Language",
    },

    {
      source: `${baseUrl}python/python-original-wordmark.svg`,
      alt: "Python",
      title: "Python",
      technology: "Language",
    },
    {
      source: `${baseUrl}amazonwebservices/amazonwebservices-original-wordmark.svg`,
      alt: "AWS",
      title: "AWS",
      technology: "Backend",
    },
    {
      source: `${baseUrl}express/express-original-wordmark.svg`,
      alt: "Express",
      title: "Express",
      technology: "Backend",
    },
    {
      source: `${baseUrl}jest/jest-plain.svg`,
      alt: "Jest",
      title: "Jest",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}jest/jest-plain.svg`,
      alt: "Jest",
      title: "Jest",
      technology: "Backend",
    },

    {
      source: `${baseUrl}php/php-original.svg`,
      alt: "php",
      title: "PHP",
      technology: "Language",
    },
    {
      source: `${baseUrl}linux/linux-original.svg`,
      alt: "Linux",
      title: "Linux",
      technology: "Language",
    },
  ];
  const [skillsToRender, setSkillsToRender] = useState("Language");

  const handleSkillsClick = (technology) => {
    setSkillsToRender(technology);
  };

  const mapSkills = (skillCategory) => {
    return listOfSkills.map((skill, index) => {
      if (skill.technology === skillCategory) {
        return (
          <Skill
            key={index + skillCategory}
            source={skill.source}
            alt={skill.alt}
            title={skill.title}
            technology={skill.technology}
          />
        );
      }
      return null;
    });
  };

  return (
    <div className={styles.skills}>
      <div className={styles.skillsTitle}>
        <h3
          className={skillsToRender === "Language" ? styles.active : ""}
          onClick={() => handleSkillsClick("Language")}
        >
          Languages
        </h3>
        <span />
        <h3
          className={skillsToRender === "Frontend" ? styles.active : ""}
          onClick={() => handleSkillsClick("Frontend")}
        >
          Frontend
        </h3>
        <span />
        <h3
          className={skillsToRender === "Backend" ? styles.active : ""}
          onClick={() => handleSkillsClick("Backend")}
        >
          Backend
        </h3>
        <span />
        <h3
          className={skillsToRender === "Version control" ? styles.active : ""}
          onClick={() => handleSkillsClick("Version control")}
        >
          Version Control
        </h3>
        <span />
      </div>
      <div className={styles.skillsGrid}>
        {skillsToRender === "Language" && mapSkills("Language")}
        {skillsToRender === "Frontend" && mapSkills("Frontend")}
        {skillsToRender === "Backend" && mapSkills("Backend")}
        {skillsToRender === "Version control" && mapSkills("Version control")}
      </div>
    </div>
  );
}
