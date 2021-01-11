export default class PlanBienImmo {
  protected prix: number;
  protected nombreDeChambres: number;

  constructor(prix: number,  t: number) {
    this.prix = prix;
    this.nombreDeChambres = t - 1;
  }


  info() {
    return `${this.intro()} avec ${this.nombreDeChambres} chambre(s) est un ${this.estUnBonInvestissement()} investissement`;
  }

  // Normalement on ne fait pas comme ça 
  protected intro() {
    return '...';
  }

  protected estUnBonInvestissement() {
    if(this.prix / this.nombreDeChambres > 60000) {
      return "mauvais";
    } else {
      return "bon";
    }

  }
}