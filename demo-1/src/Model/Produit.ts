export abstract class Produit {
   
   constructor(private libelle: string, private poids: number) {}
 
   public getLibelle(): string {
     return this.libelle;
   }
 
   public setLibelle(libelle: string): void {
     this.libelle = libelle;
   }
 
   public getPoids(): number {
     return this.poids;
   }
 
   public setPoids(poids: number): void {
     this.poids = poids;
   }
 
   public abstract info(): void;


  
 }