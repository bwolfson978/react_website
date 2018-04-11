import React from 'react';

import InvolvementComponent from "../components/InvolvementComponent"
import InvolvementStore from "../stores/InvolvementStore"

export default class InvolvementPage extends React.Component {
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
          paddingBottom: "2%",
          textAlign: "center",
          fontFamily: "'Raleway', sans-serif",
          fontWeight: "700",
          fontSize: "3.0rem"
      };

    return (
      <div>
        <h1 class = "title-style">Involvement</h1>
        <div class="row">{involvementComponents}</div>
      </div>
    );
  }
}