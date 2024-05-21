import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectObj = projects.map(obj => {
    return <ProjectItem key={obj.id} name={obj.name} about={obj.about} technologies={obj.technologies}/>
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectObj}
      </div>
    </div>
  );
}

export default ProjectList;
