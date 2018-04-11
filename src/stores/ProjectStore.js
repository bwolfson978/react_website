import { EventEmitter } from "events";

class ProjectStore extends EventEmitter {
	constructor() {
		super()
		this.projects = [
			{
				title:"Vulnerability Visualization",
				setting: "WPI",
				date:"Fall 2016",
				description:"This project is my Major Qualifying Project (MQP) or capstone project at WPI. I worked with two other WPI students under the guidance of professor Lane Harrison to extend the capabilities of the Nessus Vulnerability Visualization. We created a web application centered around visualization that can help security professionals quickly gain insight into their managed networks and allow them to react accordingly with patches.",
				link: "http://ornl-sava.github.io/nv/"
			},
			{
				title: "Mitigating Flooding in the Khlong Toei Informal Settlement",
				setting: "Bangkok, Thailand",
				date: "Spring 2017",
				description: "During the second semester of my junior year I studied abroad through the WPI Global Projects Program in Bangkok, Thailand. This was an eye-opening experience that radically changed my perspective towards the world. Our team of four WPI students worked with three Thai students from Chulalongkorn University under the sponsorship of the Duang Prateep Foundation. Our key accomplishment was gathering enough data to construct maps depicting various factors related to flooding in the settlement: elevation, drain depth, areas prone to trash buildup, as well as previously unmapped homes.",
				link: "https://web.wpi.edu/Pubs/E-project/Available/E-project-030217-054122/unrestricted/Mitigating_Flooding_in_Khlong_Toei.pdf"
			},
			{
				title: "Launching a Service Marketplace Startup",
				setting: "Worcester, MA",
				date: "Fall 2015",
				description: "During sophomore year at WPI two students and I founded a service marketplace company centered around connecting college students with citizens in the local community who needed help with routine labor such as lawn mowing, snow shoveling, or household chores. We worked with Latham & Watkins law firm to incorporate the company and extensively with WPI's Tech Advisors Network. Despite a final decision to stop pursuing the company, I learned vast amounts  about technology, entrepreneurship, and business throughout this venture."
			}
		];
	}

	getAll() {
		return this.projects;
	}
}

const projectStore = new ProjectStore;

export default projectStore;