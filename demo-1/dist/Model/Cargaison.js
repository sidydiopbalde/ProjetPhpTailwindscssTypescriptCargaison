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
}
/*   private cargaisons: Cargaison[] = [];

  ajouterCargaison(cargaison: Cargaison): void {
    this.cargaisons.push(cargaison);
  }

  listerCargaisons(): Cargaison[] {
    return this.cargaisons;
  }

  filtrerCargaisonsParType(type: string): Cargaison[] {
    return this.cargaisons.filter(cargaison => cargaison.type === type);
  }
} */
export { Cargaison };
class Produit {
    action;
    numero;
    poids;
    nomProduit;
    typeProduit;
    /*   client:client; */
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
    constructor(action, numero, poids, nomProduit, typeProduit, 
    /*  client:client, */
    clientFirstName, clientLastName, clientPhone, clientMail, clientAdress, nomDestin, prenomDestin, addressDestin, mailDestin, phoneDestin, frais, etat) {
        this.action = action;
        this.numero = numero;
        /*   this.idCargo=idCargo; */
        this.poids = poids;
        this.nomProduit = nomProduit;
        this.typeProduit = typeProduit;
        /*  this.client=client; */
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
