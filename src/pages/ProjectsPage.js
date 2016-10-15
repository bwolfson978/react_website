import React from 'react';
import GitProjectComponent from "../components/GitProjectComponent"
import ProjectComponent from "../components/ProjectComponent"
import ProjectStore from "../stores/ProjectStore"

export default class ProjectsPage extends React.Component {
  constructor() {
    super();
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
      paddingBottom: "5%",
      textAlign: "center"
    };

    const imgStyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: "5%"
    };

    return (
      <div>
        <h1 style={titleStyle}>Projects</h1>
        <img src="src/images/thinker.jpg" style={imgStyle} class="img-rounded"/>
        <div class="row">{projectComponents}</div>
        <h3 style={titleStyle}>GitHub Repos drawn in using GitHub API</h3>
        <GitProjectComponent/>
      </div>
    );
  }
}