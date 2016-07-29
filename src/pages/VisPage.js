// vis page
import React from 'react';
import ReactDOM from 'react-dom';
import ChartComponent from "../components/ChartComponent"

export default class VisPage extends React.Component {
  render() {
    const titleStyle = {
      paddingBottom: "5%"
    };

    return (
      <div>
        <h1 style={titleStyle}>Visualizations</h1>
        <div class="row"><ChartComponent/></div>
      </div>
   );
  }
}