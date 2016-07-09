import React from 'react';

import InvolvementComponent from "../components/InvolvementComponent"

export default class InterestsPage extends React.Component {
  render() {
  	//load in from backend
    const Involvements = [
      "Involvement 1",
      "Involvement 2",
      "Involvement 3",
      "Involvement 4",
    ].map((title, i) => <InvolvementComponent key={i} title={title}/> );

    return (
      <div>
        <div class="row">{Involvements}</div>
      </div>
    );
  }
}