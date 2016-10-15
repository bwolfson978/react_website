import { EventEmitter } from "events";

class ProjectStore extends EventEmitter {
	constructor() {
		super()
		this.projects = [
			{
				title:"Vulnerability Visualization",
				setting: "WPI",
				date:"Fall 2016",
				description:"This project is my Major Qualifying Project (MQP) or capstone project at WPI. I'm currently working with two other WPI students under the guidance of professor Lane Harrison to extend the capabilities of the Nessus Vulnerability Visualization. Our goal is to create a visualization that can help security professionals quickly gain insight into the outputs of their network vulnerability scans and allow them to react accordingly with patches.",
				link:"https://github.com/wpivis/nv"
			},
			{
				title: "React.js Website",
				setting: "Free time",
				date: "Summer 2016",
				description:"I constructed this website as a way to begin to learn the react.js framework during some free time in the summer. A potential direction of the MQP is porting the project from the backbone.js framework to either react.js or angular.js. This website uses webpack, babel es6, as well as react to quickly and dynamically load content.",
				link:"https://bwolfson978.github.io/react_website"
			},
			{
				title: "KabaSuji Board Game Application",
				setting: "CS-3733: Software Engineering",
				date: "Spring 2016",
				description:"I worked on this project with a team of four other students while enrolled in CS3733 (Software Engineering) at WPI. The final application is a classic board game called KabaSuji. The first half of the course was spent designing our project with use cases, mock-up GUIs, and UML class diagrams with object-oriented design principles. The latter half of the course was spent building and testing the application using Java.",
				link:"https://github.com/eriksola/Achilles"
			},
			{
				title: "Deuces Solitaire Version Application",
				setting: "CS-3733: Software Engineering",
				date: "Spring 2016",
				description:"Tnhis project was completed individually in CS3733 (Software Engineering) and gave students a chance to practice extending an existing framework of code (generic Solitaire provided by Professor) to create something new.",
				link:"https://github.com/bwolfson978/Deuces"
			},
			{
				title: "Command Line Emulation Scripts",
				setting: "Carbon Black Internship",
				date: "Summer 2015",
				description:"The main project I worked on during my first summer at Carbon Black was contributing to their open source Developer Network API which helps users compare threat intelligence data.",
				link:"https://github.com/carbonblack/cbapi-python"
			},
			{
				title: "Python Flask API Backend",
				setting: "Carbon Black Internship",
				date: "Summer 2015",
				description:"Another project I was able to work on during my first summer at Carbon Black was a proof-of-concept back-end for a new CB feature called 'Detonation'. I used the Python Flask microframework to design and implement it. This project gave me a solid introduction into web development, RESTful APIs, and HTTP requests relatively quickly. ",
				link:""
			},
			{
				title: "Algae Biofuel Enhancement Project",
				setting: "Great Problems Seminar: Power The World",
				date: "Spring 2015",
				description:"During this seminar, a group of three other WPI students and myself researched various types of renewable energy sources and became very interested with the idea of using algae as a biofuel. Over the course of seven weeks we looked into every different type of open and closed photobioreactor and designed a scale to accurately assess the effectiveness of the system. The scale was intended to help companies compare and improve their systems to drive positive growth with respect to the world's energy crisis.",
				link:""
			},
			{
				title: "New Model for Obsessive Compulsive Disorder in Mice",
				setting: "Tufts Medical School",
				date: "Summer 2013",
				description: "As a summer intern in the Dept. of Integrative Physiology at Tufts Medical, I worked alongside a team of Northeastern co-op students under the guidance of Professor Emeritus Louis Shuster to a new mouse model to observe the effects of drugs designed to treat Obsessive Compulsive Disorder. The model included measuring moved grain pellets in the mouse's cage, as well as tendency to bury marbles, which mice find intimidating.",
				link:""
			}
		];
	}

	getAll() {
		return this.projects;
	}
}

const projectStore = new ProjectStore;

export default projectStore;