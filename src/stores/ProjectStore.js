import { EventEmitter } from "events";

class ProjectStore extends EventEmitter {
	constructor() {
		super()
		this.projects = [
			{
				title:"Vulnerability Visualization",
				setting: "WPI",
				date:"Fall 2016",
				description:""
			},
			{
				title: "This Website",
				setting: "personal project",
				date: "Summer 2016",
				description:""
			},
			{
				title: "KabaSuji Board Game Application",
				setting: "CS-3733: Software Engineering",
				date: "Spring 2016",
				description:""
			},
			{
				title: "Deuces Solitaire Version Application",
				setting: "CS-3733: Software Engineering",
				date: "Spring 2016",
				description:""
			},
			{
				title: "Python Flask API Backend",
				setting: "Carbon Black Internship #1",
				date: "Summer 2015",
				description:""
			},
			{
				title: "Command Line Emulation Scripts",
				setting: "Carbon Black Internship #1",
				date: "Summer 2015",
				description:""
			},
			{
				title: "Algae Biofuel Enhancement Project",
				setting: "Great Problems Seminar: Power The World",
				date: "Spring 2015",
				description:""
			},
			{
				title: "New Model for Obsessive Compulsive Disorder in Mice",
				setting: "Tufts Medical School",
				date: "Summer 2013",
				description: ""
			}
		];
	}

	getAll() {
		return this.projects;
	}

}

const projectStore = new ProjectStore;

export default projectStore