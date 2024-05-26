import { Produit } from "./Produit.js";
export class Chimique extends Produit {
    degreToxicite;
    constructor(libelle, poids, degreToxicite) {
        super(libelle, poids);
        this.degreToxicite = degreToxicite;
        this.degreToxicite = degreToxicite;
    }
    getDegreToxicite() {
        return this.degreToxicite;
    }
    setDegreToxicite(degre) {
        this.degreToxicite = degre;
    }
    info() {
        console.log(`Produit Chimique: ${this.getLibelle()}, Poids: ${this.getPoids()} kg, Degré de toxicité: ${this.degreToxicite}`);
    }
}
