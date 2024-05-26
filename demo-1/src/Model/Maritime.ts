import { Cargaison } from "./Cargaisaon.js";
import { Alimentaire } from "./Alimentaire.js";
import { Chimique } from "./Chimique.js";
import { Fragile } from "./Fragile.js";
import { Incassable } from "./Incassable.js";
import { Produit } from "./Produit.js";

export class Maritime extends Cargaison {

    constructor(distance: number, produits:Produit[]) {
      super(distance, produits);
    }
  
  

   public  ajouterProduit(produit: Produit): void {
        super.ajouterProduit(produit)
    }

   public calculerFrais(produit:Produit): number {
        let tarif:number =0;
        
        if(produit instanceof Alimentaire){
            tarif = 90;
        }
        if(produit instanceof Incassable){
            tarif=400;
        }
        if(produit instanceof Chimique){
          tarif = 500;
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