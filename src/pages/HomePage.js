import React from 'react';

export default class HomePage extends React.Component {
  render() {
    const titleStyle = {
      paddingBottom: "5%",
      textAlign: "center"
    };

    const imgStyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: "5%"
    };
    
    return (
      <div>
        <h1 style={titleStyle}>Welcome!</h1>
      	<img src="src/images/barry.jpg" style={imgStyle} class="img-circle"/>
        <div>
        <h4 class="text-primary" style={titleStyle}>Thank you very much for visiting my website.</h4>
        <p class="text-muted">My name is Barrett Wolfson and I'm currently an undergraduate at Worcester
        Polytechnic Institute (WPI) majoring in Computer Science. I'm involved with a lot 
        but everything I do boils down to three things:</p>

        <h6 class="text-info">1. Creating</h6>
        <p class="text-muted">For my entire life I've been an avid problem solver
        and builder - I was the kid with bricks, splinters, and grease from my bicycle chain on my hands instead of video games. 
        Throughout the past few years I've learned that my biggest passion is bringing thoughts and ideas 
        into the physical world. This passion lent itself nicely to computer programming upon arriving at college. 
        Websites, applications, APIs that can access the world's data, are all extremely effective tools for stubbing out
        and sifting through ideas.</p>

        <h6 class="text-info">2. Improving</h6>
        <p class="text-muted">Wherever I am in life, I can't help but think of how things could be done better or more efficently. As an active member of
        the Greek community at WPI, I'm always working with others to gather ideas, piece together a vision, and execute a plan to 
        make it happen.</p>  

        <h6 class="text-info">3. Giving Back</h6>
        <p class="text-muted">I was lucky enough to realize first-hand from an early age that it feels better to give a gift than to receive one.
        From volunteering at hospitals, to tutoring and teaching, to just actively contributing to the community I'm currently
        a part of, I always find a way to give back. I'm currently trying to tailor WPI's Career Development Center more specifically
        within majors to help students get exposed to the best possible undergraduate experiences.</p>

        </div>
      </div>
    );
  }
}