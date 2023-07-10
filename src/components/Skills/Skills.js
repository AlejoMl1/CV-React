import React from "react";
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
      technology: "Frontend",
    },
    {
      source: `${baseUrl}npm/npm-original-wordmark.svg`,
      alt: "The logo icon for NPM",
      title: "npm",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}nodejs/nodejs-original-wordmark.svg`,
      alt: "The logo icon for NodeJS",
      title: "Node JS",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}javascript/javascript-original.svg`,
      alt: "JavaScript",
      title: "JavaScript",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}mysql/mysql-original-wordmark.svg`,
      alt: "MySQL",
      title: "MySQL",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}heroku/heroku-original-wordmark.svg`,
      alt: "Heroku",
      title: "Heroku",
      technology: "Frontend",
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
      technology: "Frontend",
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
      technology: "Frontend",
    },
    {
      source: `${baseUrl}eslint/eslint-original-wordmark.svg`,
      alt: "Eslint",
      title: "ESLint",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}python/python-original-wordmark.svg`,
      alt: "Python",
      title: "Python",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}amazonwebservices/amazonwebservices-original-wordmark.svg`,
      alt: "AWS",
      title: "AWS",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}express/express-original-wordmark.svg`,
      alt: "Express",
      title: "Express",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}jest/jest-plain.svg`,
      alt: "Jest",
      title: "Jest",
      technology: "Frontend",
    },
    {
      source: `${baseUrl}linux/linux-original.svg`,
      alt: "Linux",
      title: "Linux",
      technology: "Frontend",
    },
  ];
  return (
    <div className={styles.skills}>
      <div className={styles.skillsGrid}>
        {listOfSkills.map((skill, index) => (
          <Skill
            key={index}
            source={skill.source}
            alt={skill.alt}
            title={skill.title}
            technology={skill.technology}
          />
        ))}
      </div>
    </div>
  );

  // <img source="https://github.com/devicons/devicon/blob/master/icons/eslint/eslint-original-wordmark.svg" title="eslint" **alt="eslint" width="40" height="40"/>
  // <img source="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" title="express" **alt="express" width="40" height="40"/>
}
