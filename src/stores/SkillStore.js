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
				color: "progress-bar-success"
			},
			{
				title: "C",
				profLevel: "65%",
				color: "progress-bar-success"
			},
			{
				title: "HTML/CSS",
				profLevel: "85%",
				color: "progress-bar-success"
			},
			{
				title: "Javascript",
				profLevel: "60%",
				color: "progress-bar-success"
			},
			{
				title: "Linux/UNIX systems",
				profLevel: "55%",
				color: "progress-bar-success"
			},
			{
				title: "Object-Oriented Design",
				profLevel: "75%",
				color: "progress-bar-success"
			},
			{
				title: "Public Speaking, Presenting, and Writing",
				profLevel: "70%",
				color: "progress-bar-success"
			},
			{
				title: "Learning Independently and Quickly",
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