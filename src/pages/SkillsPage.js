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
        <h1 style={titleStyle}>Skills</h1>
        <img src="src/images/coding.jpg" style={imgStyle} class="img-rounded"/>
        <p style={titleStyle}><i>"Everybody in this country should learn how to program a computer... because it teaches you how to think."</i> - Steve Jobs</p>
        <div class="row">{skillComponents}</div>
      </div>
    );
  }
}