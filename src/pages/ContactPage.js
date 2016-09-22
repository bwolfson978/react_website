/**
 * Created by Barrett on 9/21/2016.
 */
import React from 'react';

export default class ContactPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { involvements } = this.state;

        const involvementComponents = involvements.map((involvement, i) => {
                return <InvolvementComponent key={i} {...involvement}/>;
        });

        const titleStyle = {
            paddingBottom: "5%",
            textAlign: "center"
        };

        return (
            <div>
            <h1 style={titleStyle}>Contact Information</h1>
            <h4>email: bwolfson@wpi.edu</h4>
            </div>
        );
    }
}