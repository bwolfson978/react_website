import React from 'react';

export default class ContactPage extends React.Component {
    constructor() {
        super();
    }

    render() {

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