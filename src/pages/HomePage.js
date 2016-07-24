import React from 'react';

export default class HomePage extends React.Component {
  render() {
    const titleStyle = {
      paddingBottom: "5%"
    };
    
    return (
      <div>
        <h1 style={titleStyle}>Welcome!</h1>
      	<img src="src/images/barry.jpg" class="img-circle"/>
        <div>{this.props.helloMsg}</div>
        <div>{this.props.links}</div>
      </div>
    );
  }
}