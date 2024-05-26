import { Cargaison } from "./Cargaisaon.js";
import { Alimentaire } from "./Alimentaire.js";
import { Fragile } from "./Fragile.js";
import { Incassable } from "./Incassable.js";
export class Aerienne extends Cargaison {
    constructor(distance, produits) {
        super(distance, produits);
    }
    ajouterProduit(produit) {
        super.ajouterProduit(produit);
    }
    calculerFrais(produit) {
        let tarif = 0;
        if (produit instanceof Alimentaire) {
            tarif = 300;
        }
        if (produit instanceof Incassable || produit instanceof Fragile) {
            tarif = 100;
        }
        return produit.getPoids() * this.getDistance() * tarif;
    }
    nbProduit() {
        return this.getProduits().length;
    }
    sommeTotale() {
        return this.getProduits().reduce((total, produit) => total + this.calculerFrais(produit), 0);
    }
    info() {
        console.log(`Cargaison Aerienne, Distance: ${this.getDistance()} km`);
    }
}
