import PlanBienImmo from './PlanBienImmo';

export default class PlanDeMaison extends PlanBienImmo {
  private couleur: string;

  constructor(couleur: string, prix: number, t: number) {
    super(prix, t);
    
    this.couleur = this.couleurFinale(couleur);
  }

  protected intro() {
    return `La maison de couleur ${this.couleur}`;
  }

  private couleurFinale(couleur: string) {
    let availableCouleurs = ['verte', 'rouge'];
    if(availableCouleurs.includes(couleur)) {
      return couleur;
    } else {
      return "blanche";
    }
  }
}