// import { Produit } from "./Produit.js";


  class Cargaison {
    action: string;
    numero: string;
    limite:string;
    value:number;
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
      limite:string,
      value:number, 
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
      this.limite=limite;
      this.value=value;
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

export interface client{
  clientFirstName:string;
  clientLastName:string;
  clientPhone: number;
  clientAdress: string;
}
 class Produit {

  action: string;
  numero: string;
  poids: number;
  nomProduit: string;
  typeProduit: string;
/*   client:client; */
  clientFirstName:string;
  clientLastName:string;
  clientPhone: number;
  clientMail:string;
  clientAdress: string;
  nomDestin:string;
  prenomDestin:string;
  addressDestin:string;
  mailDestin:string;
  phoneDestin:number;
  frais:number;
  etat:string;
  constructor(
    action: string,
    numero: string,
    poids: number,
    nomProduit: string,
    typeProduit: string,
   /*  client:client, */
    clientFirstName:string,
    clientLastName:string,
    clientPhone: number,
    clientMail:string,
    clientAdress: string,
    nomDestin: string,
    prenomDestin:string,
    addressDestin:string,
    mailDestin:string,
    phoneDestin:number,
    frais:number,
    etat:string
    
  ) {
    this.action = action;
    this.numero = numero;
  /*   this.idCargo=idCargo; */
    this.poids = poids;
    this.nomProduit = nomProduit;
    this.typeProduit = typeProduit;
   /*  this.client=client; */
    this.clientFirstName=clientFirstName;
    this.clientLastName=clientLastName;
    this.clientPhone=clientPhone;
    this.clientMail=clientMail;
    this.clientAdress = clientAdress;
    this.nomDestin = nomDestin;
    this.prenomDestin=prenomDestin;
    this.addressDestin=addressDestin;
    this.mailDestin=mailDestin;
    this.phoneDestin=phoneDestin;
   this.frais=frais;
   this.etat=etat
  }
}


export {Produit}