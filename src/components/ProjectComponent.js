import React from "react";

export default class ProjectComponent extends React.Component {
  render() {

      const headerStyle = {
          fontFamily: "'Raleway', sans-serif",
          fontWeight: "700",
          fontSize: "2.0rem"
      };

      const paragraphStyle = {
          fontFamily: "'Raleway', sans-serif",
          fontWeight: "400",
          fontSize: "2.0rem"
      };
    const { title } = this.props;
    const { setting } = this.props;
    const { date } = this.props;
    const { description } = this.props;
    const { link } = this.props;

    if (link == "" && title != "Algae Biofuel Enhancement Project"){
      return (
        <div class="col-md-4">
          <div class="panel panel-warning">
            <div class="panel-heading">
              <h3 class="panel-title">{title}</h3>
            </div>
            <div class="panel-body">
              {setting}, {date}
            </div>
            <div class="panel-body" style={paragraphStyle}>
                {description}
            </div>
          </div>
        </div>
      );
    }
    else if (title == "React.js Website"){
      return (
        <div class="col-md-4">
          <div class="panel panel-warning">
            <div class="panel-heading">
              <h3 class="panel-title">{title}</h3>
            </div>
            <div class="panel-body">
              {setting}, {date}
            </div>
            <div class="panel-body">
              {description}
            </div>
            <span><a href={link} class="btn btn-link">Link</a>-You're already here!</span>
          </div>
        </div>
      );
    }
    else if (title == "Launching a Service Marketplace Startup"){
      return (
        <div class="col-md-4">
          <div class="panel panel-warning">
            <div class="panel-heading">
              <h3 class="panel-title">{title}</h3>
            </div>
            <div class="panel-body">
              {setting}, {date}
            </div>
            <div class="panel-body">
              {description}
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div class="col-md-4">
          <div class="panel panel-warning">
            <div class="panel-heading">
              <h3 class="panel-title">{title}</h3>
            </div>
            <div class="panel-body">
              {setting}, {date}
            </div>
            <div class="panel-body">
              {description}
            </div>
            <a href={link} class="btn btn-link">Link</a> 
          </div>
        </div>
      );
    }
  }
}