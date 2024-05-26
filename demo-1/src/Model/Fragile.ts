import { Materiel } from "./Materiel.js";

export class Fragile extends Materiel {
    public info(): void {
      console.log(`Produit Matériel Fragile: ${this.getLibelle()}, Poids: ${this.getPoids()} kg`);
    }
}