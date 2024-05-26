import { Materiel } from "./Materiel.js";
export class Fragile extends Materiel {
    info() {
        console.log(`Produit Matériel Fragile: ${this.getLibelle()}, Poids: ${this.getPoids()} kg`);
    }
}
