import { Aerienne } from "./Model/Aerienne.js";
/* import { Alimentaire } from "./Model/Alimentaire.js";
import { Chimique } from "./Model/Chimique.js";
import { Fragile } from "./Model/Fragile.js";
import { Incassable } from "./Model/Incassable.js"; */
import { Maritime } from "./Model/Maritime.js";
import { Terrestre } from "./Model/Terrestre.js";
import { Produit } from "./Model/Produit.js";
/*  import { Cargaison } from "./Model/Cargaisaon.js";  */

/*==================Instanciation================== */
import { Cargaison } from "./Model/Cargaison.js"; 


/* const terrestre = new Terrestre(5000, []);
const terrestre1 = new Terrestre(4000, []);
const aerienne = new Aerienne(1000, []);
const maritime = new Maritime(2000, []);
console.log(maritime); */

/* const ProduitChimique=new Chimique('alcool',3,4); 
const aliment= new Alimentaire('poisson',3);
const fragile = new Fragile("Vase", 10) */

/* aerienne.ajouterProduit(aliment);
maritime.ajouterProduit(ProduitChimique);
terrestre.ajouterProduit(fragile);
terrestre1.ajouterProduit(new Incassable("dieunnne", 100)); */

// Afficher les informations des cargaisons
/* aerienne.info();
console.log(`Total frais: ${aerienne.sommeTotale()}`);
terrestre.info();
console.log(`Total frais: ${terrestre.sommeTotale()}`);
console.log(`Total frais: ${terrestre1.sommeTotale()}`); */

/* ==================Récupération des data du form ajouterProduit==================== */


// window.onload = () => {
//     const dateInput = document.getElementById('dateInput') as HTMLInputElement;
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, '0'); // Mois de 0 à 11, donc ajout +1
//     const day = String(today.getDate()).padStart(2, '0');
//     const formattedDate = `${year}-${month}-${day}`;
    
//     dateInput.value = formattedDate;
// };
/* const cargaisons = {
    aerienne: aerienne,
    maritime: maritime,
    terrestre: terrestre
  }; */
/*   const poidsInput = document.getElementById('poidsCargaison') as HTMLInputElement;

document.getElementById("productType")?.addEventListener("change", function (event) {
    const selectedType = document.getElementById("productType") as HTMLSelectElement;
    const toxicityField = document.getElementById("toxicityField");
    if (selectedType.value === "chimique") {
        toxicityField?.classList.remove("hidden");
    } else {
        toxicityField?.classList.add("hidden");
    }
}); */





console.log("bonjoursidy");

const libelleInput = document.getElementById('libelle') as HTMLInputElement;
const bodyProduit = document.getElementById('bodyProduit') as HTMLTableElement;
const bodyCargaison=document.getElementById('bodyCargaison') as HTMLTableElement;
const ajouterBtn = document.getElementById('ajouter') as HTMLButtonElement;
const cargaisonsContainer = document.getElementById('cargaisonsContainer') as HTMLDivElement;
const addCargoForm=document.getElementById('addCargoForm');
const dateDepart=document.getElementById('dateDepart') as HTMLInputElement;
const dateArrivee=document.getElementById('dateArrive') as HTMLInputElement;
const statut = document.getElementById('statut') as HTMLInputElement;
const produits: Produit[] = [];
let selectedCargaison = Cargaison;


interface CargaisonMap {
    [key: string]: Cargaison;
  }
  
  const cargaisons1: CargaisonMap = {};
  const cargaisonss:Cargaison[]=[];

/* const ajouterCargaisonBtn = document.getElementById('valider') as HTMLButtonElement;
console.log(ajouterCargaisonBtn);

ajouterCargaisonBtn?.addEventListener("click", function (event) {
console.log("sidy");

    const libelleCargaisonInput = document.getElementById('libelleCargaison') as HTMLInputElement;
    const typeCargaisonSelect = document.getElementById('type') as HTMLSelectElement;
    const capaciteCargaisonInput = document.getElementById('poidsCargaison') as HTMLInputElement;
  
    const libelleCargaison = libelleCargaisonInput.value;
    const typeCargaison = typeCargaisonSelect.value;
    const capaciteCargaison = parseFloat(capaciteCargaisonInput.value);
  
    if (!libelleCargaison || isNaN(capaciteCargaison) || capaciteCargaison <= 0) {
      alert("Veuillez entrer des informations valides pour la cargaison.");
      return;
    }
  
    let cargaison: Cargaison; */
/*   
    switch (typeCargaison) {
      case 'aerienne':
        cargaison = new Aerienne(capaciteCargaison, []);
        break;
      case 'maritime':
        cargaison = new Maritime(capaciteCargaison, []);
        break;
      case 'terrestre':
        cargaison = new Terrestre(capaciteCargaison, []);
        break;
      default:
        return;
    }; */

    /* cargaison.ajouterProduit(new Alimentaire('sidy',10)) */
   /*  cargaisonss.push(cargaison); */
     

      /* appendCargoToTable(cargaisonss,libelleCargaison,typeCargaison,capaciteCargaison);  */
/*   const tr = document.createElement('tr'); */
  
 /*  tr.style.border='1px solid blue'; */

 /*  tr.innerHTML = `
  <td class="py-2 px-4">#2633</td>
    <td class=" py-2 px-4 flex items-center"> <img src="https://via.placeholder.com/30" alt="Avatar" class="rounded-full mr-2
    ${libelleCargaison}</td>
    <td class="py-2 px-4">${typeCargaison}</td>
    <td class="py-2 px-4">${dateDepart?.value}</td>
    <td class="py-2 px-4">${dateArrivee?.value}</td>
    <td class="py-2 px-4">${capaciteCargaison}</td>
    <td class="py-2 px-4 text-red-500">${statut?.value}</td>
    <td class="">
        <button id="${cargaisonss.length}"  onclick="afficherPopup()"
        class=" text-center w-[7.5rem]">Add products
        </button> 
    </td>
    <td>
    <button id="${cargaisonss.length}"  onclick="afficherPopup()"
    class="">détails
    </button>
    </td>
  `;
  bodyCargaison.appendChild(tr); */
 
  
/* }); */
/*  document.querySelectorAll('td button').forEach((buton)=>{
     buton.addEventListener("click",()=>{
         afficherPopup();
     });
 })  */



    const addProductFormContainer = document.getElementById('contentformProduct');
  /*   function afficherPopup(){
  
      addProductFormContainer?.classList.remove('hidden');
    } 

    document.getElementById("fermerProduct")?.addEventListener("click",()=>{
        addProductFormContainer?.classList.add('hidden')
      }); */


      const selectedLimites = document.getElementById("limiteCargaison") as HTMLSelectElement;


document.getElementById("limiteCargaison")?.addEventListener("change", function (event) {
  const divPoids = document.getElementById("divPoids") as HTMLDivElement ;
  const divColis = document.getElementById("divColis") as HTMLDivElement;
console.log(divColis,divPoids);

  if (selectedLimites) {
    if (selectedLimites.value === 'poids') {
      if (divPoids) {
        divPoids.style.display = "block";
      }
      if (divColis) {
        divColis.style.display = "none";
      }
    } else if (selectedLimites.value === 'colis') {
      if (divColis) {
        divColis.style.display = "block";
      }
      if (divPoids) {
        divPoids.style.display = "none";
      }
    } else {
      if (divPoids) {
        divPoids.style.display = "none";
      }
      if (divColis) {
        divColis.style.display = "none";
      }
    }
  }
});


// Fonction pour afficher les cargaisons
 function afficherCargaisons(): void {
  fetch('../data.json')
    .then(response => response.json())
    .then(data => {
      const cargaisons: Cargaison[] = data.cargaisons;
      const cargaisonList = document.getElementById('bodyCargaison');
      if (!cargaisonList) return;
      cargaisonList.innerHTML = '';
      cargaisons.forEach(cargaison => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="px-6 py-4 ">${cargaison.numero}</td>
          <td class="px-6 py-4 ">${cargaison.type}</td>
          <td class="px-6 py-4 ">${cargaison.pointDepart}</td>
          <td class="px-6 py-4 ">${cargaison.pointArrive}</td>
          <td class="px-6 py-4 ">${cargaison.poidsMax}</td>
          <td class="px-6 py-4 ">${cargaison.distance}</td>
          <td class="px-6 py-4 "><button class="bg-blue-500 text-white px-6 py-4 rounded btn-view" type="button" data-id="${cargaison.numero}">Details</button></td>
        `;
        cargaisonList.appendChild(row);
      }); 

      // Ajouter des événements aux boutons "voir"
       document.querySelectorAll('.btn-view').forEach(button => {
        button.addEventListener('click', (event) => {
          const target = event.target as HTMLElement;
          const cargaisonId = target.getAttribute('data-id');
          afficherDetailsCargaison(cargaisonId);
        });
      });
    })
    /* .catch(error => console.error('Erreur:', error)); */
} 

// Fonction pour afficher les détails d'une cargaison (vide pour le moment)
 function afficherDetailsCargaison(cargaisonId: string | null): void {
  console.log('Afficher les détails pour la cargaison:', cargaisonId);
}



    
document.getElementById('addCargoForm')?.addEventListener('submit', (event) => {
  event.preventDefault();

  const typeCargaison = (document.getElementById('type') as HTMLSelectElement).value;
  const distance = parseFloat((document.getElementById('distance') as HTMLInputElement).value);
  const numero = "CRG" + Math.floor(Math.random() * 1000);  // Générer un numéro aléatoire pour la cargaison
  const poidsCargaison = parseFloat((document.getElementById('poidsCargaison') as HTMLInputElement).value);
  const pointDepart = (document.getElementById('pointDepart') as HTMLInputElement).value;
  const pointArrive = (document.getElementById('pointArrive') as HTMLInputElement).value;

  const cargaison = new Cargaison(
    'addCargaison',
    numero,
    poidsCargaison,
    pointDepart,
    pointArrive,
    distance,
    typeCargaison,

  );

  console.log(cargaison);

  fetch('../api.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cargaison),
  })
  .then(response => response.json())
  .then(result => {
    console.log(result);
    if (result.status === 'success') {
      alert(result.message);
    } else {
      alert('Erreur lors de l\'ajout de la cargaison');
    }
  })
  .catch(error => {
    console.error('Erreur:', error);
  });
});

  
   
    
;

document.getElementById('valider')?.addEventListener('click', () => {
  afficherCargaisons();
});

 afficherCargaisons();  






