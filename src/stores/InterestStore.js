import { EventEmitter } from "events";

class InterestStore extends EventEmitter {
	constructor() {
		super()
		this.interests = [
			{
				title: "The Great Outdoors"
			},
			{
				title: "Entrepreneurship"
			},
			{
				title: "Education"
			},
			{
				title: "The effect of nutrition on autoimmune diseases"
			},
		];
	}

	getAll() {
		return this.interests;
	}

}

const interestStore = new InterestStore;

export default interestStore