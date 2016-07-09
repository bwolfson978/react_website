import React from "react";

export default class SkillComponent extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
      	<h1>mad skills</h1>
        <h4>{title}</h4>
        <p>description about a skill</p>
      </div>
    );
  }
}