import React from 'react';

import SkillComponent from "../components/SkillComponent"
import SkillStore from "../stores/SkillStore"

export default class SkillsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: SkillStore.getAll(),
    };
  }

  render() {
    const { skills } = this.state;

    const skillComponents = skills.map((skill, i) => {
      return <SkillComponent key={i} {...skill}/>;
    });

    const titleStyle = {
      paddingBottom: "5%"
    };

    return (
      <div>
        <h1 style={titleStyle}>Skills</h1>
        <div class="row">{skillComponents}</div>
      </div>
    );
  }
}