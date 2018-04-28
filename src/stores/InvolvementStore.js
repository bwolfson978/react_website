import { EventEmitter } from "events";

class InvolvementStore extends EventEmitter {
  constructor() {
    super()
    this.involvements = [
      {
        title: "Interfraternity Council",
        setting: "WPI",
        date: "2016",
        description: "One of the extremely cool things about Greek life at WPI is we are self-governing. The interfraternity council is the organization that resides over all of the 13 different fraternities on campus, generally deciding the direction to move Greek life towards. I have been involved with IFC since last December, serving as the treasurer and a member of the executive board. It's been an awesome experience working alongside the administration with some of the best students in the Greek community."
      },
      {
        title: "President, the Fraternity of Phi Gamma Delta",
        setting: "WPI",
        date: "2017",
        description: "Deciding to join Greek life was definitely one of the best decisions I made in my first year of college. I've become extremely passionate about alumni relations after seeing how one organization can transcend and connect multiple generations. In the past two years, I've held four positions within our fraternity: webmaster, awards chair, executive recording secretary, and president."
      },
      {
        title: "Trustee Mentor Program",
        setting: "WPI",
        date: "2017-2018",
        description: "The WPI trustee mentor program pairs ambitious students with members of the WPI Board of Trustees. This dialogue allows students to hear valuable career and life advice from accomplished individuals in career paths of interest. Additionally, trustees are able to hear the student perspective regarding campus life which helps them make important decisions that affect the community at large."
      }
    ];
  }

  getAll() {
    return this.involvements;
  }

}

const involvementStore = new InvolvementStore;

export default involvementStore