/*==================Instanciation================== */
import { Aerienne } from "./Model/Aerienne.js";
import { Maritime } from "./Model/Maritime.js";
import { Terrestre } from "./Model/Terrestre.js";
/* import { Produit } from "./Model/Produit.js"; */

import { Cargaison, client } from "./Model/Cargaison.js";
import { Produit } from "./Model/Cargaison.js";

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





console.log("bonjour Sidy : Que puis je faire pour vous?");

const libelleInput = document.getElementById('libelle') as HTMLInputElement;

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





const addProductFormContainer = document.getElementById('contentformProduct');

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




/* ================>Fonction pour filtre<================================ */
 

 function filtrerCargaison(filtre?:{ numero?: string; pointDepart?: string; type?: string; pointArrive?: string; dateDepart?:string; dateArrive?:string }): void {
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

     
      afficherCargaisons(cargaisons,page=1)
    
     
    })
  }  

  document.getElementById('filterBtn')?.addEventListener('click', () => {

    const filtre = {
      numero: (document.getElementById('filterNumero') as HTMLInputElement).value,
      pointDepart: (document.getElementById('filterPointDepart') as HTMLInputElement).value,
      type: (document.getElementById('filterType') as HTMLInputElement).value,
      pointArrive: (document.getElementById('filterPointArrive') as HTMLInputElement).value,
      dateDepart:(document.getElementById('filterdateDepart') as HTMLInputElement).value,
      dateArrive:(document.getElementById('filterdateArrive') as HTMLInputElement).value,
    };

    filtrerCargaison(filtre);
  });
  



/* ====================>Click du  button filter<====================== */




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
  const selectedLimite = (document.getElementById("limiteCargaison") as HTMLSelectElement).value;
  let valid:boolean = true;
  
  /*   const errorElements = document.querySelectorAll('.text-red-500');
  errorElements.forEach(el => el.textContent = '');
  */
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
  }else{
    showError('type',"")
    valid=true;
  }
  
  if (!distance) {
    showError('distance', 'Distance est requise');
    valid = false;
  }else if (!distance) {
    showError('distance', "");
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
  }else{
    showError('dateDepart', "");
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
  }else{
    showError('dateArrive',"");
  }
  
  if (!pointDepart) {
    showError('pointDepart', 'Lieu de départ est requis');
    valid = false;
  }else{
    showError('pointDepart',"")
  }

  if (!pointArrive) {
    showError('pointArrive', 'Lieu d\'arrivée est requis');
    valid = false;
  }else{
    showError('pointArrive',"")
  }
  
  if (!poidsCargaison) {
    showError('poidsCargaison', 'poids est requis');
    valid = false;
  }else if(poidsCargaison <= 0){
    
  }else{
    showError('poidsCargaison','')
  }

  let limit:string ='';
  if(selectedLimite === 'poids'){
    limit='poids'
  }else if(selectedLimite=== 'colis')
  {
    limit= 'colis'
  }
if(valid){

  const cargaison = new Cargaison(
    'addCargaison',
    numero,
    limit,
    poidsCargaison,
    poidsCargaison,
    pointDepart,
    pointArrive,
    dateDepart,
    dateArrive,
    distance,
    typeCargaison,
    "ouvert",
    "en attente",
    []
    
  );
  
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
   displaydata();

});



/* ========================fonction de pagination==================== */
var idCargarg:string | null;
var idDetails:string | null;
const cargaisonsParPage = 7; // Définir le nombre de cargaisons par page

function afficherCargaisons(cargaisons:Cargaison[],page = 1): void {
 
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
        <td class="px-4 py-2 ">${cargaison.numero}</td>
        <td class="px-6 py-2 ">${cargaison.type}</td>
        <td class="px-6 py-2 ">${cargaison.dateDepart}</td>
        <td class="px-6 py-2 ">${cargaison.dateArrive}</td>
          <td class="px-6 py-2 ">${cargaison.pointDepart}</td>
          <td class="px-6 py-2 ">${cargaison.pointArrive}</td>
          <td class="px-6 py-2 ">${cargaison.distance}</td>
          <td class="px-6 py-2 text-blue-500" id="etat-${cargaison.numero}">${cargaison.etatGlobal}</td>

          <td class="px-6 py-4" data-id="${cargaison.numero}">

          <select class="btn-avancement" data-id="${cargaison.numero}">
          <option value="en attente" ${cargaison.etatAvancement === 'en attente' ? 'selected' : ''}>en attente</option>
          <option value="en cours" ${cargaison.etatAvancement === 'en cours' ? 'selected' : ''}>en cours</option>
          <option value="arrivé" ${cargaison.etatAvancement === 'arrivé' ? 'selected' : ''}>arrivé</option>
          <option value="perdue" ${cargaison.etatAvancement === 'perdue' ? 'selected' : ''}>perdue</option>
        </select>

          </td>
          <td class="px-6 py-2"><button class="text-red-500 px-6 py-4 rounded toggle-state" style="font-size:30px;color:red;" data-id="${cargaison.numero}" data-state="${cargaison.etatGlobal}">${cargaison.etatGlobal === 'ouvert' ? 'Close' : 'Open'}</button></td>
          <td class="px-6 py-2  btn-view" data-id='${cargaison.numero}'> <i class="fas fa-plus"    style="font-size:48px;color:blue;">+</i></td>
          <td class="px-6 py-2"><button class=" text-blue-500 px-6 py-4 rounded btn-details" type="button" data-id="${cargaison.numero}" ><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2854C5"><path d="M453-280h60v-240h-60v240Zm26.98-314q14.02 0 23.52-9.2T513-626q0-14.45-9.48-24.22-9.48-9.78-23.5-9.78t-23.52 9.78Q447-640.45 447-626q0 13.6 9.48 22.8 9.48 9.2 23.5 9.2Zm.29 514q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg></button></td>
          `;
        /*   row.className=`hover-scale transition transform duration-300 bg-blue-100 hover:bg-blue-200 cursor-pointer`; */
        row.className=`  bg-blue-100 hover:bg-blue-200 cursor-pointer`;
          cargaisonList.appendChild(row);
          
          // boutton ++++
          document.querySelectorAll('.btn-view').forEach(button => {
        button.addEventListener('click', (event) => {
          const target = event.target as HTMLElement;
            const parenttarget=target.parentNode as HTMLElement
              idCargarg= parenttarget!.getAttribute('data-id');
              console.log(idCargarg);
              ouvrirModal();
            });
          }); 

          //button details
          document.querySelectorAll('.btn-details').forEach(button =>{
            button.addEventListener('click',(event)=>{
              const target = event.target as HTMLElement;
              const parenttarget=target.parentNode as HTMLElement
              console.log(target,parenttarget);
              
              idDetails= parenttarget!.getAttribute('data-id');
              console.log(parenttarget.getAttribute('data-id'));
            
            ouvrirModalDetails();
            afficherDetailsCargaison(idDetails)
          })
      })
      //select etat avancement
      document.querySelectorAll('.btn-avancement').forEach(select =>{
        select.addEventListener('change',(event)=>{

          const target=event.target as HTMLSelectElement;
          const id=target.getAttribute('data-id');
          const etat=target.value;
          console.log(target.getAttribute('data-id'),target.value);
          changer_etat_avancement_cargo(id,etat);
          
        })
      })
    })

   //pagination
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    pagination.innerHTML = '';
    
    const totalPages = Math.ceil(cargaisons.length / cargaisonsParPage);
    
    
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.innerText = i.toString();
      const randomIndex = Math.floor(Math.random() * buttonClasses.length);
      button.className = `${buttonClasses[randomIndex]} ${i === page ? 'active' : ''}`;
      button.addEventListener('click', () => afficherCargaisons(cargaisons,i));
      pagination.appendChild(button);
    }                 
    
    document.querySelectorAll('.toggle-state').forEach(button => {
      button.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const idCargo = target.getAttribute('data-id');
        const etatCourant = target.getAttribute('data-state');
        console.log(idCargo,etatCourant);
        
        ChangerEtatCargo(idCargo, etatCourant);
      });
    })
    
    
    
  }
  
/* =================modal ajout produit============================= */



function ouvrirModal(): void {
  
  const modal = document.getElementById('mymodal1') as HTMLDialogElement;
  if (modal) {
    
    modal.showModal();
  }
}
function ouvrirModalDetails(): void {
  
  const modal = document.getElementById('mymodal2') as HTMLDialogElement;
  if (modal) {
    
    modal.showModal();
  }
}

/* =========>tableau de class tailwinds des buttons pgt=============== */
const buttonClasses = [
  'py-1 px-3 bg-gray-300 rounded',
  'py-1 px-3 bg-blue-500 text-white rounded',
  'py-1 px-3 bg-blue-300 rounded'
];

/* ==============================================FETCH===================================== */

async function fetchCargaisons(): Promise<Cargaison[]> {
  try {
    const response = await fetch('../api.php');
    const data = await response.json();
    return data.cargaisons;
  } catch (error) {
    console.error('Erreur:', error);
    return [];
  }
}



let page;
// ========================Utilisation de la fonction fetchCargaisons

function displaydata() {
  fetchCargaisons().then(cargaisons => {
    
    afficherCargaisons(cargaisons,page=1)
  });
}

displaydata();

/* ============fetchProduit=================== */

async function fetchProduit() {
  try {
    const response = await fetch('../api.php');
    const data = await response.json();
    // Extraction de tous les produits des cargaisons
 
    const produits = data.cargaisons.map((cargaison: { produit: any; }) => cargaison.produit).flat();
    
    return produits;
  } catch (error) {
    console.error('Erreur:', error);
    return [];
  }
}

/* =================toxicity input display================ */
const SelectProTypre= document.getElementById('productType') as HTMLSelectElement

SelectProTypre?.addEventListener('change',()=>{
  console.log(SelectProTypre.value);
  if(SelectProTypre.value == "chimique"){
    console.log(SelectProTypre.value);
    
    document.getElementById('toxicDiv')!.style.display= "block"
  }else{
    document.getElementById('toxicDiv')!.style.display= "none"
  }
})

/* ==========recuperation et fetchage du produit========================== */


const formProduct=document.getElementById('addProductForm');

formProduct?.addEventListener('submit',function(event){
  const addProduct=document.getElementById('addProduct');
  const productPoids:number =  parseFloat((document.getElementById('productWeight') as HTMLInputElement).value);
  
  const productType = (document.getElementById('productType') as HTMLSelectElement).value; 
  const codeProduit: string = "SDBPRO" + Math.floor(Math.random() * 1000);
  const frais:number =parseFloat((document.getElementById('fraisProduit') as HTMLInputElement).value);
  const clientFirstName = (document.getElementById('clientFirstName') as HTMLInputElement).value;
  const clientLastName = (document.getElementById('clientLastName') as HTMLInputElement).value;
  const clientPhone = parseFloat((document.getElementById('clientPhone') as HTMLInputElement).value);
  const clientAdress = (document.getElementById('clientAddress') as HTMLInputElement).value;
  const clientMail = (document.getElementById('clientMail') as HTMLInputElement).value;
  
  
  const nomDestin = (document.getElementById('nomDestin') as HTMLInputElement).value;
  const prenomDestin = (document.getElementById('prenomDestin') as HTMLInputElement).value;
  const addressDestin = (document.getElementById('addressDestin') as HTMLInputElement).value;
  const mailDestin = (document.getElementById('emailDestin') as HTMLInputElement).value;
  const phoneDestin = parseFloat((document.getElementById('phoneDestin') as HTMLInputElement).value);
  
  const productName = (document.getElementById('nomProduit') as HTMLInputElement).value;
  event?.preventDefault();

  let valid : boolean = true;
let cl:client={clientFirstName:clientFirstName,clientLastName:clientFirstName,clientPhone:clientPhone,clientAdress:clientAdress};
 

 const produit = new Produit(
   'ajoutProduit',
      codeProduit,
      productPoids,
      productName,
      productType,
      cl,
      clientFirstName,
      clientLastName,
      clientPhone,
      clientMail,
      clientAdress,
      nomDestin,
      prenomDestin,
      addressDestin,
      mailDestin,
      phoneDestin,
      frais,
      'disponible'
)
    let sommepoids:number=0;

    fetch('../api.php')
    .then(response => response.json())
    .then(data => {

      const cargaisons: Cargaison[] = data.cargaisons;

     /*  cargaisons.forEach(cargaison => { */
        for( const cargaison of cargaisons){

        if(cargaison.numero === idCargarg){
          cargaison.produit.forEach((produit:Produit)=>{
            sommepoids += produit.poids
          })

          console.log("Somme des poids est :", sommepoids);
          if(cargaison.poidsMax <= sommepoids){

            valid=false;
            alert('la cargaison est pleine')
            return;
          }

        if(cargaison.type === 'maritime' && productType === 'fragile'){

          valid=false;
          alert ("ce type de produit ne peut etre transporter par cette cargaison");

        }else if(cargaison.type === 'aerienne' && productType === "chimique" ){
          valid=false;
          alert ("ce type de produit ne peut etre transporter par cette cargaison");
          
        }else if(cargaison.type === 'terrestre' && productType === "chimique" ){
          valid=false;
          alert ("ce type de produit ne peut etre transporter par cette cargaison")
        }       
      }
      break
    }
  }) 
  
  
  if(valid){
      const objectProduct = {
          "produit":produit,
          "action":"ajoutProduit",
          "numero":idCargarg
        } 
      
      fetcher(objectProduct);
      (document.getElementById('addProductForm') as HTMLFormElement).reset();
    }
    
  })

  
  

  /*============================ fonction pour fetcher============ */
  function fetcher(object:any){
    fetch('../api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })
    .then(response => response.json())
    .then(result => {
    
      if (result.status === 'success') {
        /* alert(result.message); */
        /* showAlert(result.message); */
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
      }else if(result.status === 'error'){

       /*  showAlert(result.message); */
       Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      }
        else {
        showAlert('Erreur ');
      }
    })
    .catch(error => {
      console.error('Erreur:', error);
    });
}

/*======================= changement de l'etat d'une cargaison================ */


function ChangerEtatCargo(idcargo: string | null, currentState: string | null): void {
  if (!idcargo || !currentState) return;
  
  const newState = currentState === 'ouvert' ? 'fermé' : 'ouvert';
  fetch('../api.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'changerEtatCargo',
      idcargo: idcargo,
      newState: newState,
    }),
  })
  .then(response => response.json())
  .then(result => {
    if (result.status === 'success') {

      const etatElement = document.getElementById(`etat-${idcargo}`);
      if (etatElement) etatElement.textContent = newState;
      /* showAlert(result.message) */

      Swal.fire({
        title: result.message,
        text: "l'etat est bien enregistre!",
        icon: "success",
        showConfirmButton: false,
        timer: 3000
      });
      const toggleButton = document.querySelector(`.toggle-state[data-id="${idcargo}"]`) as HTMLElement;
      if (toggleButton) {
        toggleButton.textContent = newState === 'ouvert' ? 'Close' : 'Open';
        toggleButton.setAttribute('data-state', newState);
      }
      
      
    }else if(result.status=== 'error'){
     /*  showAlert(result.message) */
     Swal.fire({
      title: result.message,
      text: "Echec d'enregistrement",
      icon: "error",
      showConfirmButton: false,
        timer: 3000
    });
    }
     else {
      showAlert('Erreur lors de la mise à jour de l\'état de la cargaison');
    }
  })
  .catch(error => console.error('Erreur:', error));
}

/* ==================fonction pour ajouter des produits============ */

function afficherProduit(produit:Produit[],page = 1,tbodyElement?:HTMLElement,idCargo?:string): void {
 

  tbodyElement!.innerHTML = '';
  
  const debutIndex:number = (page - 1) * cargaisonsParPage;
  const finIndex:number = debutIndex + cargaisonsParPage;
  
  const cargaisonsPage = produit.slice(debutIndex, finIndex);

  cargaisonsPage.forEach(produit => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td class="px-4 py-4 ">${produit.numero}</td>
    <td class="px-6 py-4 ">${produit.typeProduit}</td>
    <td class="px-6 py-4">
    <select class="btn-etatProduit" data-id="${produit.numero}">
    <option value="disponible" ${produit.etat === 'disponible' ? 'selected' : ''}>disponible</option>
    <option value="perdu" ${produit.etat === 'perdu' ? 'selected' : ''}>perdu</option>
    <option value="archivé" ${produit.etat === 'archivé' ? 'selected' : ''}>archivé</option>
   </select>
    </td>
    <td class="px-6 py-4 ">${produit.frais}</td>
    <td class="px-6 py-4 ">${produit.poids}</td>
    <td class="px-6 py-4 ">${produit.clientFirstName}</td>
    <td class="px-6 py-4 ">${produit.clientLastName}</td>
    <td class="px-6 py-4 ">${produit.nomDestin}</td>
    <td class="px-6 py-4 ">${produit.prenomDestin}</td>
    <td class="px-6 py-4  btn-trash" data-id='${produit.numero}'> <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" data-id='${produit.numero}' fill="#EA3323"><path data-id='${produit.numero}' d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg></td>
    `;
   /*  row.className=`hover-scale transition transform duration-300 bg-blue-100 hover:bg-blue-200 cursor-pointer`; */
    tbodyElement!.appendChild(row);
    
    document.querySelectorAll('.btn-etatProduit').forEach(btn=>{
      btn.addEventListener('change',function(event){
        const target=event.target as HTMLSelectElement;
        const state=target.value;
        console.log(target.getAttribute('data-id'),state);
        changer_etat_produit(idCargo, produit.numero,state)
      })
    })
    
  })
  
const pagination = document.getElementById('pagination');
if (!pagination) return;
pagination.innerHTML = '';

const totalPages = Math.ceil(produit.length / cargaisonsParPage);


for (let i = 1; i <= totalPages; i++) {
  const button = document.createElement('button');
  button.innerText = i.toString();
  const randomIndex = Math.floor(Math.random() * buttonClasses.length);
  button.className = `${buttonClasses[randomIndex]} ${i === page ? 'active' : ''}`;
  button.addEventListener('click', () => afficherProduit(produit,i,tbodyElement));
  pagination.appendChild(button);
}                 

 document.querySelectorAll('.btn-trash').forEach(button => {
  button.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const parentNode=target.parentNode as HTMLElement
    const idproduit = parentNode!.getAttribute('data-id');
  
    
    supprimerProduit(idCargo, idproduit);
    afficherDetailsCargaison(idCargo!)
  });
}) 



}

/* ============AFFICHAGE DES PRODUITS============== */
const bodyProduit:HTMLElement = document.getElementById('bodyProduit') as HTMLTableElement
function displayProduit() {
  fetchProduit().then(produits => {
    console.log(produits);
    afficherProduit(produits,page=1,bodyProduit!)
    
  });
}
displayProduit();

/* ===========Afficher details */
function afficherDetailsCargaison(cargaisonId: string | null): void {

 fetch('../api.php')
 .then(response => response.json())
 .then(data => {
   const cargaisons: Cargaison[] = data.cargaisons;
   let cargo:Cargaison | null=null;
   for (let i = 0; i < cargaisons.length; i++) {
    if (cargaisons[i].numero === cargaisonId) {
      cargo = cargaisons[i];
      break;
    }
  }
  const masseCargo:number= cargo!.poidsMax;
 let sommepoids:number=0;

  cargo?.produit.forEach((produit:Produit)=>{
    sommepoids += produit.poids
  })

  const masseProduit:number = sommepoids;
  const masseRestante = masseCargo - sommepoids;
  document.getElementById('masseRestante')!.textContent =masseRestante.toString();
  const bodyDetails = document.getElementById('bodyDetailsCargo');
  document.getElementById('codecargo')!.textContent= cargaisonId;
  document.getElementById('codecargo')!.style.color="red";
  document.getElementById('nombreProduit')!.textContent=cargo!.produit.length.toString() 


afficherProduit(cargo!.produit,page=1,bodyDetails!,cargo?.numero);
  })
}  
/* ================Supression de produit============================= */

function supprimerProduit(idcargo:string | undefined, codeProduit:string | null):void {
    fetcher({ action: 'supprimer-produit', idcargo: idcargo, codeProduit: codeProduit });
} 


/* ================>changer etat avancement<====================== */

function changer_etat_avancement_cargo(cargaisonId:string | null , etat:string | null){
  fetcher({action: 'changer_etat_avancement', idcargo: cargaisonId, newState: etat, })
}


/* ====================================changer etat produit========================== */
 function changer_etat_produit(idcargo:string | undefined, codeProduit:string | null,etat:string):void{
console.log(idcargo,codeProduit,etat)

fetcher({action:'changerEtatProduit', id:idcargo, newetatProd:etat,codePro:codeProduit}) 
} 


function showAlert(messag:string): void {
  const modal = document.getElementById('alertModal');
  const showAlert= document.getElementById('showalert')!.textContent=messag;
  if (modal) {
      modal.style.display="block";
      setTimeout(() => {
          modal.style.display="none";
      }, 3000); // Hide after 3 seconds
  }
}

document.getElementById("bts")?.addEventListener('click', ()=>{
  /* showAlert() */
})