import React from 'react';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
      	<div>This is the home page</div>
        <div>{this.props.helloMsg}</div>
        <div>{this.props.links}</div>
      </div>
    );
  }
}