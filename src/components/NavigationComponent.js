import React from "react";
import { IndexLink, Link } from "react-router";

export default class NavigationComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const layoutClass = location.pathname === "/" ? "active" : "";
    const projectClass = location.pathname.match(/^\/projects/) ? "active" : "";
    const teachingClass = location.pathname.match(/^\/teaching/) ? "active" : "";
    const involvementClass = location.pathname.match(/^\/involvement/) ? "active" : "";
    const skillsClass = location.pathname.match(/^\/skills/) ? "active" : "";
    const interestsClass = location.pathname.match(/^\/interests/) ? "active" : "";
    const visClass = location.pathname.match(/^\/vis/) ? "active" : "";
    const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";

    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={layoutClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={projectClass}>
                <Link to="projects" onClick={this.toggleCollapse.bind(this)}>Projects</Link>
              </li>
              <li class={teachingClass}>
                <Link to="teaching" onClick={this.toggleCollapse.bind(this)}>Teaching</Link>
              </li>
              <li class={involvementClass}>
                <Link to="involvement" onClick={this.toggleCollapse.bind(this)}>Involvement</Link>
              </li>
              <li class={skillsClass}>
                <Link to="skills" onClick={this.toggleCollapse.bind(this)}>Skills</Link>
              </li>
              {/*
              <li class={interestsClass}>
                <Link to="interests" onClick={this.toggleCollapse.bind(this)}>Interests</Link>
              </li>
            */}
              {/*
              <li class={visClass}>
                <Link to="vis" onClick={this.toggleCollapse.bind(this)}>Visualizations</Link>
              </li>
              */}
              <li class={contactClass}>
                <Link to="contact" onClick={this.toggleCollapse.bind(this)}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}