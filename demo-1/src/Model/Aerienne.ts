import { Cargaison } from "./Cargaisaon.js";
import { Alimentaire } from "./Alimentaire.js";
import { Chimique } from "./Chimique.js";
import { Fragile } from "./Fragile.js";
import { Incassable } from "./Incassable.js";
import { Maritime } from "./Maritime.js";
import { Terrestre } from "./Terrestre.js";
import { Produit } from "./Produit.js";

export class Aerienne extends Cargaison {

    constructor(distance: number, produits:Produit[]) {
      super(distance, produits);
    }
  
  

  public ajouterProduit(produit: Produit): void {
        super.ajouterProduit(produit)
    }

   public calculerFrais(produit:Produit): number {
        let tarif:number =0;
        
        if(produit instanceof Alimentaire){
            tarif = 300;
        }
        if(produit instanceof Incassable || produit instanceof Fragile){
            tarif=100;
        }
        return produit.getPoids() * this.getDistance() * tarif ;
    }
    
    public nbProduit():number {
        return this.getProduits().length;
    }
    
    public sommeTotale(): number {
      
        return this.getProduits().reduce((total, produit) => total + this.calculerFrais(produit),0);
     } 

      public info(): void {
        console.log(`Cargaison Aerienne, Distance: ${this.getDistance()} km`);
      }
}