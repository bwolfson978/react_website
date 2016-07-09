import React from "react";

export default class TeachingComponent extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>teaching description</p>
      </div>
    );
  }
}