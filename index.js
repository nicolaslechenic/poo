import PlanDeMaison from "./PlanDeMaison";

let apiData = [
  {couleur: "rouge", prix: 160000, t: 2},
  {couleur: "verte", prix: 260000, t: 3},
  {couleur: "orange", prix: 320000, t: 2},
  {couleur: "verte", prix: 280000, t: 4},
  {couleur: "blanche", prix: 120000, t: 2},
]

let rendu = document.getElementById("rendu");

for(let i = 0; i < apiData.length; i++) {
  let m = apiData[i];
  let maison = new PlanDeMaison(m.couleur, m.prix, m.t);

  rendu.innerHTML += `<p>${maison.info()}</p>`;
}