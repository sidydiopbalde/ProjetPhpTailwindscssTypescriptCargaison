import { Produit } from "./Produit.js";

export class Chimique extends Produit {

    constructor(libelle: string,poids: number, private degreToxicite: number) {
      super(libelle, poids);
      this.degreToxicite = degreToxicite;
    }
  
    public getDegreToxicite(): number {
      return this.degreToxicite;
    }
  
    public setDegreToxicite(degre: number): void {
      this.degreToxicite = degre;
    }
  
    public info(): void {
      console.log(`Produit Chimique: ${this.getLibelle()}, Poids: ${this.getPoids()} kg, Degré de toxicité: ${this.degreToxicite}`);
    }
}