import React from 'react';

export default class ContactPage extends React.Component {
    constructor() {
        super();
    }

    render() {

        const titleStyle = {
            paddingBottom: "5%",
            textAlign: "center",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: "700",
            fontSize: "3.0rem"
        };

        const paragraphStyle = {
            fontFamily: "'Raleway', sans-serif",
            fontWeight: "400",
            fontSize: "2.0rem"
        }

        return (
            <div>
            <h1 style={titleStyle}>Contact Information</h1>
                <h4 style={paragraphStyle}><b>email</b>: bwolfson@wpi.edu</h4>
            <h4 style={paragraphStyle}><a href="https://www.linkedin.com/in/barrett-wolfson-517a38b0/">LinkedIn</a></h4>
            </div>
        );
    }
}