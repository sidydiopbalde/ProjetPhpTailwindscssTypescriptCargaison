// import { Produit } from "./Produit.js";
class Cargaison {
    action;
    numero;
    poidsMax;
    pointDepart;
    pointArrive;
    dateDepart;
    dateArrive;
    distance;
    type;
    etatGlobal;
    etatAvancement;
    produit;
    constructor(action, numero, poidsMax, pointDepart, pointArrive, dateDepart, dateArrive, distance, type, etatGlobal, etatAvancement, produit) {
        this.action = action;
        this.numero = numero;
        this.poidsMax = poidsMax;
        this.pointDepart = pointDepart;
        this.pointArrive = pointArrive;
        this.dateDepart = dateDepart;
        this.dateArrive = dateArrive;
        this.distance = distance;
        this.type = type;
        this.etatGlobal = etatGlobal;
        this.etatAvancement = etatAvancement;
        this.produit = produit;
    }
}
/*   private cargaisons: Cargaison[] = [];

  ajouterCargaison(cargaison: Cargaison): void {
    this.cargaisons.push(cargaison);
  }

  listerCargaisons(): Cargaison[] {
    return this.cargaisons;
  }

  filtrerCargaisonsParType(type: string): Cargaison[] {
    return this.cargaisons.filter(cargaison => cargaison.type === type);
  }
} */
export { Cargaison };
class maritime extends Cargaison {
}
