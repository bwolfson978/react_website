import { EventEmitter } from "events";

class InvolvementStore extends EventEmitter {
  constructor() {
    super()
    this.involvements = [
      {
        title: "Vice President of Finance and Services",
        setting: "Interfraternity Council (IFC) of WPI",
        date: "Spring 2016",
        description: ""
      },
      {
        title: "Brother of the Fraternity of Phi Gamma Delta",
        setting: "WPI",
        date: "since 2015",
        description: ""
      },
    ];
  }

  getAll() {
    return this.involvements;
  }

}

const involvementStore = new InvolvementStore;

export default involvementStore