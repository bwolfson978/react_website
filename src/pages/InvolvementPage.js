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

    return (
      <div>
        <div class="row">{involvementComponents}</div>
      </div>
    );
  }
}