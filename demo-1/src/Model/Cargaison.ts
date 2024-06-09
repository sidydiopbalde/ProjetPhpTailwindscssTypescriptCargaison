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
    private cargaisons: Cargaison[] = [];
    private produits: Produit[] = [];
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


    ajouterCargaison(cargaison: Cargaison): void {
      this.cargaisons.unshift(cargaison);
    }
  
    listerCargaisons(): Cargaison[] {
      return this.cargaisons;
    }
    filtrerCargaisonsParType(type: string): Cargaison[] {
      return this.cargaisons.filter(cargaison => cargaison.type === type);
    }

    ajouterProduit(produit: Produit): boolean {
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
        super(action, numero, limite, value, poidsMax, pointDepart, pointArrive, 
        dateDepart, dateArrive, distance, type, etatGlobal, etatAvancement, produit);
    }
}


 
class Aerienne extends Cargaison {
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
      super(action, numero, limite, value, poidsMax, pointDepart, pointArrive, 
        dateDepart, dateArrive, distance, type, etatGlobal, etatAvancement, produit);
    }
    produitEstValide(produit: Produit): boolean {
      return !(produit instanceof Chimique); 
    }
}

class Routiere extends Cargaison {
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
      super(action, numero, limite, value, poidsMax, pointDepart, pointArrive, 
        dateDepart, dateArrive, distance, type, etatGlobal, etatAvancement, produit);
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
  }*/
} 

export { Cargaison };

export interface client{
  clientFirstName:string;
  clientLastName:string;
  clientPhone: number;
  clientAdress: string;
}
 class Produit {

 
  numero: string;
  poids: number;
  nomProduit: string;
  typeProduit: string;
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
   
    numero: string,
    poids: number,
    nomProduit: string,
    typeProduit: string,
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
  
    this.numero = numero;
    this.poids = poids;
    this.nomProduit = nomProduit;
    this.typeProduit = typeProduit;
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
 export {Maritime, Aerienne, Routiere };


export class Produit1 {
      numero: string;
      poids: number;
      nomProduit: string;
      typeProduit: string;
      frais:number;
      etat:string;
      emeteur: Client;
      destinataire: Client

  constructor(
    numero: string,
    poids: number,
    nomProduit: string,
    typeProduit: string,
    frais:number,
    etat:string,
    emeteur: Client,
    destinataire: Client
  ) {
    this.numero = numero;
    this.poids = poids;
    this.nomProduit = nomProduit;
    this.typeProduit = typeProduit;
    this.frais = frais;
    this.etat =   etat;
    this.emeteur = emeteur;
    this.destinataire = destinataire;
  }
}
 export interface Client{
  FirstName:string;
  LastName:string;
  Phone: number;
  Adress: string;
  Mail:string;
}


  class Chimique extends Produit1 {
   
  private toxicity:number
    constructor(
      numero: string,
      poids: number,
      nomProduit: string,
      typeProduit: string,
      frais:number,
      etat:string,
      emeteur: Client,
      destinataire: Client,
      toxicity:number
    ) {
      super(numero, poids, nomProduit, typeProduit,frais, etat, emeteur, destinataire);
      this.toxicity=toxicity
     
      /* if (toxicite < 1 || toxicite > 10) {
        throw new Error("Le degré de toxicité doit être entre 1 et 10.");
      } */
    }
  }
  class Alimentaire extends Produit1 {
    constructor(
      numero: string,
      poids: number,
      nomProduit: string,
      typeProduit: string,
      frais:number,
      etat:string,
      emeteur: Client,
      destinataire: Client,
    ) {
      super(numero, poids, nomProduit, typeProduit,frais, etat, emeteur, destinataire);
    }
  }
  class Materiel extends Produit1 {
    constructor(
      numero: string,
      poids: number,
      nomProduit: string,
      typeProduit: string,
      frais:number,
      etat:string,
      emeteur: Client,
      destinataire: Client,
    ) {
      super(numero, poids, nomProduit, typeProduit,frais, etat, emeteur, destinataire);
    }
  }
  
  class Fragile extends Materiel {
    constructor(
      numero: string,
      poids: number,
      nomProduit: string,
      typeProduit: string,
      frais:number,
      etat:string,
      emeteur: Client,
      destinataire: Client,
    ) {
      super(numero, poids, nomProduit, typeProduit,frais, etat, emeteur, destinataire);
    }
  }
  
  class Incassable extends Materiel {
    constructor(
      numero: string,
      poids: number,
      nomProduit: string,
      typeProduit: string,
      frais:number,
      etat:string,
      emeteur: Client,
      destinataire: Client,
    ) {
      super(numero, poids, nomProduit, typeProduit,frais, etat, emeteur, destinataire);
    }
  }
  
  export {  Alimentaire, Chimique, Materiel, Fragile, Incassable };