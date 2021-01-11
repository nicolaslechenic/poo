import PlanBienImmo from './PlanBienImmo';

export default class PlanDAppart extends PlanBienImmo {
  private etage: number;

  constructor(etage: number, prix: number, t: number) {
    super(prix, t);
    
    this.etage = etage;
  }

  protected intro() {
    return `L'appartement à l'étage ${this.etage}`;
  }
}