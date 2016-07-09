import React from 'react';

import SkillComponent from "../components/SkillComponent"

export default class InterestsPage extends React.Component {
  render() {
  	//load in from backend
    const Skills = [
      "Skill 1",
      "Skill 2",
      "Skill 3",
      "Skill 4",
    ].map((title, i) => <SkillComponent key={i} title={title}/> );

    return (
      <div>
        <div class="row">{Skills}</div>
      </div>
    );
  }
}