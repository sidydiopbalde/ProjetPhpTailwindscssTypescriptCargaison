import { Produit } from "./Produit.js";

export class Alimentaire extends Produit {
    public info(): void {
      console.log(`Produit Alimentaire: ${this.getLibelle()}, Poids: ${this.getPoids()} kg`);
    }
}