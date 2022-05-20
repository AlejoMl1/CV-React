import React from 'react'
import Skill from '../Skill'
import styles from './Skills.module.scss'

export default function Skills() {
    return (
        <div className={styles.skills}>
                <h2>Skills and Technologies</h2>
            <div className={styles.skillsGrid}>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="The logo icon for redux" title="Redux"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  alt="JavaScript" title="JavaScript" />

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" title="MySQL"  alt="MySQL" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" title="heroku" alt="heroku" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" title="jquery" alt="jquery" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" title="post" alt="post" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" title="sass" alt="sass" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" title="typescript" alt="typescript" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg" title="eslint" alt="eslint" />

                {/* https://github.com/devicons/devicon/blob/v2.15.1/icons/npm/npm-original-wordmark.svg */}
            </div>            
        </div>
    )



   
    

    // <img source="https://github.com/devicons/devicon/blob/master/icons/eslint/eslint-original-wordmark.svg" title="eslint" **alt="eslint" width="40" height="40"/>
    // <img source="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" title="express" **alt="express" width="40" height="40"/>
}
