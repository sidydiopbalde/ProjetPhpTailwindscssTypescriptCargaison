// import { Produit } from "./Produit.js";
/* class Cargaison {
  idcargo: string;
  numero: string;
  poidsMax: number;
  lieu_depart: string;
  lieu_arrivee: string;
  distance_km: number;
  type: string;

  private cargaisons: Cargaison[] = [];

  constructor(
    idcargo: string,
    numero: string,
    poidsMax: number,
    lieu_depart: string,
    lieu_arrivee: string,
    distance_km: number,
    type: string,
  
  ) {
    this.idcargo = idcargo;
    this.numero = Cargaison.generateRandomNumero()
    this.poidsMax = poidsMax;
    this.lieu_depart = lieu_depart;
    this.lieu_arrivee = lieu_arrivee;
    this.distance_km = distance_km;
    this.type = type;
   
  } */
class Cargaison {
    action;
    numero;
    poidsMax;
    pointDepart;
    pointArrive;
    distance;
    type;
    constructor(action, numero, poidsMax, pointDepart, pointArrive, distance, type) {
        this.action = action;
        this.numero = numero;
        this.poidsMax = poidsMax;
        this.pointDepart = pointDepart;
        this.pointArrive = pointArrive;
        this.distance = distance;
        this.type = type;
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
