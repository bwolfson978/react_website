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

    return (
      <div>
        <div class="row">{teachingComponents}</div>
      </div>
    );
  }
}