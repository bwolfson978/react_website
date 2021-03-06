import React from "react";

import FooterComponent from "../components/FooterComponent";
import NavigationComponent from "../components/NavigationComponent";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>

        <NavigationComponent location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              {this.props.children}
            </div>
          </div>
          <FooterComponent/>
        </div>
      </div>

    );
  }
}