import PlanDeMaison from "./PlanDeMaison";
import PlanDAppart from "./PlanDAppart";
import AgentImmo from "./AgentImmo";

let apiData = [
  {couleur: "rouge", prix: 160000, t: 2, type: "house"},
  {etage: 2, prix: 260000, t: 3, type: "apartment"},
  {couleur: "orange", prix: 320000, t: 2, type: "house"},
  {etage: 1, prix: 280000, t: 4, type: "apartment"},
  {couleur: "blanche", prix: 120000, t: 2, type: "house"},
]

let jean = new AgentImmo("Jean", "Bidulle");

let rendu = document.getElementById("rendu");

for(let i = 0; i < apiData.length; i++) {
  let b = apiData[i];
  let bien;

  if(b.type == "house") {
    bien = new PlanDeMaison(b.couleur, b.prix, b.t);
  } else {
    bien = new PlanDAppart(b.etage, b.prix, b.t);
  }

  jean.ajouteBienImmo(bien);

  rendu.innerHTML += `<p>${bien.info()}</p>`;
}

console.log(jean.afficheLesBiens());