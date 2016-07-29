import { EventEmitter } from "events";

class SkillStore extends EventEmitter {
	constructor() {
		super()
		this.skills = [
			{
				title: "Java",
				profLevel: "80%",
				description: "java is totally cool."
			},
			{
				title: "Python",
				profLevel: "70%",
				description: "python is totally well suppported."
			},
		];
	}

	getAll() {
		return this.skills;
	}

}

const skillStore = new SkillStore;

export default skillStore