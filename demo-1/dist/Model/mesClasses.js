"use strict";
/* class client {
    private _nom: string;
  private  _prenom: string;
   private _numéro:number;

constructor(nom:string,prenom:string,numéro:number){
   this._nom=nom;
   this._prenom=prenom;
   this._numéro=numéro;
}
get nom():string{
   return this._nom;
}
set nom(value:string){
   this._nom=value;
}
get prenom():string{
   return this._prenom;
}
set prenom(value:string){
   this._prenom=value;
}
get numéro():number{
   return this._numéro;
}
set numéro(value:number){
   this._numéro=value;
}


}
export abstract class produit {
   nom: string;
   poids: number;
   _client:client

   constructor(nom: string, poids: number,client:client) {
       this.nom = nom;
       this.poids = poids;
       this._client=client;
   }
}

export class produit_alimentaire extends produit {
   constructor(nom: string, poids: number,client:client) {
       super(nom, poids,client);
   }
}

export class produit_chimique extends produit {
   degre_toxite: number;
   constructor(nom: string, poids: number, degre_toxite: number,client:client) {
       super(nom, poids,client);
       this.degre_toxite = degre_toxite;
   }
}

export abstract class produit_materiel extends produit {
   constructor(nom: string, poids: number,client:client) {
       super(nom, poids,client);
   }
}

export class produit_incassable extends produit_materiel {
   type: string = "incassable";
   constructor(nom: string, poids: number, type: string = "incassable", client:client) {
       super(nom, poids,client);
       this.type = type;
   }
}

export class produit_fragile extends produit_materiel {
   type: string = "fragile";
   constructor(nom: string, poids: number, type: string = "fragile",client:client) {
       super(nom, poids,client);
       this.type = type;
   }
}
function generateUniqueCode(): string {
   return 'SDB' + Math.floor(Math.random()*300);
}

export abstract class Cargaison {
    private type: string;
    private code:string;
   private distance: number;
   private pays_depart: string;
   private frais: number;
   private pays_arrivee: string;
   private date_depart: string;
   private date_arrivee: string;
   private produits: produit[];
   private etat_avancement:string;

   constructor(code:string,libelle: string, type: string, distance: number, frais: number, pays_depart: string, pays_arrivee: string, date_depart: string, date_arrivee: string, produits: produit[],etat_avancement:string) {
       this.code=  code ||generateUniqueCode();
       this.type = type;
       this.distance = distance;
       this.frais = frais;
       this.pays_depart = pays_depart;
       this.pays_arrivee = pays_arrivee;
       this.date_depart = date_depart;
       this.date_arrivee = date_arrivee;
       this.produits = produits;
       this.etat_avancement=etat_avancement;
   }
get CARGOcode():string{
   return this.code;
}
set CARGOcode(value:string){
    this.code=value
}
 
  

   get cargotype(): string {
       return this.type;
   }
   set cargotype(value: string) {
       this.type = value;
   }

   get cargodistance(): number {
       return this.distance;
   }
   set cargodistance(value: number) {
       this.distance = value;
   }

   get cargofrais(): number {
       return this.frais;
   }
   set cargofrais(value: number) {
       this.frais = value;
   }

   get cargopaysdepart(): string {
       return this.pays_depart;
   }
   set cargopays_depart(value: string) {
       this.pays_depart = value;
   }

   get cargopays_arrivee(): string {
       return this.pays_arrivee;
   }
   set cargopays_arrivee(value: string) {
       this.pays_arrivee = value;
   }

   get cargodate_depart(): string {
       return this.date_depart;
   }
   set cargodate_depart(value: string) {
       this.date_depart = value;
   }

   get cargodate_arrivee(): string {
       return this.date_arrivee;
   }
   set cargodate_arrivee(value: string) {
       this.date_arrivee = value;
   }

   get cargoproduits(): produit[] {
       return this.produits;
   }
   set cargoproduits(value: produit[]) {
       this.produits = value;
   }
   get cargoetat_avancement():string{
       return this.etat_avancement;
   }
   set cargoetat_avancement(value:string){
       this.etat_avancement=value;
   }
   public ajouterProduit(produit: produit): void {
       if (this.produits.length <= 10) {
           this.produits.push(produit);
       } else {
           throw console.error("veuillez mettre une quantité plus petite ");
       }
   }

   // Méthodes abstraites
   abstract calculerFrais(produit: produit): number;
   abstract sommetotal(): number;
   abstract nbre_produit(): number;
}

export class Maritime extends Cargaison {
   constructor(code:string,libelle: string, type: string, distance: number, pays_depart: string, pays_arrivee: string, date_depart: string, date_arrivee: string, produits: produit[],etat_avancementt:string) {
       super(code,libelle, type, distance, 0, pays_depart, pays_arrivee, date_depart, date_arrivee, produits,etat_avancementt);
   }

   ajouterProduit(produit: produit) {
       super.ajouterProduit(produit);
   }

   calculerFrais(produit: produit) {
       let tarif;
       if (produit instanceof produit_incassable) {
           tarif = 400;
       } else if (produit instanceof produit_alimentaire) {
           tarif = 90;
       } else if (produit instanceof produit_chimique) {
           tarif = 500;
       } else {
           throw new Error('Type de produit inconnu');
       }
       if (produit instanceof produit_chimique) {
           return this.distance * produit.degre_toxite * tarif;
       } else {
           return this.distance * produit.poids * tarif;
       }
   }

   sommetotal() {
       return this.produits.reduce((total, produit) => total + this.calculerFrais(produit), 0);
   }

   nbre_produit() {
       return this.produits.length;
   }
}

export class Routiere extends Cargaison {
   constructor(code:string,libelle: string, type: string, distance: number, pays_depart: string, pays_arrivee: string, date_depart: string, date_arrivee: string, produits: produit[],etat_avancement:string) {
       super(code,libelle, type, distance, 0, pays_depart, pays_arrivee, date_depart, date_arrivee, produits,etat_avancement)
   }

   public ajouterProduit(produit: produit): void {
       super.ajouterProduit(produit);
   }

   calculerFrais(produit: produit): number {
       let tarif: number;

       if (produit instanceof produit_incassable || produit instanceof produit_fragile) {
           tarif = 200;
       } else if (produit instanceof produit_alimentaire) {
           tarif = 100;
       } else {
           throw new Error('Type de produit inconnu');
       }

       return this.distance * produit.poids * tarif;
   }

   sommetotal(): number {
       return this.produits.reduce((total, produit) => total + this.calculerFrais(produit), 0);
   }

   nbre_produit(): number {
       return this.produits.length;
   }
}

export class Aerien extends Cargaison {
   constructor(code:string, type: string, distance: number, pays_depart: string, pays_arrivee: string, date_depart: string, date_arrivee: string, produits: produit[],etat_avancement:string) {
       super(code, type, distance, 0, pays_depart, pays_arrivee, date_depart, date_arrivee, produits,etat_avancement);
   }

   public ajouterProduit(produit: produit): void {
       super.ajouterProduit(produit);
   }

   calculerFrais(produit: produit): number {
       let tarif: number;

       if (produit instanceof produit_incassable || produit instanceof produit_fragile) {
           tarif = 1000;
       } else if (produit instanceof produit_alimentaire) {
           tarif = 300;
       } else {
           throw new Error('Type de produit inconnu');
       }

       return this.distance * produit.poids * tarif;
   }

   sommetotal(): number {
       return this.produits.reduce((total, produit) => total + this.calculerFrais(produit), 0);
   }

   nbre_produit(): number {
       return this.produits.length;
   }
}  */ 
