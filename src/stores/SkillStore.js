import { EventEmitter } from "events";

class SkillStore extends EventEmitter {
	constructor() {
		super()
		this.skills = [
			{
				title: "Java",
				profLevel: 80
			},
			{
				title: "Python",
				profLevel: 70
			},
		];
	}

	getAll() {
		return this.skills;
	}

}

const skillStore = new SkillStore;

export default skillStore