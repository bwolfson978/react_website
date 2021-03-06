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

    const imgStyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: "5%"
    };

    return (
      <div>
        <h1 class="title-style">Teaching</h1>
        <img src="src/images/teaching.jpg" style={imgStyle} class="img-rounded"/>
        <p class="quote-style"><i>"The best way to learn is to teach."</i> - from the Latin principle Docendo Discimus</p>
        <div class="row">{teachingComponents}</div>
        <blockquote>
          <p>...Barry impressed me with his maturity and responsible attitude. He arrived prepared, often reviewing material before they met, and he kept my daughter on task. With his help her grades improved dramatically...</p>
          <small>parent, <cite title="Source Title">Acton, MA</cite></small>
        </blockquote>
      </div>
    );
  }
}