import { EventEmitter } from "events";

class TeachingStore extends EventEmitter {
	constructor() {
		super()
		this.teachingEndeavors = [
			{
				title: "Peer Learning Assistant (PLA) for Mathematical Sciences Department",
				setting: "Calculus 2 and Calculus 4",
				date: "Fall 2016",
				description: "During my fall semester of sophomore year at WPI, I served as a PLA (similar to a Teaching Assistant) for Calculus 2 (in quarter 1) and Calculus 4 (in quarter 2). I graded student homework submissions, held office hours, and prepared and taught a one hour conference each week for roughly 30 students."
			},
			{
				title: "Grading Assistant for Computer Science Department",
				setting: "Object-Oriented Design Concepts",
				date: "Spring 2015",
				description: "During the spring of my freshmen year at WPI, I served as a grading assistant for CS2102 which I had previously taken in the fall and truly enjoyed. Seeing and grading hundreds of student homework submissions not only reinforced the concepts I had been exposed to in the fall, but also proved to me how differently the same problem can be approached and solved by different people."			},
			{
				title: "High School Tutor (private and school volunteer)",
				setting: "Academic Support Center and private homes",
				date: "Fall 2013 - Spring 2014",
				description: "The Academic Support Center in my high school was where I first found a passion for teaching. I helped students in all subject areas but focused on math, physics, and chemistry. Additionally, I tutored four students individually outside of school. Both of these experiences made it clear to me that the best way to learn is to teach."
			},
		];
	}

	getAll() {
		return this.teachingEndeavors;
	}

}

const teachingStore = new TeachingStore;

export default teachingStore
