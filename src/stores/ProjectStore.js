import { EventEmitter } from "events";

class ProjectStore extends EventEmitter {
	constructor() {
		super()
		this.projects = [
			{
				title: "KabaSuji Board Game Application",
				setting: "CS-3733: Software Engineering",
				date: "Spring 2016"
			},
			{
				title: "Deuces Solitaire Version Application",
				setting: "CS-3733: Software Engineering",
				date: "Spring 2016"
			},
			{
				title: "Python Flask API Backend",
				setting: "Carbon Black Internship #1",
				date: "Summer 2015"
			},
			{
				title: "Command Line Emulation Scripts",
				setting: "Carbon Black Internship #1",
				date: "Summer 2015"
			},
			{
				title: "Algae Biofuel Enhancement Project",
				setting: "Great Problems Seminar: Power The World",
				date: "Spring 2015"
			},
		];
	}

	getAll() {
		return this.projects;
	}

}

const projectStore = new ProjectStore;

export default projectStore