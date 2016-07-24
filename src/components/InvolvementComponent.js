import React from "react";

export default class InvolvementComponent extends React.Component {
  render() {
    const { title } = this.props;
    const { setting } = this.props;
    const { date } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <h5>{setting}</h5>
        <h5>{date}</h5>
        <p>description about involvement</p>
      </div>
    );
  }
}