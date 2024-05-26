import { Produit } from "./Produit.js";
export class Alimentaire extends Produit {
    info() {
        console.log(`Produit Alimentaire: ${this.getLibelle()}, Poids: ${this.getPoids()} kg`);
    }
}
