import React from 'react';

export default class HomePage extends React.Component {
  render() {
    const titleStyle = {
      paddingBottom: "5%",
      textAlign: "center",
      fontFamily: "'Raleway', sans-serif",
      fontWeight: "700",
      fontSize: "3.0rem"
    };

    const headerStyle = {
        fontFamily: "'Raleway', sans-serif",
        fontWeight: "700",
        fontSize: "2.0rem"
    };

    const imgStyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: "5%"
    };

    const paragraphStyle = {
        fontFamily: "'Raleway', sans-serif",
        fontWeight: "400",
        fontSize: "2.0rem"
    };

    /*
    const paragraphStyle = {
      text-align: center;
      font-family: georgia, "Times New Roman", serif;
      font-size: 32px;
      font-style: italic;
      font-weight: 400;
      color: black;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.6);
      text-transform: capitalize;
    }

  .description {
          color: black;
          font-weight: normal;
          font-size: 1em;
          font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2", "Goudy Old Style", Baskerville, Constantia, Georgia, serif;
      }
      */
    
    return (
      <div>
        <h1 style={titleStyle}>Welcome!</h1>
      	<img src="src/images/barry_sr.jpg" style={imgStyle} class="img-circle"/>
        <div>
        <h2 style={titleStyle}>Thank you for visiting my website.</h2>
        <p style={paragraphStyle}>My name is Barrett Wolfson and I'm currently an undergraduate at Worcester
            Polytechnic Institute (WPI) majoring in Computer Science. Everything I do boils down to three things:</p>

        <h4 style={headerStyle}>1. Creating</h4>
        <p style={paragraphStyle}>For my entire life I've been an avid problem solver
        and builder - I was the kid with bricks, splinters, and grease from my bicycle chain on my hands instead of video games. 
        Throughout the past few years I've learned that my biggest passion is bringing thoughts and ideas 
        into the physical world. This passion lent itself nicely to computer programming upon arriving at college. 
        Websites, applications, APIs that can access the world's data, are all extremely effective tools for stubbing out
        and sifting through ideas.</p>

        <h4 style={headerStyle}>2. Improving</h4>
        <p style={paragraphStyle}>Wherever I am in life, I can't help but think of how things could be done better or more efficently. As an active member of
        the Greek community at WPI, I'm always working with others to gather ideas, piece together a vision, and execute a plan to 
        make it happen.</p>  

        <h4 style={headerStyle}>3. Giving Back</h4>
        <p style={paragraphStyle}>I was lucky enough to realize first-hand from an early age that it feels better to give a gift than to receive one.
        From volunteering at hospitals, to tutoring and teaching, to just actively contributing to the community I'm currently
        a part of, I always find a way to give back. I'm currently trying to tailor WPI's Career Development Center more specifically
        within majors to help students get exposed to the best possible undergraduate experiences.</p>

        </div>
      </div>
    );
  }
}