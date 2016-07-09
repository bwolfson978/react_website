import React from 'react';

import TeachingComponent from "../components/TeachingComponent"

export default class InterestsPage extends React.Component {
  render() {
  	//load in from backend
    const TeachingEndeavors = [
      "Teaching 1",
      "Teaching 2",
      "Teaching 3",
      "Teaching 4",
    ].map((title, i) => <TeachingComponent key={i} title={title}/> );

    return (
      <div>
        <div class="row">{TeachingEndeavors}</div>
      </div>
    );
  }
}