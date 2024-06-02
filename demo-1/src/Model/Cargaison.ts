// import { Produit } from "./Produit.js";


  class Cargaison {
    action: string;
    numero: string;
    poidsMax: number;
    pointDepart: string;
    pointArrive: string;
    dateDepart:string;
    dateArrive:string;
    distance: number;
    type: string;
    etatGlobal:string;
    etatAvancement:string;
    produit:[]
    constructor(
      action: string,
      numero: string,
      poidsMax: number,
      pointDepart: string,
      pointArrive: string,
      dateDepart:string,
      dateArrive:string,
      distance: number,
      type: string,
      etatGlobal:string,
      etatAvancement:string,
      produit:[]
    ) {
      this.action = action;
      this.numero = numero;
      this.poidsMax = poidsMax;
      this.pointDepart = pointDepart;
      this.pointArrive = pointArrive;
      this.dateDepart=dateDepart;
      this.dateArrive=dateArrive;
      this.distance = distance;
      this.type = type;
      this.etatGlobal=etatGlobal;
      this.etatAvancement=etatAvancement;
      this.produit=produit;
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

  action: string;
  numero: string;
  /* idCargo:string; */
  poids: number;
  nomProduit: string;
  typeProduit: string;
  clientFirstName:string;
  clientLastName:string;
  clientPhone: number;
  clientAdress: string;
  nomDestin:string;
  prenomDestin:string;
  addressDestin:string;
  
  constructor(
    action: string,
    numero: string,
 /*    idCargo:string, */
    poids: number,
    nomProduit: string,
    typeProduit: string,
    clientFirstName:string,
    clientLastName:string,
    clientPhone: number,
    clientAdress: string,
    nomDestin: string,
    prenomDestin:string,
    addressDestin:string,
    
  ) {
    this.action = action;
    this.numero = numero;
  /*   this.idCargo=idCargo; */
    this.poids = poids;
    this.nomProduit = nomProduit;
    this.typeProduit = typeProduit;
    this.clientFirstName=clientFirstName;
    this.clientLastName=clientLastName;
    this.clientPhone=clientPhone;
    this.clientAdress = clientAdress;
    this.nomDestin = nomDestin;
    this.prenomDestin=prenomDestin;
    this.addressDestin=addressDestin;
   
  }
}


export {Produit}