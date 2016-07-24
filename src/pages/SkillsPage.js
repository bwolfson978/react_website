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

    return (
      <div>
        <div class="row">{skillComponents}</div>
      </div>
    );
  }
}