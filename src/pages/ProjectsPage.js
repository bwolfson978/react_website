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

    const titleStyle = {
      paddingBottom: "5%"
    };

    return (
      <div>
        <h1 style={titleStyle}>Projects</h1>
        <div class="row">{projectComponents}</div>
      </div>
    );
  }
}