import React from "react";

export default class SkillComponent extends React.Component {
  render() {
    const { title } = this.props;
    const { profLevel } = this.props;
    const { color } = this.props;

    var barStyle = {
      width: profLevel,
    };

    var compStyle = {
      paddingBottom: "2%"
    }

      const skillStyle = {
          fontFamily: "'Raleway', sans-serif",
          fontWeight: "400",
          fontSize: "1.8rem"
      };

    var progressBar = "progress-bar " + color;

    return (
      <div class="col-md-4" style={compStyle}>
        <h6 style={skillStyle}>{title}</h6>
        <div class="progress">
          <div class={progressBar} style={barStyle}></div>
        </div>
      </div>
    );
  }
}