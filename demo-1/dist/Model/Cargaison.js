// import { Produit } from "./Produit.js";
class Cargaison {
    action;
    numero;
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
    constructor(action, numero, poidsMax, pointDepart, pointArrive, dateDepart, dateArrive, distance, type, etatGlobal, etatAvancement, produit) {
        this.action = action;
        this.numero = numero;
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
    /* idCargo:string; */
    poids;
    nomProduit;
    typeProduit;
    clientFirstName;
    clientLastName;
    clientPhone;
    clientAdress;
    nomDestin;
    prenomDestin;
    addressDestin;
    constructor(action, numero, 
    /*    idCargo:string, */
    poids, nomProduit, typeProduit, clientFirstName, clientLastName, clientPhone, clientAdress, nomDestin, prenomDestin, addressDestin) {
        this.action = action;
        this.numero = numero;
        /*   this.idCargo=idCargo; */
        this.poids = poids;
        this.nomProduit = nomProduit;
        this.typeProduit = typeProduit;
        this.clientFirstName = clientFirstName;
        this.clientLastName = clientLastName;
        this.clientPhone = clientPhone;
        this.clientAdress = clientAdress;
        this.nomDestin = nomDestin;
        this.prenomDestin = prenomDestin;
        this.addressDestin = addressDestin;
    }
}
export { Produit };
