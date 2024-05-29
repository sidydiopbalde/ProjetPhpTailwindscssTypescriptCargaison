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
const libelleInput = document.getElementById('libelle');
const bodyProduit = document.getElementById('bodyProduit');
const bodyCargaison = document.getElementById('bodyCargaison');
const ajouterBtn = document.getElementById('ajouter');
const cargaisonsContainer = document.getElementById('cargaisonsContainer');
const addCargoForm = document.getElementById('addCargoForm');
const dateDepart = document.getElementById('dateDepart');
const dateArrivee = document.getElementById('dateArrive');
const statut = document.getElementById('statut');
const produits = [];
let selectedCargaison = Cargaison;
const cargaisons1 = {};
const cargaisonss = [];
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
const selectedLimites = document.getElementById("limiteCargaison");
document.getElementById("limiteCargaison")?.addEventListener("change", function (event) {
    const divPoids = document.getElementById("divPoids");
    const divColis = document.getElementById("divColis");
    console.log(divColis, divPoids);
    if (selectedLimites) {
        if (selectedLimites.value === 'poids') {
            if (divPoids) {
                divPoids.style.display = "block";
            }
            if (divColis) {
                divColis.style.display = "none";
            }
        }
        else if (selectedLimites.value === 'colis') {
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
function filtrerCargaison(filtre) {
    fetch('../api.php')
        .then(response => response.json())
        .then(data => {
        let cargaisons = data.cargaisons;
        // ==============Filtrer les cargaisons selon les critères fournis
        if (filtre) {
            if (filtre.numero) {
                cargaisons = cargaisons.filter(cargaison => cargaison.numero.includes(filtre.numero));
            }
            if (filtre.pointDepart) {
                cargaisons = cargaisons.filter(cargaison => cargaison.pointDepart.includes(filtre.pointDepart));
            }
            if (filtre.type) {
                cargaisons = cargaisons.filter(cargaison => cargaison.type.includes(filtre.type));
            }
            if (filtre.dateDepart) {
                cargaisons = cargaisons.filter(cargaison => cargaison.dateDepart.includes(filtre.dateDepart));
            }
            if (filtre.dateArrive) {
                cargaisons = cargaisons.filter(cargaison => cargaison.dateArrive.includes(filtre.dateArrive));
            }
            if (filtre.pointArrive) {
                cargaisons = cargaisons.filter(cargaison => cargaison.pointArrive.includes(filtre.pointArrive));
            }
            if (filtre.numero && filtre.pointDepart && filtre.type && filtre.dateDepart && filtre.dateArrive && filtre.pointArrive) {
                cargaisons = cargaisons.filter(cargaison => (cargaison.numero.includes(filtre.numero)
                    || cargaison.pointDepart.includes(filtre.pointDepart) || cargaison.type.includes(filtre.type)
                    || cargaison.dateDepart.includes(filtre.dateDepart) || cargaison.dateArrive.includes(filtre.dateArrive)
                    || cargaison.pointArrive.includes(filtre.pointArrive)));
            }
        }
        afficherCargaisons(cargaisons, page = 1);
    });
}
document.getElementById('filterBtn')?.addEventListener('click', () => {
    const filtre = {
        numero: document.getElementById('filterNumero').value,
        pointDepart: document.getElementById('filterPointDepart').value,
        type: document.getElementById('filterType').value,
        pointArrive: document.getElementById('filterPointArrive').value,
        dateDepart: document.getElementById('filterdateDepart').value,
        dateArrive: document.getElementById('filterdateArrive').value,
    };
    filtrerCargaison(filtre);
});
/* ====================>Click du  button filter<====================== */
// Fonction pour afficher les détails d'une cargaison (vide pour le moment)
function afficherDetailsCargaison(cargaisonId) {
    console.log('Afficher les détails pour la cargaison:', cargaisonId);
}
//=============== Fonction pour afficher un message d'erreur============================
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
    }
}
/* =====================fonction pour obtenir la date du jour====================== */
function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
let produit;
/* =========================Evenement de soumission ============================== */
document.getElementById('addCargoForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const errorElements = document.querySelectorAll('.text-red-500');
    errorElements.forEach(el => el.textContent = '');
    const typeCargaison = document.getElementById('type').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const numero = "SDB" + Math.floor(Math.random() * 1000); // Générer un numéro aléatoire pour la cargaison
    const poidsCargaison = parseFloat(document.getElementById('poidsCargaison').value);
    const pointDepart = document.getElementById('pointDepart').value;
    const pointArrive = document.getElementById('pointArrive').value;
    const dateDepart = document.getElementById('dateDepart').value;
    const dateArrive = document.getElementById('dateArrive').value;
    let valid = true;
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
    else {
        showError('type', "");
        valid = true;
    }
    if (!distance) {
        showError('distance', 'Distance est requise');
        valid = false;
    }
    else if (!distance) {
        showError('distance', "");
        valid = false;
    }
    if (!dateDepart) {
        showError('dateDepart', 'Date de départ est requise');
        valid = false;
    }
    else if (dateDepart < getCurrentDate()) {
        showError('dateDepart', 'la date doit etre min égale à la date actuelle');
        valid = false;
    }
    else if (dateDepart > dateArrive) {
        showError('dateDepart', 'la date doit etre inférieure  à la date d\'arivée');
        valid = false;
    }
    else {
        showError('dateDepart', "");
    }
    if (!dateArrive) {
        showError('dateArrive', 'Date d\'arrivée est requise');
        valid = false;
    }
    else if (dateArrive < getCurrentDate()) {
        showError('dateArrive', 'la date doit etre min égale à la date actuelle');
        valid = false;
    }
    else if (dateArrive < dateDepart) {
        showError('dateArrive', 'la date doit etre supérieure  à la date de départ');
        valid = false;
    }
    else {
        showError('dateArrive', "");
    }
    if (!pointDepart) {
        showError('pointDepart', 'Lieu de départ est requis');
        valid = false;
    }
    else {
        showError('pointDepart', "");
    }
    if (!pointArrive) {
        showError('pointArrive', 'Lieu d\'arrivée est requis');
        valid = false;
    }
    else {
        showError('pointArrive', "");
    }
    if (!poidsCargaison) {
        showError('poidsCargaison', 'poids est requis');
        valid = false;
    }
    else if (poidsCargaison <= 0) {
    }
    else {
        showError('poidsCargaison', '');
    }
    if (valid) {
        const cargaison = new Cargaison('addCargaison', numero, poidsCargaison, pointDepart, pointArrive, dateDepart, dateArrive, distance, typeCargaison, "ouvert", "en attente", produit);
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
                document.getElementById('addCargoForm').reset();
            }
            else {
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
const cargaisonsParPage = 3; // Définir le nombre de cargaisons par page
function afficherCargaisons(cargaisons, page = 1) {
    const cargaisonList = document.getElementById('bodyCargaison');
    if (!cargaisonList)
        return;
    cargaisonList.innerHTML = '';
    // Calculer l'index de début et de fin pour la page actuelle
    const debutIndex = (page - 1) * cargaisonsParPage;
    const finIndex = debutIndex + cargaisonsParPage;
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
          <td class="px-6 py-4 ">${cargaison.distance}</td>
          <td class="px-6 py-4 text-blue-500">${cargaison.etatGlobal}</td>
          <td class="px-6 py-4 ">${cargaison.etatAvancement}</td>
          <td class="px-6 py-4  btn-view" data-id="${cargaison.numero}> <i class="fas fa-plus"    style="font-size:48px;color:blue;">+</i></td>
          <td class="px-6 py-4 "><button class=" text-blue-500 px-6 py-4 rounded  btn-details " type="button" data-id="${cargaison.numero}">Details</button></td>
        `;
        row.className = `hover-scale transition transform duration-300 bg-blue-100 hover:bg-blue-200 cursor-pointer`;
        cargaisonList.appendChild(row);
        // Ajouter des événements aux boutons "voir"
        document.querySelectorAll('.btn-view').forEach(button => {
            console.log(document.querySelectorAll('.btn-view'));
            button.addEventListener('click', (event) => {
                console.log(button);
                const target = event.target;
                const cargaisonId = target.getAttribute('data-id');
                console.log(cargaisonId);
                /* afficherDetailsCargaison(cargaisonId); */
                ouvrirModal();
            });
        });
    });
    const pagination = document.getElementById('pagination');
    if (!pagination)
        return;
    pagination.innerHTML = '';
    const totalPages = Math.ceil(cargaisons.length / cargaisonsParPage);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i.toString();
        //  button.className = i === page ? 'active' : ''; 
        // button.className =  `py-1 px-3 bg-gray-300 rounded ${i === page ? 'active' : ''}`; 
        const randomIndex = Math.floor(Math.random() * buttonClasses.length);
        button.className = `${buttonClasses[randomIndex]} ${i === page ? 'active' : ''}`;
        button.addEventListener('click', () => afficherCargaisons(cargaisons, i));
        pagination.appendChild(button);
    }
}
/* =================modal ajout produit============================= */
const modal = document.getElementById('mymodal1');
console.log(modal);
function ouvrirModal() {
    const modal = document.getElementById('mymodal1');
    if (modal) {
        modal.showModal();
    }
}
/* =========>tableau de class tailwinds des buttons pgt=============== */
const buttonClasses = [
    'py-1 px-3 bg-gray-300 rounded',
    'py-1 px-3 bg-blue-500 text-white rounded',
    'py-1 px-3 bg-blue-300 rounded',
];
/* ==============================================FETCH===================================== */
async function fetchCargaisons() {
    try {
        const response = await fetch('../api.php');
        const data = await response.json();
        return data.cargaisons;
    }
    catch (error) {
        console.error('Erreur:', error);
        return [];
    }
}
let page;
// Utilisation de la fonction fetchCargaisons
function displaydata() {
    fetchCargaisons().then(cargaisons => {
        afficherCargaisons(cargaisons, page = 1);
    });
}
displaydata();
