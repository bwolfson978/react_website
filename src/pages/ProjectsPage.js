import React from 'react';

import ProjectComponent from "../components/ProjectComponent"
import ProjectStore from "../stores/ProjectStore"

export default class ProjectsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: ProjectStore.getAll(),
    };
  }

  render() {
    const { projects } = this.state;

    const projectComponents = projects.map((project, i) => {
      return <ProjectComponent key={i} {...project}/>;
    });

    return (
      <div>
        <div class="row">{projectComponents}</div>
      </div>
    );
  }
}