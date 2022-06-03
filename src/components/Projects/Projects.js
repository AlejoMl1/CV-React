import React from 'react';
import Modals from '../Modals/Modals';
import "./Projects.css";

function Projects() {
  return (
    <section className="s-portfolio target-section">
       <div className="portfolio__header">
          <h3 className="font-500">
                Portfolio
          </h3>
       </div>
      
      {/* 
        <div className="column large-12">
         
        </div>
      </div> */}
      <Modals />
    </section>
);
}

export default Projects

