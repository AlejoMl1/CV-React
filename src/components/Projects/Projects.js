import React from 'react';
import Modals from '../Modals/Modals';
import "./Projects.css";

function Projects() {
  return (
    <section id="portfolio" className="s-portfolio target-section">
      <div className="row s-portfolio__header">
        <div className="column large-12">
          <h3 className="font-500">
            Portfolio
          </h3>
        </div>
      </div>
      <Modals />
    </section>
);
}

export default Projects
