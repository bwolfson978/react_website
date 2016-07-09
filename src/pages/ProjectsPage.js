import React from 'react';

import ProjectComponent from "../components/ProjectComponent"

export default class ProjectsPage extends React.Component {
  render() {
  	//load in from backend
    const Projects = [
      "Project 1",
      "Project 2",
      "Project 3",
      "Project 4",
    ].map((title, i) => <ProjectComponent key={i} title={title}/> );

    return (
      <div>
        <div class="row">{Projects}</div>
      </div>
    );
  }
}