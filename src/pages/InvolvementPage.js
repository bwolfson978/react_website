import React from 'react';

import InvolvementComponent from "../components/InvolvementComponent"
import InvolvementStore from "../stores/InvolvementStore"

export default class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      involvements: InvolvementStore.getAll(),
    };
  }

  render() {
    const { involvements } = this.state;

    const involvementComponents = involvements.map((involvement, i) => {
      return <InvolvementComponent key={i} {...involvement}/>;
    });

    const titleStyle = {
      paddingBottom: "5%",
      textAlign: "center"
    };

    return (
      <div>
        <h1 style={titleStyle}>Involvement</h1>
        <div class="row">{involvementComponents}</div>
      </div>
    );
  }
}