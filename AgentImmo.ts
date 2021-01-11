import PlanBienImmo from "./PlanBienImmo";

export default class AgentImmo {
  private firstName: string;
  private lastName: string;
  private biens: Array<PlanBienImmo>;

  constructor(firsName: string, lastName: string) {
    this.firstName = firsName;
    this.lastName = lastName;
    this.biens = [];
  }

  fullName() {
    // return this.firstName + " " + this.lastName;
    return `${this.firstName} ${this.lastName}`;
  }

  afficheLesBiens() {
    return this.biens;
  }

  ajouteBienImmo(bien: PlanBienImmo) {
    this.biens.push(bien);
  }
}