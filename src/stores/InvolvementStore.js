import { EventEmitter } from "events";

class InvolvementStore extends EventEmitter {
  constructor() {
    super()
    this.involvements = [
      {
        title: "Interfraternity Council",
        setting: "WPI",
        date: "Spring 2016 - present",
        description: "One of the extremely cool things about Greek life at WPI is we are self-governing. The interfraternity council is the organization that resides over all of the 13 different fraternities on campus, generally deciding the direction to move Greek life towards. I have been involved with IFC since last December, serving as the treasurer and a member of the executive board. It's been an awesome experience working alongside the administration with some of the best students in the Greek community."
      },
      {
        title: "Brother of the Fraternity of Phi Gamma Delta",
        setting: "WPI",
        date: "2015 - present",
        description: "Deciding to join Greek life was definitely one of the best decisions I made in my first year of college. I've become extremely passionate about alumni relations after seeing how one organization can transcend and connect multiple generations. In the past two years, I've held three positions within our fraternity: webmaster, awards chair, and executive recording secretary."
      },
    ];
  }

  getAll() {
    return this.involvements;
  }

}

const involvementStore = new InvolvementStore;

export default involvementStore