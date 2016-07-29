import React from "react";

export default class SkillComponent extends React.Component {
  render() {
    const { title } = this.props;
    const { profLevel } = this.props;
    const { description } = this.props;

    var style = {
      width: profLevel
    };

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>{description}</p>
        <div class="progress">
          <div class="progress-bar progress-bar-info" style={style}></div>
        </div>
      </div>
    );
  }
}