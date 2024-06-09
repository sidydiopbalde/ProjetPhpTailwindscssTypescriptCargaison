// import { Produit } from "./Produit.js";
class Cargaison {
    action;
    numero;
    limite;
    value;
    poidsMax;
    pointDepart;
    pointArrive;
    dateDepart;
    dateArrive;
    distance;
    type;
    etatGlobal;
    etatAvancement;
    cargaisons = [];
    produits = [];
    produit;
    constructor(action, numero, limite, value, poidsMax, pointDepart, pointArrive, dateDepart, dateArrive, distance, type, etatGlobal, etatAvancement, produit) {
        this.action = action;
        this.numero = numero;
        this.limite = limite;
        this.value = value;
        this.poidsMax = poidsMax;
        this.pointDepart = pointDepart;
        this.pointArrive = pointArrive;
        this.dateDepart = dateDepart;
        this.dateArrive = dateArrive;
        this.distance = distance;
        this.type = type;
        this.etatGlobal = etatGlobal;
        this.etatAvancement = etatAvancement;
        this.produit = produit;
    }
    ajouterCargaison(cargaison) {
        this.cargaisons.unshift(cargaison);
    }
    listerCargaisons() {
        return this.cargaisons;
    }
    filtrerCargaisonsParType(type) {
        return this.cargaisons.filter(cargaison => cargaison.type === type);
    }
    ajouterProduit(produit) {
        if (this.type === "Plein" && this.produits.length >= this.value) {
            console.log("Limite de nombre de produits atteinte");
            return false;
        }
        const poidsTotal = this.produits.reduce((total, prod) => total + prod.poids, 0) + produit.poids;
        if (this.type === "PleinPoids" && poidsTotal > this.value) {
            console.log("Limite de poids atteinte");
            return false;
        }
        this.produits.push(produit);
        return true;
    }
}
class Maritime extends Cargaison {
    constructor(action, numero, limite, value, poidsMax, pointDepart, pointArrive, dateDepart, dateArrive, distance, type, etatGlobal, etatAvancement, produit) {
        super(action, numero, limite, value, poidsMax, pointDepart, pointArrive, dateDepart, dateArrive, distance, type, etatGlobal, etatAvancement, produit);
    }
}
class Aerienne extends Cargaison {
    constructor(action, numero, limite, value, poidsMax, pointDepart, pointArrive, dateDepart, dateArrive, distance, type, etatGlobal, etatAvancement, produit) {
        super(action, numero, limite, value, poidsMax, pointDepart, pointArrive, dateDepart, dateArrive, distance, type, etatGlobal, etatAvancement, produit);
    }
    produitEstValide(produit) {
        return !(produit instanceof Chimique);
    }
}
class Routiere extends Cargaison {
    constructor(action, numero, limite, value, poidsMax, pointDepart, pointArrive, dateDepart, dateArrive, distance, type, etatGlobal, etatAvancement, produit) {
        super(action, numero, limite, value, poidsMax, pointDepart, pointArrive, dateDepart, dateArrive, distance, type, etatGlobal, etatAvancement, produit);
    }
}
export { Cargaison };
class Produit {
    numero;
    poids;
    nomProduit;
    typeProduit;
    clientFirstName;
    clientLastName;
    clientPhone;
    clientMail;
    clientAdress;
    nomDestin;
    prenomDestin;
    addressDestin;
    mailDestin;
    phoneDestin;
    frais;
    etat;
    constructor(numero, poids, nomProduit, typeProduit, clientFirstName, clientLastName, clientPhone, clientMail, clientAdress, nomDestin, prenomDestin, addressDestin, mailDestin, phoneDestin, frais, etat) {
        this.numero = numero;
        this.poids = poids;
        this.nomProduit = nomProduit;
        this.typeProduit = typeProduit;
        this.clientFirstName = clientFirstName;
        this.clientLastName = clientLastName;
        this.clientPhone = clientPhone;
        this.clientMail = clientMail;
        this.clientAdress = clientAdress;
        this.nomDestin = nomDestin;
        this.prenomDestin = prenomDestin;
        this.addressDestin = addressDestin;
        this.mailDestin = mailDestin;
        this.phoneDestin = phoneDestin;
        this.frais = frais;
        this.etat = etat;
    }
}
export { Produit };
export { Maritime, Aerienne, Routiere };
export class Produit1 {
    numero;
    poids;
    nomProduit;
    typeProduit;
    frais;
    etat;
    emeteur;
    destinataire;
    constructor(numero, poids, nomProduit, typeProduit, frais, etat, emeteur, destinataire) {
        this.numero = numero;
        this.poids = poids;
        this.nomProduit = nomProduit;
        this.typeProduit = typeProduit;
        this.frais = frais;
        this.etat = etat;
        this.emeteur = emeteur;
        this.destinataire = destinataire;
    }
}
class Chimique extends Produit1 {
    toxicity;
    constructor(numero, poids, nomProduit, typeProduit, frais, etat, emeteur, destinataire, toxicity) {
        super(numero, poids, nomProduit, typeProduit, frais, etat, emeteur, destinataire);
        this.toxicity = toxicity;
        /* if (toxicite < 1 || toxicite > 10) {
          throw new Error("Le degré de toxicité doit être entre 1 et 10.");
        } */
    }
}
class Alimentaire extends Produit1 {
    constructor(numero, poids, nomProduit, typeProduit, frais, etat, emeteur, destinataire) {
        super(numero, poids, nomProduit, typeProduit, frais, etat, emeteur, destinataire);
    }
}
class Materiel extends Produit1 {
    constructor(numero, poids, nomProduit, typeProduit, frais, etat, emeteur, destinataire) {
        super(numero, poids, nomProduit, typeProduit, frais, etat, emeteur, destinataire);
    }
}
class Fragile extends Materiel {
    constructor(numero, poids, nomProduit, typeProduit, frais, etat, emeteur, destinataire) {
        super(numero, poids, nomProduit, typeProduit, frais, etat, emeteur, destinataire);
    }
}
class Incassable extends Materiel {
    constructor(numero, poids, nomProduit, typeProduit, frais, etat, emeteur, destinataire) {
        super(numero, poids, nomProduit, typeProduit, frais, etat, emeteur, destinataire);
    }
}
export { Alimentaire, Chimique, Materiel, Fragile, Incassable };
