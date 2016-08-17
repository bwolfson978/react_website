import { EventEmitter } from "events";

class SkillStore extends EventEmitter {
	constructor() {
		super()
		this.skills = [
			{
				title: "Java",
				profLevel: "80%",
				color: "progress-bar-success"
			},
			{
				title: "Python",
				profLevel: "80%",
				color: ""
			},
			{
				title: "C",
				profLevel: "65%",
				color: "progress-bar-success"
			},
			{
				title: "HTML/CSS",
				profLevel: "85%",
				color: ""
			},
			{
				title: "Javascript",
				profLevel: "60%",
				color: "progress-bar-success"
			},
			{
				title: "Linux/UNIX systems",
				profLevel: "55%",
				color: ""
			},
			{
				title: "Object-Oriented Design",
				profLevel: "75%",
				color: "progress-bar-success"
			},
			{
				title: "Public Speaking, Presenting, and Writing",
				profLevel: "70%",
				color: ""
			},
			{
				title: "Learning independently and quickly",
				profLevel: "90%",
				color: "progress-bar-success"
			}
		];
	}

	getAll() {
		return this.skills;
	}

}

const skillStore = new SkillStore;

export default skillStore