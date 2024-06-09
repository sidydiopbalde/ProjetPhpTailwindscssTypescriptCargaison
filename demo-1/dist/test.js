import { Cargaison, Produit1, Alimentaire, Chimique, Fragile, Incassable } from "./Model/Cargaison.js";
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
const libelleInput = document.getElementById('libelle');
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
const addProductFormContainer = document.getElementById('contentformProduct');
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
//=============== Fonction pour afficher un message d'erreur============================
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId + 'Error');
    console.log(errorElement);
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
    const selectedLimite = document.getElementById("limiteCargaison").value;
    let valid = true;
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
    let limit = '';
    if (selectedLimite === 'poids') {
        limit = 'poids';
    }
    else if (selectedLimite === 'colis') {
        limit = 'colis';
    }
    if (valid) {
        const cargaison = new Cargaison('addCargaison', numero, limit, poidsCargaison, poidsCargaison, pointDepart, pointArrive, dateDepart, dateArrive, distance, typeCargaison, "ouvert", "en attente", []);
        fetch('../api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cargaison),
        })
            .then(response => response.json())
            .then(result => {
            if (result.status === 'success') {
                showAlert1(result.message, 'success');
                document.getElementById('addCargoForm').reset();
            }
            else {
                showAlert1('Erreur lors de l\'ajout de la cargaison', 'error');
            }
        })
            .catch(error => {
            console.error('Erreur:', error);
        });
    }
    displaydata();
});
//========================fonction de pagination==================== 
var idCargarg;
var idDetails;
const cargaisonsParPage = 5; // Définir le nombre de cargaisons par page
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
          <td class="px-4 py-2 ">${cargaison.numero}</td>
          <td class="px-4 py-2 ">${cargaison.type}</td>
          <td class="px-4 py-2 ">${cargaison.dateDepart}</td>
          <td class="px-6 py-2 ">${cargaison.dateArrive}</td>
          <td class="px-4 py-2 ">${cargaison.pointDepart}</td>
          <td class="px-4 py-2 ">${cargaison.pointArrive}</td>
          <td class="px-4 py-2 ">${cargaison.distance}</td>
          <td class="px-4 py-2 text-blue-500" id="etat-${cargaison.numero}">${cargaison.etatGlobal}</td>
          <td class="px-4 py-4" data-id="${cargaison.numero}">
          <select class="btn-avancement shadow-lg select-bordered" data-id="${cargaison.numero}">
          <option value="en attente" ${cargaison.etatAvancement === 'en attente' ? 'selected' : ''}>en attente</option>
          <option value="en cours" ${cargaison.etatAvancement === 'en cours' ? 'selected' : ''}>en cours</option>
          <option value="arrivé" ${cargaison.etatAvancement === 'arrivé' ? 'selected' : ''}>arrivé</option>
          <option value="perdue" ${cargaison.etatAvancement === 'perdue' ? 'selected' : ''}>perdue</option>
        </select>

          </td>
          <td class="px-4 py-2"><button class="text-red-500 px-6 py-4 rounded toggle-state" style="font-size:25px;color:red;" data-id="${cargaison.numero}" data-state="${cargaison.etatGlobal}">${cargaison.etatGlobal === 'ouvert' ? 'Close' : 'Open'}</button></td>
          <td class="px-4 py-2 btn-view ${cargaison.etatGlobal === 'fermé' ? 'none' : ''}" data-id='${cargaison.numero}'>
          <i class="fas fa-plus ${cargaison.etatGlobal === 'fermé' ? 'none' : ''}" style="font-size:30px;color:blue;">+</i>
      </td>
          <td class="px-4 py-2"><button class=" text-blue-500 px-6 py-4 rounded btn-details" type="button" data-id="${cargaison.numero}" ><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2854C5"><path d="M453-280h60v-240h-60v240Zm26.98-314q14.02 0 23.52-9.2T513-626q0-14.45-9.48-24.22-9.48-9.78-23.5-9.78t-23.52 9.78Q447-640.45 447-626q0 13.6 9.48 22.8 9.48 9.2 23.5 9.2Zm.29 514q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg></button></td>
          `;
        row.className = `hover-scale transition transform duration-300 bg-blue-100 hover:bg-blue-200 cursor-pointer`;
        row.className = `  bg-blue-100 hover:bg-blue-200 cursor-pointer`;
        cargaisonList.appendChild(row);
        if (cargaison.etatGlobal === 'fermé' || cargaison.etatAvancement === 'perdue'
            || cargaison.etatAvancement === 'arrivé' || cargaison.etatAvancement === 'en cours') {
            const plusButton = row.querySelector('.fas');
            plusButton.style.display = 'none';
        }
        // boutton ++++
        document.querySelectorAll('.btn-view').forEach(button => {
            button.addEventListener('click', (event) => {
                const target = event.target;
                const parenttarget = target.parentNode;
                idCargarg = parenttarget.getAttribute('data-id');
                ouvrirModal();
            });
        });
        //button details
        document.querySelectorAll('.btn-details').forEach(button => {
            button.addEventListener('click', (event) => {
                const target = event.target;
                const parenttarget = target.parentNode;
                idDetails = parenttarget.getAttribute('data-id');
                ouvrirModalDetails();
                afficherDetailsCargaison(idDetails);
            });
        });
        //select etat avancement
        document.querySelectorAll('.btn-avancement').forEach(select => {
            select.addEventListener('change', (event) => {
                const target = event.target;
                const id = target.getAttribute('data-id');
                const etat = target.value;
                console.log(target.getAttribute('data-id'), target.value);
                changer_etat_avancement_cargo(id, etat);
            });
        });
    });
    //pagination
    const pagination = document.getElementById('pagination');
    if (!pagination)
        return;
    pagination.innerHTML = '';
    const totalPages = Math.ceil(cargaisons.length / cargaisonsParPage);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i.toString();
        const randomIndex = Math.floor(Math.random() * buttonClasses.length);
        button.className = `${buttonClasses[randomIndex]} ${i === page ? 'active' : ''}`;
        button.addEventListener('click', () => afficherCargaisons(cargaisons, i));
        pagination.appendChild(button);
    }
    document.querySelectorAll('.toggle-state').forEach(button => {
        button.addEventListener('click', (event) => {
            const target = event.target;
            const idCargo = target.getAttribute('data-id');
            const etatCourant = target.getAttribute('data-state');
            console.log(idCargo, etatCourant);
            ChangerEtatCargo(idCargo, etatCourant);
        });
    });
}
/* =================modal ajout produit============================= */
/* document.getElementById('addProduct')?.addEventListener('click',function(){
  console.log("click");
  
  fermerModalAjout();
}) */
function ouvrirModal() {
    const modal = document.getElementById('mymodal1');
    if (modal) {
        modal.showModal();
    }
}
function ouvrirModalDetails() {
    const modal = document.getElementById('mymodal2');
    if (modal) {
        modal.showModal();
    }
}
function fermerModalDetatils() {
    const modal = document.getElementById('mymodal2');
    if (modal) {
        modal.classList.add('hidden');
    }
}
function fermerModalAjout() {
    const modal = document.getElementById('mymodal1');
    if (modal) {
        modal.style.display = "none";
    }
}
/* =========>tableau de class tailwinds des buttons pgt=============== */
const buttonClasses = [
    'py-1 px-3 bg-gray-300 rounded',
    'py-1 px-3 bg-blue-500 text-white rounded',
    'py-1 px-3 bg-blue-300 rounded'
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
// ========================Utilisation de la fonction fetchCargaisons
function displaydata() {
    fetchCargaisons().then(cargaisons => {
        afficherCargaisons(cargaisons, page = 1);
    });
}
displaydata();
/* ============fetchProduit=================== */
async function fetchProduit() {
    try {
        const response = await fetch('../api.php');
        const data = await response.json();
        // Extraction de tous les produits des cargaisons
        const produits = data.cargaisons.map((cargaison) => cargaison.produit).flat();
        return produits;
    }
    catch (error) {
        console.error('Erreur:', error);
        return [];
    }
}
/* =================toxicity input display================ */
const SelectProTypre = document.getElementById('productType');
SelectProTypre?.addEventListener('change', () => {
    console.log(SelectProTypre.value);
    if (SelectProTypre.value == "chimique") {
        console.log(SelectProTypre.value);
        document.getElementById('toxicDiv').style.display = "block";
    }
    else {
        document.getElementById('toxicDiv').style.display = "none";
    }
});
/* ==========recuperation et fetch du produit========================== */
/* function showError(elementId: string, message: string) {
  const errorElement = document.getElementById(elementId + 'Error');
  if (errorElement) {
    errorElement.textContent = message;
  }
} */
const formProduct = document.getElementById('addProductForm');
formProduct?.addEventListener('submit', function (event) {
    const addProduct = document.getElementById('addProduct');
    const productPoids = parseFloat(document.getElementById('productWeight').value);
    const productToxicity = parseFloat(document.getElementById('productToxicity').value);
    const productType = document.getElementById('productType').value;
    const codeProduit = "SDBPRO" + Math.floor(Math.random() * 1000);
    const clientFirstName = document.getElementById('clientFirstName').value;
    const clientLastName = document.getElementById('clientLastName').value;
    const clientPhone = parseFloat(document.getElementById('clientPhone').value);
    const clientAdress = document.getElementById('clientAddress').value;
    const clientMail = document.getElementById('clientMail').value;
    const frais1 = productPoids * 10000;
    const nomDestin = document.getElementById('nomDestin').value;
    const prenomDestin = document.getElementById('prenomDestin').value;
    const addressDestin = document.getElementById('addressDestin').value;
    const emailDestin = document.getElementById('emailDestin').value;
    const phoneDestin = parseFloat(document.getElementById('phoneDestin').value);
    const productName = document.getElementById('nomProduit').value;
    event?.preventDefault();
    let valid = true;
    const emetteur = { FirstName: clientFirstName, LastName: clientLastName, Phone: clientPhone, Adress: clientAdress, Mail: clientMail };
    const destinataire = { FirstName: nomDestin, LastName: prenomDestin, Phone: clientPhone, Adress: addressDestin, Mail: emailDestin };
    const prod = new Produit1(codeProduit, productPoids, productName, productType, frais1, 'disponible', emetteur, destinataire);
    let prod1;
    if (productType === 'alimentaire') {
        prod1 = new Alimentaire(codeProduit, productPoids, productName, productType, frais1, 'disponible', emetteur, destinataire);
    }
    if (productType === 'chimique') {
        prod1 = new Chimique(codeProduit, productPoids, productName, productType, frais1, 'disponible', emetteur, destinataire, productToxicity);
    }
    if (productType === 'incassable') {
        prod1 = new Incassable(codeProduit, productPoids, productName, productType, frais1, 'disponible', emetteur, destinataire);
    }
    if (productType === 'fragile') {
        prod1 = new Fragile(codeProduit, productPoids, productName, productType, frais1, 'disponible', emetteur, destinataire);
    }
    if (!productName) {
        showError('nomProduit', 'le champ ne doit pas etre vide');
        console.log("rama");
        valid = false;
    }
    if (!productType) {
        showError('productType', 'Type de produit est requis');
        valid = false;
    }
    else {
        showError('productType', "");
        valid = true;
    }
    if (!clientFirstName) {
        showError('clientFirstName', 'prenom client est requis');
        valid = false;
    }
    else {
        showError('clientFirstName', "");
        valid = true;
    }
    if (!clientLastName) {
        showError('clientLastName', 'prenom client est requis');
        valid = false;
    }
    else {
        showError('clientLastName', "");
        valid = true;
    }
    if (!clientPhone) {
        showError('clientPhone', 'prenom client est requis');
        valid = false;
    }
    else {
        showError('clientPhone', "");
        valid = true;
    }
    if (!clientAdress) {
        showError('clientAdress', 'prenom client est requis');
        valid = false;
    }
    else {
        showError('clientAdress', "");
        valid = true;
    }
    if (!clientMail) {
        showError('clientMail', 'prenom client est requis');
        valid = false;
    }
    else {
        showError('clientMail', "");
        valid = true;
    }
    if (!nomDestin) {
        showError('nomDestin', 'prenom client est requis');
        valid = false;
    }
    else {
        showError('nomDestin', "");
        valid = true;
    }
    if (!prenomDestin) {
        showError('prenomDestin', 'prenom client est requis');
        valid = false;
    }
    else {
        showError('prenomDestin', "");
        valid = true;
    }
    if (!addressDestin) {
        showError('addressDestin', 'prenom client est requis');
        valid = false;
    }
    else {
        showError('addressDestin', "");
        valid = true;
    }
    if (!prenomDestin) {
        showError('prenomDestin', 'prenom client est requis');
        valid = false;
    }
    else {
        showError('prenomDestin', "");
        valid = true;
    }
    if (!emailDestin) {
        showError('emailDestin', 'prenom client est requis');
        valid = false;
    }
    else {
        showError('emailDestin', "");
        valid = true;
    }
    if (!productPoids) {
        showError('productWeight', 'prenom client est requis');
        valid = false;
    }
    else {
        showError('productWeight', "");
        valid = true;
    }
    if (!phoneDestin) {
        showError('phoneDestin', 'prenom client est requis');
        valid = false;
    }
    else {
        showError('phoneDestin', "");
        valid = true;
    }
    let sommepoids = 0;
    fetch('../api.php')
        .then(response => response.json())
        .then(data => {
        const cargaisons = data.cargaisons;
        const msg = "ce type de produit ne peut etre transporter par cette cargaison";
        for (const cargaison of cargaisons) {
            if (cargaison.numero === idCargarg) {
                if (cargaison.type === 'maritime' && productType === 'fragile') {
                    valid = false;
                    showAlert1(msg, 'error');
                }
                else if (cargaison.type === 'aerienne' && productType === "chimique") {
                    valid = false;
                    showAlert1(msg, 'error');
                }
                else if (cargaison.type === 'terrestre' && productType === "chimique") {
                    valid = false;
                    showAlert1(msg, 'error');
                }
            }
            break;
        }
    });
    if (valid) {
        const objectProduct = {
            "produit": prod,
            "action": "ajoutProduit",
            "numero": idCargarg
        };
        fetcher(objectProduct);
        document.getElementById('addProductForm').reset();
    }
});
/*============================ fonction pour fetcher============ */
function fetcher(object) {
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
            showAlert1(result.message, 'success');
        }
        else if (result.status === 'error') {
            showAlert1(result.message, 'error');
        }
        else {
            showAlert1('Erreur ', 'error');
        }
    })
        .catch(error => {
        console.error('Erreur:', error);
    });
}
//fonction pour afficher Alert
function showAlert1(message, icone) {
    Swal.fire({
        title: "change",
        text: message,
        icon: icone,
        showConfirmButton: false,
        timer: 3000
    });
}
/*======================= changement de l'etat d'une cargaison================ */
function ChangerEtatCargo(idcargo, currentState) {
    if (!idcargo || !currentState)
        return;
    console.log(idcargo, currentState);
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
            if (etatElement)
                etatElement.textContent = newState;
            showAlert1(result.message, 'success');
            const toggleButton = document.querySelector(`.toggle-state[data-id="${idcargo}"]`);
            if (toggleButton) {
                toggleButton.textContent = newState === 'ouvert' ? 'Close' : 'Open';
                toggleButton.setAttribute('data-state', newState);
            }
        }
        else if (result.status === 'error') {
            showAlert1(result.message, 'error');
        }
        else {
            showAlert('Erreur lors de la mise à jour de l\'état de la cargaison');
        }
    })
        .catch(error => console.error('Erreur:', error));
}
/* ==================fonction pour ajouter des produits============ */
function afficherProduit(produit, page = 1, tbodyElement, idCargo) {
    tbodyElement.innerHTML = '';
    const debutIndex = (page - 1) * cargaisonsParPage;
    const finIndex = debutIndex + cargaisonsParPage;
    const cargaisonsPage = produit.slice(debutIndex, finIndex);
    produit.forEach(produit => {
        const row = document.createElement('tr');
        row.innerHTML = `
    <td class="px-3 py-4 ">${produit.numero}</td>
    <td class="px-3 py-4 ">${produit.typeProduit}</td>

    <td class="px-3 py-4">
    <select class="btn-etatProduit shadow-lg select-bordered" data-id="${produit.numero}">
    <option value="disponible" ${produit.etat === 'disponible' ? 'selected' : ''}>disponible</option>
    <option value="perdu" ${produit.etat === 'perdu' ? 'selected' : ''}>perdu</option>
    <option value="recuperée" ${produit.etat === 'recuperée' ? 'selected' : ''}>recuperée</option>
    <option value="archivé" ${produit.etat === 'archivé' ? 'selected' : ''}>archivé</option>
   </select>
    </td>
    <td class="px-3 py-4 ">${produit.frais}</td>
   
    <td class="px-3 py-4 ">${produit.poids}</td>
    <td class="px-3 py-4 ">${produit.emeteur.FirstName}</td>
    <td class="px-3 py-4 ">${produit.emeteur.LastName}</td>
    <td class="px-3 py-4 ">${produit.destinataire.FirstName}</td>
    <td class="px-3 py-4 ">${produit.destinataire.LastName}</td>
    <td class="px-3 py-4  btn-trash" data-id='${produit.numero}'> <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" data-id='${produit.numero}' fill="#EA3323"><path data-id='${produit.numero}' d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg></td>
    `;
        row.className = `hover-scale transition transform duration-300 bg-blue-100 hover:bg-blue-200 cursor-pointer`;
        tbodyElement.appendChild(row);
        document.querySelectorAll('.btn-etatProduit').forEach(btn => {
            btn.addEventListener('change', function (event) {
                const target = event.target;
                const state = target.value;
                changer_etat_produit(idCargo, produit.numero, state);
            });
        });
    });
    const pagination = document.getElementById('pagination');
    if (!pagination)
        return;
    pagination.innerHTML = '';
    const totalPages = Math.ceil(produit.length / cargaisonsParPage);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i.toString();
        const randomIndex = Math.floor(Math.random() * buttonClasses.length);
        button.className = `${buttonClasses[randomIndex]} ${i === page ? 'active' : ''}`;
        button.addEventListener('click', () => afficherProduit(produit, i, tbodyElement));
        pagination.appendChild(button);
    }
    document.querySelectorAll('.btn-trash').forEach(button => {
        button.addEventListener('click', (event) => {
            const target = event.target;
            const parentNode = target.parentNode;
            const idproduit = parentNode.getAttribute('data-id');
            supprimerProduit(idCargo, idproduit);
            afficherDetailsCargaison(idCargo);
        });
    });
}
/* ============AFFICHAGE DES PRODUITS============== */
const bodyProduit = document.getElementById('bodyProduit');
function displayProduit() {
    fetchProduit().then(produits => {
        console.log(produits);
        afficherProduit(produits, page = 1, bodyProduit);
    });
}
displayProduit();
/* ===========Afficher details */
function afficherDetailsCargaison(cargaisonId) {
    fetch('../api.php')
        .then(response => response.json())
        .then(data => {
        const cargaisons = data.cargaisons;
        let cargo = null;
        for (let i = 0; i < cargaisons.length; i++) {
            if (cargaisons[i].numero === cargaisonId) {
                cargo = cargaisons[i];
                break;
            }
        }
        const masseCargo = cargo.poidsMax;
        let sommepoids = 0;
        cargo?.produit.forEach((produit) => {
            sommepoids += produit.poids;
        });
        const masseProduit = sommepoids;
        const masseRestante = masseCargo - sommepoids;
        document.getElementById('masseRestante').textContent = masseRestante.toString();
        const bodyDetails = document.getElementById('bodyDetailsCargo');
        document.getElementById('codecargo').textContent = cargaisonId;
        document.getElementById('codecargo').style.color = "red";
        document.getElementById('nombreProduit').textContent = cargo.produit.length.toString();
        afficherProduit(cargo.produit, page = 1, bodyDetails, cargo?.numero);
    });
}
/* ================Supression de produit============================= */
function supprimerProduit(idcargo, codeProduit) {
    fetcher({ action: 'supprimer-produit', idcargo: idcargo, codeProduit: codeProduit });
}
/* ================>changer etat avancement<====================== */
function changer_etat_avancement_cargo(cargaisonId, etat) {
    fetcher({ action: 'changer_etat_avancement', idcargo: cargaisonId, newState: etat, });
}
/* ====================================changer etat produit========================== */
function changer_etat_produit(cargaisonId, codeProduit, etat) {
    fetcher({ action: 'changerEtatProduit', id: cargaisonId, newetatProd: etat, codePro: codeProduit });
}
function showAlert(messag) {
    const modal = document.getElementById('alertModal');
    const showAlert = document.getElementById('showalert').textContent = messag;
    if (modal) {
        modal.style.display = "block";
        setTimeout(() => {
            modal.style.display = "none";
        }, 3000); // Hide after 3 seconds
    }
}
document.getElementById("bts")?.addEventListener('click', () => {
    /* showAlert() */
});
