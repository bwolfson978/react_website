import React from 'react';

export default class IntroPage extends React.Component {
  render() {
    return (
      <div>
      	<div>This is the intro section</div>
        <div>{this.props.helloMsg}</div>
        <div>{this.props.links}</div>
      </div>
    );
  }
}