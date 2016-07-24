import React from 'react';

import InterestComponent from "../components/InterestComponent"
import InterestStore from "../stores/InterestStore"

export default class InterestsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      interests: InterestStore.getAll(),
    };
  }

  render() {
    const { interests } = this.state;

    const interestComponents = interests.map((interest, i) => {
      return <InterestComponent key={i} {...interest}/>;
    });

    const titleStyle = {
      paddingBottom: "5%"
    };

    return (
      <div>
        <h1 style={titleStyle}>Interests</h1>
        <div class="row">{interestComponents}</div>
      </div>
    );
  }
}