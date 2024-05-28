/*==================Instanciation================== */
import { Aerienne } from "./Model/Aerienne.js";
import { Maritime } from "./Model/Maritime.js";
import { Terrestre } from "./Model/Terrestre.js";
import { Produit } from "./Model/Produit.js";

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
const bodyCargaison = document.getElementById('bodyCargaison') as HTMLTableElement;
const ajouterBtn = document.getElementById('ajouter') as HTMLButtonElement;
const cargaisonsContainer = document.getElementById('cargaisonsContainer') as HTMLDivElement;
const addCargoForm = document.getElementById('addCargoForm');
const dateDepart = document.getElementById('dateDepart') as HTMLInputElement;
const dateArrivee = document.getElementById('dateArrive') as HTMLInputElement;
const statut = document.getElementById('statut') as HTMLInputElement;
const produits: Produit[] = [];
let selectedCargaison = Cargaison;


interface CargaisonMap {
  [key: string]: Cargaison;
}

const cargaisons1: CargaisonMap = {};
const cargaisonss: Cargaison[] = [];

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
  const divPoids = document.getElementById("divPoids") as HTMLDivElement;
  const divColis = document.getElementById("divColis") as HTMLDivElement;
  console.log(divColis, divPoids);

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
    } 
  }
});


// ===============================Fonction pour afficher les cargaisons============================
/*  function afficherCargaisons(): void {
  fetch('../api.php')
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
/* }  */  



 /*  let cargaisons: Cargaison[] = data.cargaisons;) */
/* ================>Fonction pour filtre<================================ */
 function afficherCargaisons111(filtre?:{ numero?: string; pointDepart?: string; type?: string; pointArrive?: string; dateDepart?:string; dateArrive?:string }): void {
  fetch('../api.php')
    .then(response => response.json())
    .then(data => {
      let cargaisons: Cargaison[] = data.cargaisons;

      // ==============Filtrer les cargaisons selon les critères fournis
      if (filtre) {
         if (filtre.numero) {
          cargaisons = cargaisons.filter(cargaison => cargaison.numero.includes(filtre.numero!));
        }
        if (filtre.pointDepart) {
          cargaisons = cargaisons.filter(cargaison => cargaison.pointDepart.includes(filtre.pointDepart!));
        }
        if (filtre.type) {
          cargaisons = cargaisons.filter(cargaison => cargaison.type.includes(filtre.type!));
        }
        if (filtre.dateDepart) {
          cargaisons = cargaisons.filter(cargaison => cargaison.dateDepart.includes(filtre.dateDepart!));
        }
        if (filtre.dateArrive) {
          cargaisons = cargaisons.filter(cargaison => cargaison.dateArrive.includes(filtre.dateArrive!));
        } if (filtre.pointArrive) {
          cargaisons = cargaisons.filter(cargaison => cargaison.pointArrive.includes(filtre.pointArrive!));
        } 

        if(filtre.numero && filtre.pointDepart && filtre.type && filtre.dateDepart && filtre.dateArrive && filtre.pointArrive){

          cargaisons= cargaisons.filter(cargaison => (cargaison.numero.includes(filtre.numero!) 
          || cargaison.pointDepart.includes(filtre.pointDepart!) || cargaison.type.includes(filtre.type!) 
          || cargaison.dateDepart.includes(filtre.dateDepart!) || cargaison.dateArrive.includes(filtre.dateArrive!)
          || cargaison.pointArrive.includes(filtre.pointArrive!) ) );
        }
      }

      const cargaisonList = document.getElementById('bodyCargaison') as HTMLTableElement;
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
  
}  
/* ====================>Click du  button filter<====================== */
document.getElementById('filterBtn')?.addEventListener('click', () => {
  console.log("filtrer par ::::ALLL::::::::");
  
  const filtre = {
    numero: (document.getElementById('filterNumero') as HTMLInputElement).value,
    pointDepart: (document.getElementById('filterPointDepart') as HTMLInputElement).value,
    pointArrive: (document.getElementById('filterPointArrive') as HTMLInputElement).value,
    type: (document.getElementById('filterType') as HTMLInputElement).value,
    dateDepart:(document.getElementById('filterdateDepart') as HTMLInputElement).value,
    dateArrive:(document.getElementById('filterdateArrive') as HTMLInputElement).value,
  };
  afficherCargaisons111(filtre);
});

// Fonction pour afficher les détails d'une cargaison (vide pour le moment)
function afficherDetailsCargaison(cargaisonId: string | null): void {
  console.log('Afficher les détails pour la cargaison:', cargaisonId);
} 



 //=============== Fonction pour afficher un message d'erreur============================
 function showError(elementId: string, message: string) {
  const errorElement = document.getElementById(elementId + 'Error');
  if (errorElement) {
    errorElement.textContent = message;
  }
}

/* =====================fonction pour obtenir la date du jour====================== */
function getCurrentDate(): string {
  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

let produit:[];
/* =========================Evenement de soumission ============================== */
document.getElementById('addCargoForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
 const errorElements = document.querySelectorAll('.text-red-500');
  errorElements.forEach(el => el.textContent = ''); 

  const typeCargaison:string = (document.getElementById('type') as HTMLSelectElement).value;
  const distance:number = parseFloat((document.getElementById('distance') as HTMLInputElement).value);
  const numero:string = "SDB" + Math.floor(Math.random() * 1000);  // Générer un numéro aléatoire pour la cargaison
  const poidsCargaison:number = parseFloat((document.getElementById('poidsCargaison') as HTMLInputElement).value);
  const pointDepart:string = (document.getElementById('pointDepart') as HTMLInputElement).value;
  const pointArrive:string = (document.getElementById('pointArrive') as HTMLInputElement).value;
  const dateDepart:string = (document.getElementById('dateDepart') as HTMLInputElement).value;
  const dateArrive:string = (document.getElementById('dateArrive') as HTMLInputElement).value;

  let valid:boolean = true;

 

  // Valider chaque champ
  /*  if (!limiteCargaison) {
     showError('limiteCargaison', 'Type de limitation cargaison est requis');
     valid = false;
   } else if (limiteCargaison === 'poids' && !poidsCargaison) {
     showError('poidsCargaison', 'Poids de la cargaison est requis');
     valid = false;
   } else if (limiteCargaison === 'colis' && !nombredeColis) {
     showError('nombredeColis', 'Nombre de colis est requis');
     valid = false;
   } */

  if (!typeCargaison) {
    showError('type', 'Type de cargaison est requis');
    valid = false;
  }
  
  if (!distance) {
    showError('distance', 'Distance est requise');
    valid = false;
  }

  if (!dateDepart) {
    showError('dateDepart', 'Date de départ est requise');
    valid = false;
  }else if(dateDepart < getCurrentDate()){
    showError('dateDepart', 'la date doit etre min égale à la date actuelle');
    valid = false;
  }else if(dateDepart > dateArrive){
    showError('dateDepart', 'la date doit etre inférieure  à la date d\'arivée');
    valid = false;
  }

  if (!dateArrive) {
    showError('dateArrive', 'Date d\'arrivée est requise');
    valid = false;
  }else if(dateArrive < getCurrentDate()){
    showError('dateArrive', 'la date doit etre min égale à la date actuelle');
    valid = false;
  }else if(dateArrive < dateDepart){
    showError('dateArrive', 'la date doit etre supérieure  à la date de départ');
    valid = false;
  }
  
  if (!pointDepart) {
    showError('pointDepart', 'Lieu de départ est requis');
    valid = false;
  }
  if (!pointArrive) {
    showError('pointArrive', 'Lieu d\'arrivée est requis');
    valid = false;
  }
  if (!poidsCargaison) {
    showError('poidsCargaison', 'poids est requis');
    valid = false;
  }else if(poidsCargaison <= 0){

  }
if(valid){

  const cargaison = new Cargaison(
    'addCargaison',
    numero,
    poidsCargaison,
    pointDepart,
    pointArrive,
    dateDepart,
    dateArrive,
    distance,
    typeCargaison,
    "ouvert",
    "en attente",
    produit
  
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
        (document.getElementById('addCargoForm') as HTMLFormElement).reset();
      } else {
        alert('Erreur lors de l\'ajout de la cargaison');
      }
    })
    .catch(error => {
      console.error('Erreur:', error);
    });
}


});



/* ===============valider button===================== */
document.getElementById('addCargoForm')?.addEventListener('submit', () => {
  afficherCargaisons();

});

/* afficherCargaisons();  */


/* ========================fonction de pagination==================== */

const cargaisonsParPage = 7; // Définir le nombre de cargaisons par page
 
function afficherCargaisons(page = 1): void {
  fetch('../api.php')
    .then(response => response.json())
    .then(data => {
      const cargaisons: Cargaison[] = data.cargaisons;
      const cargaisonList = document.getElementById('bodyCargaison');
      if (!cargaisonList) return;
      cargaisonList.innerHTML = '';

      // Calculer l'index de début et de fin pour la page actuelle
      const debutIndex:number = (page - 1) * cargaisonsParPage;
      const finIndex:number = debutIndex + cargaisonsParPage;

      // Afficher les cargaisons pour la page actuelle
      const cargaisonsPage = cargaisons.slice(debutIndex, finIndex);
      cargaisonsPage.forEach(cargaison => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="px-4 py-4 ">${cargaison.numero}</td>
          <td class="px-6 py-4 ">${cargaison.type}</td>
          <td class="px-6 py-4 ">${cargaison.dateDepart}</td>
          <td class="px-6 py-4 ">${cargaison.dateArrive}</td>
          <td class="px-6 py-4 ">${cargaison.pointDepart}</td>
          <td class="px-6 py-4 ">${cargaison.pointArrive}</td>
          <td class="px-6 py-4 ">${cargaison.poidsMax}</td>
          <td class="px-6 py-4 ">${cargaison.distance}</td>
          <td class="px-6 py-4 text-blue-500">${cargaison.etatGlobal}</td>
          <td class="px-6 py-4 ">${cargaison.etatAvancement}</td>
          <td class="px-6 py-4 data-id="${cargaison.numero}"> <i class="fas fa-plus" onclick="ouvrirModal('${cargaison.numero}')"  style="font-size:48px;color:blue;">+</i></td>
          <td class="px-6 py-4 "><button class=" bg-blue-500 px-6 py-4 rounded btn-view" type="button" data-id="${cargaison.numero}">Details</button></td>
        `;
        row.className=`hover-scale transition transform duration-300 bg-blue-100 hover:bg-blue-200 cursor-pointer`;
        cargaisonList.appendChild(row);


        let cargaisonIdActuel: string | null = null;

function ouvrirModal(idcargo: string): void {
  cargaisonIdActuel = idcargo;
  const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
  if (modal) {
    modal.showModal();
  }
}
      });


      const modal = document.getElementById('my_modal_1') as HTMLDialogElement;

      console.log(modal);
      
      // Ajouter des événements aux boutons "voir"
     /*  document.querySelectorAll('.btn-view').forEach(button => {
        button.addEventListener('click', (event) => {
          const target = event.target as HTMLElement;
          const cargaisonId = target.getAttribute('data-id');
          afficherDetailsCargaison(cargaisonId);
        });
      }); */

      // Afficher la pagination
      afficherPagination(cargaisons.length, page);
    })
    .catch(error => console.error('Erreur:', error));
} 

/* =========>tableau de class tailwinds des buttons pgt=============== */
const buttonClasses = [
  'py-1 px-3 bg-gray-300 rounded',
  'py-1 px-3 bg-blue-500 text-white rounded',
  'py-1 px-3 bg-blue-300 rounded',
];

/* ===============>affichage des buttons de paginatiin=================== */
function afficherPagination(totalCargaisons: number, page: number): void {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  pagination.innerHTML = '';

  const totalPages = Math.ceil(totalCargaisons / cargaisonsParPage);


  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.innerText = i.toString();
   //  button.className = i === page ? 'active' : ''; 
  // button.className =  `py-1 px-3 bg-gray-300 rounded ${i === page ? 'active' : ''}`; 
  const randomIndex = Math.floor(Math.random() * buttonClasses.length);
  button.className = `${buttonClasses[randomIndex]} ${i === page ? 'active' : ''}`;
    button.addEventListener('click', () => afficherCargaisons(i));
    pagination.appendChild(button);
  }
} 


/* ============fonction pour filtrer=============================== */
/*function filterCargaisons(cargaisons: Cargaison[], filters: any): Cargaison[] {
  return cargaisons.filter(cargaison => {
    return (
      (!filters.numero || cargaison.numero.includes(filters.numero)) &&
      (!filters.pointDepart || cargaison.pointDepart.includes(filters.pointDepart)) &&
      (!filters.pointArrive || cargaison.pointArrive.includes(filters.pointArrive)) &&
      (!filters.type || cargaison.type.includes(filters.type))
    );
  });
}



 const pageSize = 5;  // Nombre d'éléments par page

function afficherCargaisons222(page: number = 1): void {
  fetch('../data.json')
    .then(response => response.json())
    .then(data => {
      const filters = {
        numero: (document.getElementById('filterNumero') as HTMLInputElement).value,
        pointDepart: (document.getElementById('filterPointDepart') as HTMLInputElement).value,
        pointArrive: (document.getElementById('filterPointArrive') as HTMLInputElement).value,
        type: (document.getElementById('filterType') as HTMLSelectElement).value
      };

      const cargaisons: Cargaison[] = filterCargaisons(data.cargaisons, filters);

      const paginatedCargaisons = cargaisons.slice((page - 1) * pageSize, page * pageSize);

      const cargaisonList = document.getElementById('bodyCargaison');
      if (!cargaisonList) return;
      cargaisonList.innerHTML = '';

      paginatedCargaisons.forEach(cargaison => {
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

      afficherPagination222(cargaisons.length, page);
    })
    .catch(error => console.error('Erreur:', error));

}

function afficherPagination222(totalItems: number, currentPage: number): void {
  const totalPages = Math.ceil(totalItems / pageSize);
  const paginationContainer = document.getElementById('pagination');
  if (!paginationContainer) return;
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.className = 'py-1 px-3 rounded ' + (i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300');
    button.innerText = i.toString();
    button.addEventListener('click', () => afficherCargaisons222(i));
    paginationContainer.appendChild(button);
  }
} */