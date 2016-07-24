import React from 'react';

import TeachingComponent from "../components/TeachingComponent"
import TeachingStore from "../stores/TeachingStore"

export default class TeachingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      teachingEndeavors: TeachingStore.getAll(),
    };
  }

  render() {
    const { teachingEndeavors } = this.state;

    const teachingComponents = teachingEndeavors.map((teach, i) => {
      return <TeachingComponent key={i} {...teach}/>;
    });

    const titleStyle = {
      paddingBottom: "5%"
    };

    return (
      <div>
        <h1 style={titleStyle}>Teaching</h1>
        <div class="row">{teachingComponents}</div>
        <blockquote>
          <p>...Barry impressed me with his maturity and responsible attitude. He arrived prepared, often reviewing material before they met, and he kept my daughter on task. With his help her grades improved dramatically...</p>
          <small>parent, <cite title="Source Title">Acton, MA</cite></small>
        </blockquote>
      </div>
    );
  }
}