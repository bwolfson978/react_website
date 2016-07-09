import React from 'react';

import InterestComponent from "../components/InterestComponent"

export default class InterestsPage extends React.Component {
  render() {
  	//load in from backend
    const Interests = [
      "Interest 1",
      "Interest 2",
      "Interest 3",
      "Interest 4",
    ].map((title, i) => <InterestComponent key={i} title={title}/> );

    return (
      <div>
        <div class="row">{Interests}</div>
      </div>
    );
  }
}