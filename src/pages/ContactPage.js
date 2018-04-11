import React from 'react';

export default class ContactPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <h1 class="title-style">Contact Information</h1>
            <h4 class="paragraph-style"><b>email</b>: bwolfson@wpi.edu</h4>
            <h4 class="paragraph-style"><a href="https://www.linkedin.com/in/barrett-wolfson-517a38b0/">LinkedIn</a></h4>
            </div>
        );
    }
}