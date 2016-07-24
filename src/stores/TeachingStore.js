import { EventEmitter } from "events";

class TeachingStore extends EventEmitter {
	constructor() {
		super()
		this.teachingEndeavors = [
			{
				title: "Peer Learning Assistant (PLA) for Mathematical Sciences Department",
				date: "Fall 2016"
			},
			{
				title: "Grading Assistant for CS2102: Object-Oriented Design Concepts",
				date: "Spring 2015"
			},
			{
				title: "High School Tutor (private and school volunteer)",
				date: "Fall 2013 - Spring 2014"
			},
		];
	}

	getAll() {
		return this.teachingEndeavors;
	}

}

const teachingStore = new TeachingStore;

export default teachingStore
